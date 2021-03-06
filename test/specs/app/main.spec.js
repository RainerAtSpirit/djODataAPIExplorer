/*global jasmine, describe, beforeEach, it, expect, require, waitsFor, runs, define, $, spyOn */

// Adding required 'applicationHost' container to body
document.body.innerHTML += '<div id="applicationHost" style="display: none"></div>';

// By defining main as dependency we can test modules that are main dependencies
// Important: router, dialog, widget CAN'T be tested by default, because they are loaded be 'configurePlugins'
// In order to test them they need to be included into the dependency array

/*
define(function( require ) {
    "use strict";


    describe('div#applicationhost', function() {
        it('should be empty when starting"', function() {
            expect($('#applicationHost').html()).toBe('');
        });
    });

    describe('app', function() {
        var app = require('durandal/app');

        it('should have a title property', function() {
            expect(app.title).toBeDefined();
        });
    });

    describe('router', function() {

        it('should trigger a "router:navigation:complete" event with three arguments', function() {
            var ready = false,
                result;

            runs(function() {
                router.on('router:navigation:complete').then(function() {
                    result = arguments;
                    ready = true;
                });
            });

            waitsFor(function() {
                return result;
            });

            runs(function() {
                expect(result.length).toBe(3);
            });
        });

        it('after "router:navigation:complete" "app/shell" should be in context', function() {

            expect(shell.__moduleId__).toBe('shell');
        });
    });
});
*/


