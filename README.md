# css-util

Collection of misc helper functions for CSS. These are helper
functions which are not nativly provided by the DOM or CSSOM api's.



## Installation

```bash
$ npm install css-util
```



## Tests

```bash
$ npm test
```

Tests are written in [mocha](http://visionmedia.github.io/mocha/) and run
in node.js with the help of [jsdom](https://github.com/tmpvar/jsdom).



## API

The following methods are available:


### .contains(element, className)

Check if a DOM element contains a class name.

HTML:
```html
<div id="foo" class="foo bar xyz"></div>
```

JS:
```js
var css = require('css-util');

var element = document.getElementById('foo');
var hasClass = css.contains(element, 'bar');

console.log(hasClass);  // returns true
```


### .appendClass(element, className)

Appends a CSS class name to a DOM element while perserving existing class 
names.

HTML before:
```html
<div id="foo" class="foo bar"></div>
```

JS:
```js
var css = require('css-util');

var element = document.getElementById('foo');
css.appendClass(element, 'xyz');
```

HTML after:
```html
<div id="foo" class="foo bar xyz"></div>
```


### .replaceClass(element, existingClassName, newClassName)

Replaces a CSS class on a DOM element.

HTML before:
```html
<div id="foo" class="foo bar xyz"></div>
```

JS:
```js
var css = require('css-util');

var element = document.getElementById('foo');
css.replaceClass(element, 'bar', 'aaa');
```

HTML after:
```html
<div id="foo" class="foo aaa xyz"></div>
```

If providing an array with string values to `existingClassName`, the first
value found in the attribute string will be replaced with the value of
`newClassName`.

HTML before:
```html
<div id="foo" class="foo bar xyz"></div>
```

JS:
```js
var css = require('css-util');

var element = document.getElementById('foo');
css.replaceClass(element, ['oof','bar','rab'], 'aaa');
```

HTML after:
```html
<div id="foo" class="foo aaa xyz"></div>
```


### .removeClass(element, className)

Removes a single CSS class name from a DOM element while  perserving 
other class names.

HTML before:
```html
<div id="foo" class="foo bar xyz"></div>
```

JS:
```js
var css = require('css-util');

var element = document.getElementById('foo');
css.removeClass(element, 'bar');
```

HTML after:
```html
<div id="foo" class="foo xyz"></div>
```


## Environments

Browser and node.js with [jsdom](https://github.com/tmpvar/jsdom).



## License 

The MIT License (MIT)

Copyright (c) 2014 - Trygve Lie - post@trygve-lie.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.