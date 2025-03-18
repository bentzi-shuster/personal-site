---
title: A Lesson in SEO
publishDate: 2025-03-18 00:00:00
img: /personal-site/assets/seo.png
img_alt: My website that accidentally got ranked \#2 on Google Search when searching for "NJIT Highlander Pipeline"
description: |
  My website that accidentally got ranked #2 on Google Search when searching for "NJIT Highlander Pipeline"
tags:
  - SEO
  - HTML
---

### Overview

While not a project, and more of a story, I thought it was worth sharing since I learned a lot from it.

This all goes back to when NJIT was transitioning from the old Highlander Pipeline portal to the new one.
I was not a fan of the new portal, so I decided to make a simple HTML page that mimicked the old portal.
This was just a fun little project that I did in my free time - and included all the non-dynamic data that the old portal had.

The page was hosted on the NJIT web server, so the url was https://web.njit.edu/~bzs6/ (which is no longer active).

A few months later, I received a google chat message from a employee at NJIT IST (Information Systems and Technology) asking me to take down the page - as to both of our surprises, it was ranked \#2 on Google Search when searching for "NJIT Highlander Pipeline".

This was due to a few things:

- The page was hosted on the NJIT web server, so it had a high domain authority
- The page had a lot of content that was relevant to the search query - and some of the metadata said "NJIT Highlander Pipeline" in it
- The page looked "legit" - as in, it looked like it could be the real portal - and I can see how someone could mistake it for the real portal

After a bit of a panic, I took down the page and modified the `.htaccess` file to unindex all of the pages on my site.

Just a fun little story that I thought was worth sharing.
