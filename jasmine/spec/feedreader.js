/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function () {
    /**
     * Test suite for RSS Feeds expect :
     * + allFeeds are defined and not empty
     * + allFeeds URL should be defined and not empty
     * + allFeeds name should be defined and not empty
     */
    describe('RSS Feeds', function () {
        it('should be defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Setup function test to be call for feed.url
        function testFeedUrl(feed) {
            expect(feed.url).toBeDefined();
            expect(feed.url.length).toBeGreaterThan(0);
        }

        it('#URL should be defined and not be empty', function () {
            allFeeds.forEach(testFeedUrl);
        });

        // Setup function test to be call for feed.name
        function testFeedName(feed) {
            expect(feed.name).toBeDefined();
            expect(feed.name.length).toBeGreaterThan(0);
        }

        it('#name should be defined and not be empty', function () {
            allFeeds.forEach(testFeedName);
        });
    });

    /**
     * Test suite for the Menu expect :
     * + menu should be hidden by default
     * + menu button when click should show menu and should hide it when clicked again
     */
    describe('The menu', function () {
        // set menu and body elements
        var menuicon = $('.menu-icon-link');
        var body = $('body');
        it('should be hidden by default', function () {
            expect(body).toHaveClass('menu-hidden'); // using jasmine-jquery helper toHaveClass
        });

        describe('#menu-icon-link when clicked', function () {
            it('should display menu and should hide it when clicked again', function (done) {
                menuicon.click();
                expect(body).not.toHaveClass('menu-hidden');
                menuicon.click();
                expect(body).toHaveClass('menu-hidden');
                done();
            });
        });
    });

    /**
     * Test for Initial Entries expect :
     * + should load at least a single .entry element within the .feed container
     */
    describe('Initial Entries', function () {
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('should have at least a single #entry element within the #feed container', function (done) {
            expect($('.feed .entry')).toExist();
            done();
        });
    });

    /**
     * Test for New Feed expect :
     * + should load a new feed selection
     */
    describe('New Feed Selection', function () {
        // set old and new feed selection variables
        var oldLink, newLink;
        // before make sure to load first feed batch
        beforeEach(function (done) {
            // loads feed and set old link to first .entry-link
            loadFeed(0, function () {
                oldLink = $('.feed .entry-link').first().attr('href');
                done();
            });
        });
        // after make sure to load second feed batch
        afterEach(function (done) {
            // loads feed and set new link to first .entry-link
            loadFeed(1, function () {
                newLink = $('.feed .entry-link').first().attr('href');
                done();
            });
        });
        // after all done reload to initial feed
        afterAll(function (done) {
            loadFeed(0, done);
        });

        it('should load a new feed', function (done) {
            expect(newLink).not.toBe(oldLink);
            done();
        });
    });
}());