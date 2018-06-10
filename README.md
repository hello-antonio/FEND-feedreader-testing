# Feed Reader Testing Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

## Dependencies Installed

- [JasmineJS 2.1.2 read the docs](https://jasmine.github.io/2.1/introduction)
- [Jasmine-jquery read the docs](https://github.com/velesin/jasmine-jquery)
- [Google JSAPI](https://developers.google.com/chart/interactive/docs/basic_load_libs)
- [jQuery](https://jquery.com/download/)
- [Handlebars.js](https://handlebarsjs.com/)

## How to used
- **Install**
  - Download repo
  - or clone it : `git clone https://github.com/gioalo/FEND-feedreader-testing.git`
- If download unzip the project folder
- Then, open the project and open the `index.html` in the browser.
- The `jasmine/` forder contains all the testing scripts necessary to test and `js/app.js` is the application program, all these scripts are loaded to the `index.html`
- Jasmine will initialize and run all the tests specs and warn you of any failing test, check the results at the bottom of the page by opening the `index.html` in the browser.
- Adding or making new tests
  - `jasmine/spec/` is the forder where you'll include new testing scripts.
  - `js/app.js` this is the file to test from
  - `jasmine/spec/feedreader.js` this is the file you'll find all the tests specifics for the `js/app.js` file you are testing.
