---
layout: post
title: Capstone Ideation — Four Project Options
description: Four capstone projects our team reviewed, with what each one is, why we considered it, and what we would change.
permalink: /capstone/ideation
toc: True
---

<style>
    /* Screenshot figures - captions and credits inherit theme colors,
       so they work in both light and dark skins */
    .shot {
        margin: 1.5rem 0;
    }
    .shot img {
        display: block;
        width: 100%;
        max-width: 100%;
        height: auto;
        border-radius: 6px;
    }
    .shot figcaption {
        font-size: 0.9rem;
        line-height: 1.5;
        margin-top: 0.5rem;
        opacity: 0.85;
    }
    .shot figcaption .credit {
        display: block;
        font-size: 0.8rem;
        font-style: italic;
        margin-top: 0.25rem;
        opacity: 0.75;
    }
</style>

**Team:** Triple T (The Three Musketeers)

**Members:** Chetan Tiduwar (Scrum Master/Developer), Aaditya Prem (Technologist/Developer), Kashyap Tubati (Technologist/Developer)

**Date started:** 9/1/26

These are four separate capstone options our team reviewed. They are independent projects with nothing to do with each other, and we are writing all four up the same way so we have a clear record of each. For each one we cover what it is, why we picked it, and what we would change.

## Project 1 — Friends of Poway Seniors

### What it is

Friends of Poway Seniors is a 501(c)(3) nonprofit (PVSCC, EIN 51-0183384) that supports seniors and marginalized communities in Poway by providing volunteer opportunities, access to material provisions, and monetary support for municipal-run senior programming and other community outreach.

Last year's capstone team — Nitya, Vivian, and Virginia — rebuilt their site. The original had more than seven nested dropdown menus that were hard to scan, primary calls to action buried inside those menus instead of visible when the page loaded, and support that was only available by phone or email during business hours.

Their rebuild cut the navigation down to three top-level links with a Donate button always visible, and put Donate, Volunteer, and Get Help above the fold.

They added a 24/7 AI chatbot that answers in plain English, an interactive 75-ball bingo game with an auto-caller, a machine-learning event forecasting tool that predicts volunteer and meal needs, and a volunteer signup system with schedule management tied to the weekly bingo games at the Mickey Cafagna Community Center.

<figure class="shot">
  <img src="{{site.baseurl}}/images/ideation/fops-home-hero.jpg" alt="Friends of Poway Seniors homepage hero. A dark green page with a top navigation of Home, Events, About Us, and Resources shows a small 'Poway, California' pill above the large title 'Friends of' in white with 'Poway Seniors' in gold script beneath it, and a circular leaf-pattern logo beginning below the title.">
  <figcaption>
    The Friends of Poway Seniors homepage hero.
    <span class="credit">Screenshot of fops.opencodingsociety.com, captured September 2026.</span>
  </figcaption>
</figure>

### Why we picked it

We picked Friends of Poway Seniors because it's a real local nonprofit serving people with genuine accessibility needs, and because the site already has interactive features we can extend instead of starting from zero. Improvements for this audience are measurable rather than cosmetic — if an older visitor can't read the text or find the volunteer form, that's a real failure we can fix and test.

### What we would change / improve

- Remove the developer status banner from the Bingo page. It currently displays "API Ready · Bingo Volunteer API is running!" to every visitor — that's a debug message being shown to seniors.
- Raise the base font size and enlarge buttons and tap targets across the site. The audience is older adults and the current body text is standard size.
- Give the chat bubble a visible label and make it reachable by keyboard. Right now it's an unlabeled floating icon in the bottom corner.
- Add a plain-language explanation above the volunteer form saying what signing up commits you to, and show a clear confirmation message after the form is submitted.
- Put real upcoming event dates on the Events pages so a visitor knows what's happening this week without having to open the event predictor.
- Test the whole site at 200% browser zoom, which is a normal setting for this audience, and fix anything that overlaps or gets cut off.

<figure class="shot">
  <img src="{{site.baseurl}}/images/ideation/fops-bingo-volunteer.jpg" alt="The Friends of Poway Seniors Bingo page. Under the heading 'Friends of Poway Seniors Bingo — Weekly Games, Community, Prizes' sit two tabs, 'Info &amp; Volunteer' and 'Play Bingo', followed by a green status banner reading 'API Ready · Bingo Volunteer API is running!'. Below, a Bingo panel lists the Mickey Cafagna Community Center address, Sycamore Hall, and Tuesday sales and game times, next to a 'Volunteer Opportunities' form with First Name, Last Name, and Email Address fields.">
  <figcaption>
    The Bingo page with the volunteer signup form &mdash; and the developer status banner sitting above it.
    <span class="credit">Screenshot of fops.opencodingsociety.com, captured September 2026.</span>
  </figcaption>
</figure>

