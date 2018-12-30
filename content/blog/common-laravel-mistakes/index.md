---
title: Simple Common Laravel Mistakes
date: 2018-12-30
---

* Everything looks bigger in production but in local environment everything is sized correctly.
    * Zoom level is different for the web pages

* The webserver is failing silently there is no log errors but the page doesn't load
   * CSRF token is not being passed in the form

* The data is not being saved to the database but all the data is there just not being saved
    * The elements have not been whitelisted e.g. fillable

* Jquery is not changing the data on screen but I am sure the code is right
    * Check that the targeted code is in a async call or not if it is you have to wait for the async operation to finish before you can start manipulating the code