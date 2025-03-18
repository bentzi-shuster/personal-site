---
title: Schedule Builder UI Revamp
publishDate: 2025-03-17 00:00:00
img: /personal-site/assets/SB/OLD_SB_1.png
img_alt: The first schedule builder
description: |
  The first of the full blown schedule builder UIs
tags:
  - Svelte
  - Frontend
  - Development
---

### The precursor to the Schedule Builder

Before even starting the schedule builder project, I had created two chrome extensions that helped plan out multiple schedules at the same time.
The first extension was called [Schedule Builder Plans](./sb-plans) and the second was [Schedule Builder Tabs](./sb-tabs).

### The Discovery that made it possible

The biggest discovery that made the schedule builder possible was that the existing NJIT schedule builder was using a JSONP API to pull in the data for the schedule builder.
This was a big deal because JSONP is able to bypass CORS restrictions - by using a script tag to load the data, the data is considered to be coming from the same origin as the page itself.
With this knowledge, I was able to create a new UI for the schedule builder that was able to pull in the data from the JSONP API and display it in a more user friendly way.

### Deciding on the Tech Stack

While I had been using HTML, CSS, and JS for a while, I wanted to try something new for this project - and that's when I found Svelte.
Svelte is _not_ a framework, but a compiler that takes your code and turns it into vanilla JS.
I wanted to try it out because it has a few cool paradigms that I wanted to try out, like a refreshing take on variables and stores.
It also has a syntax that is very similar to HTML, which made it very easy to pick up.

### The Development Process

While I was the only one working on the project, I learned a lot about how to structure a project and how to keep track of everything.
The first thing I realized I needed was a markdown file to keep track of my "to-do" list.
Then as the project grew, I realized I needed a way to keep track of the many bugs that were popping up.
Since I was very new to the project, I was able to keep track of this in a MD file - but looking back I would have used github issues.

### Some of the Features

> Custom Events

- Custom events were a big part of the project because I had this super easy UI component for calendar events - and noticed that I could use it for other things as well.
  > Exporting
- Exporting was one of the more challenging parts of the project because I had to figure out how ICS files work and how to generate them.
  > Mobile Responsiveness
- Mobile responsiveness was a core feature of the project because the NJIT schedule builder was not mobile friendly at all, and nowaday's everything needs to be mobile friendly.
  > Plans ... of course
- Coming from the schedule builder plans addon, I knew that I wanted to have a way to plan out multiple schedules at the same time.
  > Smart Search
- I wanted to have a smarter search feature that would allow me to search for more then just a course - like a professor or a building.

### Lessons Learned

Code maintenance is a big part of any project, and I learned that the hard way.
After a few months of not working on the project, I came back to it and realized that I had no idea what was going on, and the codebase was a mess.
Thats when the second _UI Revamp_ was started.
[More on that here](/personal-site/work/schedule-builder/sb-2)