<figure class="shot">
  <img src="{{site.baseurl}}/images/ideation/fops-mission-chatbot.jpg" alt="The 'Our Purpose — Mission &amp; Vision' section of the Friends of Poway Seniors site. Two cards sit side by side: a Mission card headed 'What We Do' describing support for seniors and marginalized communities, and a Vision card headed 'What We Seek'. The footer reads '© 2025 PVSCC 501(c)(3) · EIN: 51-0183384', and an unlabeled round chat bubble icon floats in the bottom-right corner.">
  <figcaption>
    The Mission &amp; Vision section, with the unlabeled chat bubble in the bottom-right corner.
    <span class="credit">Screenshot of fops.opencodingsociety.com, captured September 2026.</span>
  </figcaption>
</figure>

### Live site

[https://fops.opencodingsociety.com/fops/](https://fops.opencodingsociety.com/fops/)

## Project 2 — Poway Woman's Club

### What it is

The Poway Woman's Club is a 501(c)(3) founded in 1960 that runs scholarships, arts programs, civic engagement, and youth leadership work in Poway.

Last year's capstone team — Evan S, Maya D, and Cyrus Z — modernized the club's web presence for an organization that had been operating for 65 years without member-facing digital tools.

They built secure login with Google authorization, real-time messaging between members, a groups system for filtering events by interest, an event calendar with RSVP, member blog posting, and an admin dashboard designed so non-technical club officers can manage the site themselves. The backend runs on Flask APIs.

<figure class="shot">
  <img src="{{site.baseurl}}/images/ideation/pwc-home-hero.jpg" alt="Poway Woman's Club homepage. A white navigation bar carries About, Newsletter, Social, and Log in. Below a black 'Community Tip' strip, the hero reads 'At a glance' above the title 'Poway Woman's Club' and a description of scholarships, arts, civic programs, and youth leadership since 1960, with 'About Us' and 'Member Portal' buttons underneath. A 'What we do' section begins below.">
  <figcaption>
    The Poway Woman's Club homepage hero, with the About Us and Member Portal buttons.
    <span class="credit">Screenshot of poway-women-s-club.github.io, captured September 2026.</span>
  </figcaption>
</figure>

### Why we picked it

We picked the Poway Woman's Club because it's a 65-year-old organization with a real membership to serve, and because the existing build already handles authentication and admin tools — which means we can spend our time on the parts members and visitors actually touch. The club also holds open monthly meetings that visitors can attend without an RSVP, so we can get feedback from real users instead of guessing.

### What we would change / improve

- Add a way to donate. The navigation has About, Newsletter, Social, and Log in — there is currently no path for a visitor to give money to a 501(c)(3) nonprofit.
- Explain the member portal before the login wall. A visitor sees "Member Portal" and "Log in" with no description of what's inside or how a person becomes a member.
- Add a "Join the club" page covering dues, requirements, and who to contact.
- Surface the next meeting on the home page. Meetings are the 2nd Tuesday of every month at 10:00 AM at Templars Hall in Old Poway Park, September through June, and visitors are welcome with no RSVP — but that sits near the bottom of the page.
- Rewrite the "What we do" section in member-facing language. It currently explains the CMS: "These links come from live blog posts whose titles begin with What we do:" — that describes how the site works, not what the club does.
- Give the scholarship program its own page. Scholarships are the club's most searchable offering and currently have no dedicated destination.

<figure class="shot">
  <img src="{{site.baseurl}}/images/ideation/pwc-contact-member-portal.jpg" alt="The 'Contact &amp; visits' section of the Poway Woman's Club site, below a newsletter blurb with a 'Read the newsletter' button. Three cards sit in a row: 'Mailing address' with a P.O. Box in Poway; 'General meetings' listing the 2nd Tuesday of every month, September through June, 10:00 AM at Templars Hall in Old Poway Park, with 'Visitors welcome. No RSVP needed.'; and 'Member messaging' describing the built-in message system, with a 'Go to member portal' button.">
  <figcaption>
    The Contact &amp; visits section: meeting details and member messaging.
    <span class="credit">Screenshot of poway-women-s-club.github.io, captured September 2026.</span>
  </figcaption>
</figure>

### Live site

[https://poway-women-s-club.github.io/pwc/](https://poway-women-s-club.github.io/pwc/)

## Project 3 — Doing Exceptional Deeds (D.A.D.)

### What it is

Doing Exceptional Deeds (D.A.D.) is a 501(c)(3) nonprofit based in San Marcos, CA that runs youth athletics, mentorship, and life-skills programs for kids, student-athletes, and seniors.

Last year's capstone team — Akhil, Neil, and Moiz — wrote a website redesign proposal for the version of the site that existed at the time, which had cramped navigation and a huge wall of text with no visuals.

Their proposal focused on three upgrades. First, a redesigned homepage with a bold hero section, animated stats showing how many youth the organization has served, and a testimonial carousel. Second, an overhauled donation page, because the old one just sent people to an external payment link with zero context; the new version would show donors exactly what their money accomplishes at different price points, with a progress bar to encourage giving. Third, individual program pages with photo galleries and built-in registration forms, since that information was buried inside the homepage text and people had to call or email to learn basic details.

Each team member rotated through design, backend, and content roles so everyone got experience in multiple areas.

Since that proposal, D.A.D. has rebuilt their site using an AI website builder — a "Made with Manus" badge sits in the corner of every page. The version live today already has a full-width hero, a dropdown navigation bar, a Programs page listing nine programs, and an on-site donation form with preset amounts and eleven gift designations.

That changes the job: any work here would start from the current site, not the old one, so it has to be genuinely additive rather than repeating a redesign that already happened.

<figure class="shot">
  <img src="{{site.baseurl}}/images/ideation/dad-home-hero.jpg" alt="Doing Exceptional Deeds homepage hero. A dark green navigation bar with Home, About D.A.D., Compliance, Programs, District Partnerships, Parent Portal, Impact, and Community Impact sits above a photo of three people in athletic apparel with their arms around each other, overlaid with the headline 'Building Character, Leadership &amp; Real-World Readiness.' and a paragraph describing the organization's programs.">
  <figcaption>
    The D.A.D. homepage hero: "Building Character, Leadership &amp; Real-World Readiness."
    <span class="credit">Screenshot of doingexceptionaldeeds.org, captured September 2026.</span>
  </figcaption>
</figure>

### Why we picked it

We looked at D.A.D. because their site still has real, fixable problems, not just cosmetic ones, and because it's a nonprofit making a genuine impact locally, so improving their site felt like it mattered more than working on a random business.

### What we would change / improve

- Fix the broken contact email in the site footer. It currently reads `gtaylor@doingexcpetionaldeeds.org` — "exceptional" is misspelled, so mail sent to that address never reaches D.A.D.
- Add impact copy to each donation amount. The form offers $25, $50, $100, and $250 but never tells a donor what any of those amounts actually pays for.
- Add a progress bar toward a stated fundraising goal on the donation page.
- Give each of the nine programs its own page with photos, age range, schedule, cost, and location. Right now they are cards with a "Learn More" link and no logistics.
- Put a registration form directly on each program page. "Register a Student" is currently buried as a footer quick link.
- Add real impact numbers to the homepage, confirmed with D.A.D. rather than invented.
- Test the whole site on a phone. The desktop navigation carries nine top-level items with dropdowns, which is a lot to collapse into a mobile menu.

<figure class="shot">
  <img src="{{site.baseurl}}/images/ideation/dad-programs-page.jpg" alt="The D.A.D. Programs page. A hero band reads 'Our Programs' over a photo of students sitting outdoors, and below it 'The D.A.D. Development Pipeline' shows four numbered cards connected by arrows: Youth Participation, Personal Development, Career Readiness, and Long-Term Stability.">
  <figcaption>
    The Programs page and the D.A.D. Development Pipeline.
    <span class="credit">Screenshot of doingexceptionaldeeds.org, captured September 2026.</span>
  </figcaption>
</figure>

<figure class="shot">
  <img src="{{site.baseurl}}/images/ideation/dad-donate-form.jpg" alt="The D.A.D. donation form. A 'Select Amount' row offers $25, $50, $100, and $250 buttons with $50 selected, plus an 'Other amount' field. Below it a 'Designate Your Gift' grid lists options including 'Where Most Needed', 'K-5 Youth Wellness &amp; Life Skills', '6-8 Leadership &amp; Transition', '9-12 Athlete &amp; Leadership Academy', and 'Golden Connections (Seniors Program)'.">
  <figcaption>
    The donation form: preset amounts and gift designations.
    <span class="credit">Screenshot of doingexceptionaldeeds.org, captured September 2026.</span>
  </figcaption>
</figure>

### Live site

[https://www.doingexceptionaldeeds.org/](https://www.doingexceptionaldeeds.org/)

## Project 4 — Poway Symphony Orchestra

### What it is

This capstone project is a redesign of the Poway Symphony Orchestra's website, built by the team Wi-Fighters — Meryl, Kailyn, Hope, and Laya.

The Poway Symphony Orchestra is a semi-professional orchestra formed in 2004 that puts on three concerts a year at the Poway Center for the Performing Arts, with around 65 to 67 musicians led by Conductor John LoPiccolo, and has served San Diego's North County Inland communities for over 20 years.

The old site felt more like a text archive than something people actually wanted to explore, so the team focused on making it feel active and welcoming instead. They cleaned up the home page so tickets, donations, and season info are easy to find right away, built out a full concerts page with program notes and ticket links, and consolidated everything about joining the orchestra — registration, rehearsals, and attire — into one place instead of scattering it around.

They also added a musician directory with section filters and audio previews, so visitors can hear what different sections sound like; the roster currently lists 68 musicians.

What really sets this one apart is the interactive layer. There are four games: Orchestra Builder, a drag-and-drop challenge where you place instrument sections on a stage; Virtual Conductor, a tap-along rhythm game using real PSO recordings; Tune the Orchestra, an ear-training game with pitch sliders; and The Lost Symphony, a narrative game that explores the concert hall.

On top of that sits "Poway Progression," a sign-in system that tracks XP, levels, badges, and quest progress across the site, plus smaller touches like a concert countdown and a progress bar showing how much of the site someone has explored.

<figure class="shot">
  <img src="{{site.baseurl}}/images/ideation/pso-home-hero.jpg" alt="Poway Symphony Orchestra homepage hero. Over a dark photo of the orchestra performing, the title 'Poway Symphony Orchestra' appears above the credit 'John LoPiccolo, Conductor and Music Director' and an introductory paragraph about the orchestra's 20 years of concerts. A 'Poway Progression' panel in the lower-right reads 'Sign In To Save XP,' and the '2025-2026 Concert Season' heading begins below.">
  <figcaption>
    The PSO homepage hero, with the conductor credit under the orchestra name.
    <span class="credit">Screenshot of pso.opencodingsociety.com, captured September 2026.</span>
  </figcaption>
</figure>

### Why we picked it

We looked at the Poway Symphony Orchestra project because it went beyond a normal redesign by adding real interactive features like the games and audio previews, which made the site feel more engaging and creative than a typical nonprofit or business site.

### What we would change / improve

- Make sure a first-time visitor who never signs in can still play every game. Right now the "Sign In To Save XP" panel is the first thing that greets you, and it should explain what signing in adds rather than reading like a gate.
- Fix the Poway Progression panel's placement. At some window sizes it floats over the concert cards and covers the program notes for one of the concerts.
- Make the upcoming concert unmistakable on the season page. Past concerts currently sit alongside the next one, so "An American Celebration" competes for attention with two events that already happened.
- Make sure only one audio preview plays at a time in the musician directory, and keep filtering fast across all 68 musicians.
- Give each of the four games a clear score or success state, make them replay without a page reload, and confirm they work with touch as well as a mouse.
- Keep registration, rehearsal schedule, and attire together on a single "Join the orchestra" page.

<figure class="shot">
  <img src="{{site.baseurl}}/images/ideation/pso-concert-season.jpg" alt="The 2025-2026 concert season page on the PSO site. A detail strip lists venue, concert time, season pattern, and ensemble size above three concert cards: 'An American Celebration' on Sunday, May 31, 2026, tagged Upcoming and Next Up; 'Dvorak in America' on Sunday, November 16, 2025, tagged Past; and 'Mendelssohn Classics' on Sunday, March 22, 2026, also tagged Past. An 'Open Poway Progression' button floats over the bottom-right card.">
  <figcaption>
    The 2025&ndash;2026 concert season cards, with the upcoming concert sitting alongside two past ones.
    <span class="credit">Screenshot of pso.opencodingsociety.com, captured September 2026.</span>
  </figcaption>
</figure>

<figure class="shot">
  <img src="{{site.baseurl}}/images/ideation/pso-games-hub.jpg" alt="The 'Orchestra Games' hub on the PSO site, labeled 'Interactive Series.' An open Games dropdown in the navigation lists Game Hub, Orchestra Builder, Virtual Conductor, and Tune the Orchestra. Below, preview cards for 'Orchestra Builder' (tagged Stage Logic, showing a curved stage with colored dots) and 'Virtual Conductor' (tagged Tempo Lab, showing a glowing gold ring) sit side by side.">
  <figcaption>
    The "Orchestra Games" interactive hub, with the Games dropdown open.
    <span class="credit">Screenshot of pso.opencodingsociety.com, captured September 2026.</span>
  </figcaption>
</figure>

<figure class="shot">
  <img src="{{site.baseurl}}/images/ideation/pso-musician-directory.jpg" alt="The PSO musician directory. Under a 'Hear Each Section' heading, four section cards - Strings, Brass, Woodwinds, and Percussion - each describe the section's sound and invite a click to hear it and filter the roster. Below sits a 'Search the roster' box with the placeholder 'Try violin, horn, or a music' next to a directory listing reading 'Current musicians as of March 22, 2026' and 'Showing 68 musicians.'">
  <figcaption>
    The musician directory: section cards with audio previews, plus roster search.
    <span class="credit">Screenshot of pso.opencodingsociety.com, captured September 2026.</span>
  </figcaption>
</figure>

### Live site

[https://pso.opencodingsociety.com/](https://pso.opencodingsociety.com/)
