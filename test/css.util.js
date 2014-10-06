/* jshint node: true, strict: true */
/* global describe: true, it: true, before: true */

"use strict";

var mocha           = require('mocha'),
    assert          = require('chai').assert,
    jsdom           = require('jsdom'),
    utils           = require('../');



describe('css.util.contains()', function(){

    describe('element does contain the class name', function(){

        it('should return "true"', function(done){

            jsdom.env('<div id="root" class="foo bar xyz"></div>', function(error, window){
                var element = window.document.getElementById('root');
                assert.isTrue(utils.contains(element, 'bar'));
                done();
            });

        });

    });

    describe('element does not contain the class name', function(){

        it('should return "false"', function(done){

            jsdom.env('<div id="root" class="foo bar xyz"></div>', function(error, window){
                var element = window.document.getElementById('root');
                assert.isFalse(utils.contains(element, 'foobar'));
                done();
            });

        });

    });

    describe('element has no class attribute', function(){

        it('should return "false"', function(done){

            jsdom.env('<div id="root"></div>', function(error, window){
                var element = window.document.getElementById('root');
                assert.isFalse(utils.contains(element, 'foobar'));
                done();
            });

        });

    });

});



describe('css.util.appendClass()', function(){

    describe('append class name to element with existing class attribute', function(){
        
        it('should append "bar" to the class attribute', function(done){
            var result = '<div id="root" class="foo bar"></div>';

            jsdom.env('<div id="root" class="foo"></div>', function(error, window){
                var element = window.document.getElementById('root');
                utils.appendClass(element, 'bar');
                assert.equal(result, element.outerHTML);
                done();
            });

        });

    });

    describe('append class name to element without existing class attribute', function(){
        
        it('should append "bar" to the class attribute', function(done){
            var result = '<div id="root" class="bar"></div>';

            jsdom.env('<div id="root"></div>', function(error, window){
                var element = window.document.getElementById('root');
                utils.appendClass(element, 'bar');
                assert.equal(result, element.outerHTML);
                done();
            });

        });

    });

});


describe('css.util.replaceClass()', function(){

    describe('element has a single class name - match with String', function(){

        it('should replace class with new class', function(done){
            var result = '<div id="root" class="bar"></div>';

            jsdom.env('<div id="root" class="foo"></div>', function(error, window){
                var element = window.document.getElementById('root');
                utils.replaceClass(element, 'foo', 'bar');
                assert.equal(result, element.outerHTML);
                done();
            });
        });

    });

    describe('element has multiple class names - match with String', function(){

        it('should replace class with new class', function(done){
            var result = '<div id="root" class="xyz bar"></div>';

            jsdom.env('<div id="root" class="foo bar"></div>', function(error, window){
                var element = window.document.getElementById('root');
                utils.replaceClass(element, 'foo', 'xyz');
                assert.equal(result, element.outerHTML);
                done();
            });
        });

    });

    describe('element has a single class name - match with Array', function(){

        it('should replace class with new class', function(done){
            var result = '<div id="root" class="bar"></div>';

            jsdom.env('<div id="root" class="foo"></div>', function(error, window){
                var element = window.document.getElementById('root');
                utils.replaceClass(element, ['aaa', 'foo', 'xyz'], 'bar');
                assert.equal(result, element.outerHTML);
                done();
            });
        });

    });

    describe('element has multiple class names - match with Array', function(){

        it('should replace class with new class', function(done){
            var result = '<div id="root" class="abc bar bbb"></div>';

            jsdom.env('<div id="root" class="abc foo bbb"></div>', function(error, window){
                var element = window.document.getElementById('root');
                utils.replaceClass(element, ['aaa', 'foo', 'xyz'], 'bar');
                assert.equal(result, element.outerHTML);
                done();
            });
        });

    });

});



describe('css.util.removeClass()', function(){

    describe('element has a single class name', function(){

        it('should return empty class attribute', function(done){
            var result = '<div id="root" class=""></div>';

            jsdom.env('<div id="root" class="foo"></div>', function(error, window){
                var element = window.document.getElementById('root');
                utils.removeClass(element, 'foo');
                assert.equal(result, element.outerHTML);
                done();
            });
        });

    });

    describe('element has a multiple class names', function(){

        it('should remove single class from attribute', function(done){
            var result = '<div id="root" class="bar xyz"></div>';

            jsdom.env('<div id="root" class="bar foo xyz"></div>', function(error, window){
                var element = window.document.getElementById('root');
                utils.removeClass(element, 'foo');
                assert.equal(result, element.outerHTML);
                done();
            });
        });

    });

});