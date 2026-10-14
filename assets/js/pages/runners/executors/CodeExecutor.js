// Python can also run in the browser with Pyodide, for sites the class server
// won't answer (its CORS settings only allow some origins). Loaded once, on first use.
const PYODIDE_URL = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.mjs';
let pyodidePromise = null;

function getPyodide() {
  if (!pyodidePromise) {
    pyodidePromise = import(PYODIDE_URL)
      .then(({ loadPyodide }) => loadPyodide())
      .catch((err) => {
        pyodidePromise = null; // allow a retry after a network hiccup
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
      if (lang === 'javascript' && isLocalhost) {
        this.runJavaScriptFallback(code, startTime);
      } else if (lang === 'python') {
        await this.runPythonInBrowser(code, startTime);
      } else {
        outputDiv.textContent = 'Error: ' + err.message;
        if (execTimeSpan) execTimeSpan.textContent = '';
      }
    }
  }

  async runPythonInBrowser(code, startTime) {
    const outputDiv = this.outputElement;
    const execTimeSpan = this.execTimeElement;
    outputDiv.textContent = '⏳ Loading Python in your browser (first run takes a few seconds)...';

    let pyodide;
    try {
      pyodide = await getPyodide();
    } catch (loadErr) {
      outputDiv.textContent = 'Error: could not load Python in the browser (' + loadErr.message + ')';
      if (execTimeSpan) execTimeSpan.textContent = '';
      return;
    }

    let output = '';
    const decoder = new TextDecoder();
    const write = (buf) => { output += decoder.decode(buf); return buf.length; };
    pyodide.setStdout({ write });
    pyodide.setStderr({ write });

    const runStart = Date.now();
    try {
      // Each run gets its own namespace, so runners on the same page don't share variables.
      await pyodide.runPythonAsync(code, { globals: pyodide.globals.get('dict')() });
    } catch (pyErr) {
      // Keep just the Python traceback's last line, e.g. "ZeroDivisionError: division by zero"
      const lines = String(pyErr.message).trim().split('\n');
      output += (output && !output.endsWith('\n') ? '\n' : '') + lines[lines.length - 1];
    }

    outputDiv.textContent = output || '[no output]';
    if (execTimeSpan) {
      execTimeSpan.textContent = `⏱Execution time: ${Date.now() - runStart}ms (in browser)`;
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
        execTimeSpan.textContent = `⏱Execution time: ${Date.now() - startTime}ms (local fallback)`;
      }
    } catch (evalErr) {
      outputDiv.textContent = 'Error: ' + evalErr.message;
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
