/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('is defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        // Setup function test to be call for feed.url
        function testFeedUrl(feed) {
            expect(feed.url).toBeDefined();
            expect(feed.url).not.toBe(0);
        }

        it('URL is defined', function () {
            allFeeds.forEach(testFeedUrl);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        // Setup function test to be call for feed.name
        function testFeedName(feed) {
            expect(feed.name).toBeDefined();
            expect(feed.name).not.toBe(0);
        }

        it('name is defined', function () {
            allFeeds.forEach(testFeedName);
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function () {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        var menuicon = '.menu-icon-link';
        var body = $('body');
        it('should be hidden by default', function () {
            // expect(document.body.classList.contains('menu-hidden')).toBe(true); // vanilla js
            // expect(body.hasClass('menu-hidden')).toBe(true); // using jquery
            // expect($('.menu-hidden')).toExist(); // using jasmine-jquery helper toExist
            expect(body).toHaveClass('menu-hidden'); // using jasmine-jquery helper toHaveClass
        });
        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        describe('icon is clicked', function () {
            it('does the menu display when clicked and does it hide when clicked again', function () {
                // Using jasmine-jquery helpers
                // var menuicon = '.menu-icon-link';
                var spyEvent = spyOnEvent(menuicon, 'click');
                // click to show
                $(menuicon).click();
                expect('click').toHaveBeenTriggeredOn(menuicon);
                expect(spyEvent).toHaveBeenTriggered();
                expect(body).not.toHaveClass('menu-hidden');
                // click to hide
                $(menuicon).click();
                expect('click').toHaveBeenTriggeredOn(menuicon);
                expect(spyEvent).toHaveBeenTriggered();
                expect(body).toHaveClass('menu-hidden');
                // reset
                spyEvent.reset()
                expect('click').not.toHaveBeenTriggeredOn(menuicon);
                expect(spyEvent).not.toHaveBeenTriggered();
            });
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('should have at least a single #entry element within the #feed container', function (done) {
            expect($('.feed .entry')).toExist();
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var prevFeedFirstLink, nextFeedFirstLink;

        beforeEach(function (done) {
            prevFeedFirstLink = $('.feed .entry-link').first().attr('href');
            loadFeed(1, done);
        });

        it('should be a new feed', function (done) {
            nextFeedFirstLink = $('.feed .entry-link').first().attr('href');
            expect(nextFeedFirstLink).not.toBe(prevFeedFirstLink);
            done();
        });
    });
}());