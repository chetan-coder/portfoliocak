// Pinned Pyodide build used to run Python in the browser when the remote
// runner backend is unreachable. Pinned rather than "latest" so a CDN
// release cannot change behaviour underneath the lessons.
const PYODIDE_VERSION = 'v0.28.3';
const PYODIDE_BASE = `https://cdn.jsdelivr.net/pyodide/${PYODIDE_VERSION}/full/`;

// One interpreter shared by every runner on the page. The first Run pays the
// download; later runs and other boxes reuse it.
let pyodidePromise = null;

function loadPyodideOnce(onProgress) {
  if (!pyodidePromise) {
    pyodidePromise = (async () => {
      onProgress?.();
      const { loadPyodide } = await import(`${PYODIDE_BASE}pyodide.mjs`);
      return loadPyodide({ indexURL: PYODIDE_BASE });
    })().catch((err) => {
      pyodidePromise = null;   // let a later Run retry instead of caching failure
      throw err;
    });
  }
  return pyodidePromise;
}

export class CodeExecutor {
  constructor({ editor, outputElement, execTimeElement, languageSelect, pythonURI, javaURI, fetchOptions = {} } = {}) {
    this.editor = editor;
    this.outputElement = outputElement;
    this.execTimeElement = execTimeElement;
    this.languageSelect = languageSelect;
    this.pythonURI = pythonURI;
    this.javaURI = javaURI;
    this.fetchOptions = fetchOptions;
  }

  async run() {
    const code = this.editor?.getValue?.() || '';
    const lang = this.languageSelect?.value || 'python';
    const outputDiv = this.outputElement;
    const execTimeSpan = this.execTimeElement;

    if (!outputDiv) {
      throw new Error('CodeExecutor requires an output element');
    }

    outputDiv.textContent = '⏳ Running...';
    if (execTimeSpan) execTimeSpan.textContent = '';

    const startTime = Date.now();
    const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';

    let runURL;
    if (lang === 'python') runURL = `${this.pythonURI}/run/python`;
    else if (lang === 'java') runURL = `${this.javaURI}/run/java`;
    else if (lang === 'javascript') runURL = `${this.pythonURI}/run/javascript`;
    else throw new Error(`Unsupported language: ${lang}`);

    const body = JSON.stringify({ code });
    const options = { ...this.fetchOptions, method: 'POST', body };

    try {
      const res = await fetch(runURL, options);
      const result = await res.json();
      const output = result.output || '[no output]';

      if (lang === 'javascript' && isLocalhost && output.includes("No such file or directory: 'node'")) {
        throw new Error('Node.js not available on backend');
      }

      outputDiv.textContent = output;
      if (execTimeSpan) {
        execTimeSpan.textContent = `⏱Execution time: ${Date.now() - startTime}ms`;
      }
    } catch (err) {
      // The remote runner backend only sends CORS headers to allow-listed
      // origins, so a fork served from any other domain gets "Failed to
      // fetch". JavaScript can still run in the browser, so always fall back
      // rather than only on localhost.
      if (lang === 'javascript') {
        this.runJavaScriptFallback(code, startTime);
      } else if (lang === 'python') {
        await this.runPythonFallback(code, startTime);
      } else {
        outputDiv.textContent = 'Error: ' + err.message;
        if (execTimeSpan) execTimeSpan.textContent = '';
      }
    }
  }

  runJavaScriptFallback(code, startTime) {
    const outputDiv = this.outputElement;
    const execTimeSpan = this.execTimeElement;

    try {
      const logs = [];
      const originalLog = console.log;
      console.log = function(...args) {
        logs.push(args.map(arg => String(arg)).join(' '));
        originalLog.apply(console, args);
      };

      eval(code);
      console.log = originalLog;

      outputDiv.textContent = logs.length > 0 ? logs.join('\n') : '[no output]';
      if (execTimeSpan) {
        execTimeSpan.textContent = `⏱Execution time: ${Date.now() - startTime}ms (ran in browser)`;
      }
    } catch (evalErr) {
      outputDiv.textContent = 'Error: ' + evalErr.message;
      if (execTimeSpan) execTimeSpan.textContent = '';
    }
  }

  async runPythonFallback(code, startTime) {
    const outputDiv = this.outputElement;
    const execTimeSpan = this.execTimeElement;

    let pyodide;
    try {
      pyodide = await loadPyodideOnce(() => {
        outputDiv.textContent = '\u23f3 Loading Python for the browser (first run only, ~10MB)...';
      });
    } catch (loadErr) {
      outputDiv.textContent = 'Error: could not load the Python runtime (' + loadErr.message + ')';
      if (execTimeSpan) execTimeSpan.textContent = '';
      return;
    }

    outputDiv.textContent = '\u23f3 Running...';
    const chunks = [];
    // Pyodide's batched writer fires once per line and strips the newline,
    // so put it back or every print() collapses onto one line.
    const write = (text) => chunks.push(text + '\n');

    pyodide.setStdout({ batched: write });
    pyodide.setStderr({ batched: write });

    // input() reads stdin, which does not exist in a browser tab. Point it at
    // window.prompt so lessons that ask for input actually ask.
    pyodide.globals.set('__runner_prompt', (message) => {
      const answer = window.prompt(String(message ?? ''));
      return answer === null ? '' : answer;
    });

    const started = Date.now();
    try {
      await pyodide.runPythonAsync(`
import builtins as __builtins

def __runner_input(prompt=""):
    if prompt:
        print(prompt, end="")
    return __runner_prompt(prompt)

__builtins.input = __runner_input
`);
      await pyodide.runPythonAsync(code);
      const text = chunks.join('').replace(/\n$/, '');
      outputDiv.textContent = text.length ? text : '[no output]';
      if (execTimeSpan) {
        execTimeSpan.textContent = `\u23f1Execution time: ${Date.now() - started}ms (ran in browser)`;
      }
    } catch (pyErr) {
      const text = chunks.join('');
      // Pyodide puts the real Python traceback in the error message.
      outputDiv.textContent = (text ? text + '\n' : '') + String(pyErr.message || pyErr);
      if (execTimeSpan) execTimeSpan.textContent = '';
    }
  }

  bindCopyOutput(button) {
    if (!button || !this.outputElement) return;

    button.addEventListener('click', () => {
      const output = this.outputElement.textContent;
      const original = button.textContent;
      navigator.clipboard.writeText(output).then(() => {
        button.textContent = '✔';
        setTimeout(() => {
          button.textContent = original;
        }, 1200);
      });
    });
  }
}

export default CodeExecutor;
