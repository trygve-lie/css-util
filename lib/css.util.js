/* jshint node: true, strict: true */

/** 
  * @module css.util
  * @requires core-util-is
  * @requires dom.util
  */

"use strict";

var type  = require('core-util-is'),
    dom   = require('dom-util');



/** 
  * Check if a DOM element contains a class name
  *
  * @param {HTMLElement} element A DOM element
  * @param {String} className The name of the class to check for
  * @returns {Boolean}
  */

module.exports.contains = function(element, className) {
    var classNames = dom.attributeToArray(element, 'class');
    return classNames.indexOf(className) !== -1;
};



/** 
  * Appends a CSS class name to a DOM element while perserving 
  * existing class names
  *
  * @param {HTMLElement} element A DOM element
  * @param {String} className Name of the class to append
  * @returns {HTMLElement}
  */

module.exports.appendClass = function(element, className) {
    var classNames = dom.attributeToArray(element, 'class');
    classNames.push(className);
    element.setAttribute('class', classNames.join(' '));
    return element;
};



/** 
  * Replaces a CSS class on a DOM element.
  * If providing an array with string values to existingClassName, the first
  * value found in the attribute string will be replaced with the value of
  * newClassName
  *
  * @param {HTMLElement} element A DOM element
  * @param {(String|String[])} existingClassName Existing class name which should be replaced
  * @param {String} newClassName Name of the new class
  * @returns {HTMLElement}
  */

module.exports.replaceClass = function(element, existingClassName, newClassName) {
    var classNames      = dom.attributeToArray(element, 'class'),
        newClassNames   = '',
        l               = 0,
        i               = 0,
        k               = -1;

        if (type.isArray(existingClassName)) {
            l = existingClassName.length;

            for (i = 0; i < l; i += 1) {
                k = classNames.indexOf(existingClassName[i]);
                if(k !== -1) {
                    classNames[k] = newClassName;
                    break;
                }
            }

        } else {
            classNames[classNames.indexOf(existingClassName)] = newClassName;
        }

    element.setAttribute('class', classNames.join(' '));
    return element;
};



/** 
  * Removes a CSS class name from a DOM element
  *
  * @param {HTMLElement} element A DOM element
  * @param {String} className Name of the class to remove
  * @returns {HTMLElement}
  */

module.exports.removeClass = function(element, className) {
    var classNames = dom.attributeToArray(element, 'class');
    classNames.splice(classNames.indexOf(className), 1);
    element.setAttribute('class', classNames.join(' '));
    return element;
};
