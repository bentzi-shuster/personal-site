---
title: Schedule Builder Plans
publishDate: 2025-03-17 00:00:00
img: /personal-site/assets/SB/SB_Plans.png
img_alt: The schedule builder plans chrome extension UI
description: |
  The start of the schdule builder project
tags:
  - Chrome Extension
  - Development
---

### The Idea

One day, I was sitting in my room bahind a screen I knew all to well, and I had one question on my mind.
Why can I only make one schedule at a time?
Thats when the idea for the Schedule Builder Plans Chrome Extension was born.

### Basic Code Snippet

With that in mind, I started coding. Here is the **first** code snippet I wrote for the project.

```javascript
copy(JSON.stringify(localStorage)); // Copy the local storage to the clipboard
```

Then I had to write the code to take the data and put it back into the local storage.

```javascript
localStorage.clear(); // remove the current data
const data = JSON.parse([the json on your clipboard]);
Object.keys(data).forEach(function (k) {
  localStorage.setItem(k, data[k]);
});
window.location.reload(); // need to reload to be shown on the schedule
```

These snippets are the core of the extension, and they are what make it work.

### Building the UI

Sadly, not everything can be done with code, and it became clear that I needed to build a UI for the extension.

Thats when I started to design the UI for the extension - with a cool tool called Figma.
While its not the prettiest UI, it gets the job done.

### Links

- [Chrome Web Store](https://chromewebstore.google.com/detail/njit-schedule-builder-pro/pmnpckcmdalibabddocfiabejkbmcanp?hl=en)
- [GitHub](https://github.com/bentzi-shuster/NJIT-Schedule-Builder-Profiles)

### Further Development

Just a little bit after the release of the extension, I discovered that the search feature on the schedule builder was implmented in a way that made it possible to search for classes via a script.
[More on what I did with that here](/personal-site/work/schedule-builder/sb-tabs)
