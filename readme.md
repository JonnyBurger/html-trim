# html-trim [![Build Status](https://travis-ci.org/SciMts/html-trim.svg?branch=master)](https://travis-ci.org/SciMts/html-trim)

> Reduces whitespace in HTML markup

This module aims to reduce the whitespace in HTML markup. It does is not cover all cases, but tries it's best to make the markup a bit cleaner.

## Install

```
$ npm install --save html-trim
```


## Usage

```js
const htmlTrim = require('html-trim');

htmlTrim('<span>end of the sentence.&nbsp;<br><br>&nbsp; &nbsp; &nbsp;</span>');
//=> '<span>end of the sentence.<br></span>'
```



## License

MIT © [ScienceMatters](https://sciencematters.io)
