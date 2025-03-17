---
title: Schedule Builder Tabs
publishDate: 2025-03-17 00:00:00
img: /assets/SB/SB_Tabs.png
img_alt: The NJIT schedule builder with tabs added via a chrome extension
description: |
  The next step of the schdule builder project
tags:
  - Chrome Extension
  - Development
---

### The precursor to Schedule Builder Tabs

- [Schedule Builder Plans](./sb-plans)

While the schedule builder plans addon was a great tool for planning out your schedule, it was still a bit clunky to use.  
One of the major weeknesses of the addon was that it needed to reload the page every time you wanted to switch between different plans.  
This was not a major issue, but it was a bit annoying.

### The discovery that changed everything

Just a little after publishing the first version of the schedule builder plans addon, I came to realize that the NJIT schedule builder was using [JQuery UI's Autocomplete](https://jqueryui.com/autocomplete/) for its search functionality.
This was a big deal because it meant that I could execute javascript on the page to trigger the search functionality and then select the course I wanted to add to my schedule.

```javascript
$("input#input_id").autocomplete("search", "cs100");
```

Using this, and a bit more technical knolwedge I had gained from the first addon, I was able to create a chrome extension that would allow me to have browser style tabs for the schedule builder.
