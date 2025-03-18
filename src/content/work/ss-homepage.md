---
title: NJIT Student Senate Homepage
publishDate: 2025-03-18 00:00:00
img: /personal-site/assets/SS-homepage.png
img_alt: The NJIT Student Senate Homepage
description: |
  The NJIT Student Senate Homepage
tags:
  - Astro
  - Development
  - CMS
  - Landing Page
---

### Overview

The NJIT Student Senate Homepage is a project that I worked on over the summer and early fall of 2024.
The project was a complete redesign and rebuild of the NJIT Undergraduate Student Senate's website.
A few of the goals of the project included a more modern mobile-friendly design, low cost (in comparison to the previous Wix Site), and dynamic content that could be updated by the Senate's members without needing to know how to code.

### The Data Source

Of the many conversations that I had with members of the Senate, one of the most important was about the data source.
While I was initially planning on using a headless CMS, it became clear that the Senate's members were more comfortable with Google drive tools.
Since one of the goals of the project was to make the site easy to update, it was decided that the site would pull data from a few core Google Sheets.

There is another data source that the site uses, the - campuse labs engage api endpoint. While this endpoint is not intended to be used in this way, it was the only way to get the data for all the student organizations at NJIT. This data is used to populate the list of student organizations on the site with logos and links to their respective pages.

### Features

- Spreadsheets are used to populate all of the content on the site, including the announcements, senators, and the external links.
- Image compression and various image formats are used to ensure that the site loads quickly.
- The site is built with SEO in mind, with Astro being used to generate static pages that are then deployed to github pages.
- Google Docs can be made into "info pages" by adding them to a specific folder in the Senate's Google Drive.

### Conclusion

Overall, the project was a massive success and brought the Senate's website into the modern era.
I was also able to help move the domain registration to a more cost-effective provider, which will save the Senate money in the long run.
There are also a lot of old site domains that needed to be updated to redirect - as they were used for the old site - including studentsenate.njit.edu and njitstudentsenate.org.

### Links

- [NJIT Student Senate Homepage](https://njitsenate.org/)
