# charmer

[![Greenkeeper badge](https://badges.greenkeeper.io/aichholzer/charmer.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/aichholzer/charmer.svg?branch=master)](https://travis-ci.org/aichholzer/charmer)
[![Dependency status](https://gemnasium.com/badges/github.com/aichholzer/charmer.svg)](https://gemnasium.com/github.com/aichholzer/charmer)
[![Downloads](https://img.shields.io/npm/dt/charmer.svg)](https://www.npmjs.com/package/charmer)
[![Always useful](https://img.shields.io/badge/always-useful-ff6400.svg)](https://github.com/aichholzer/charmer)

Gorgeous JSON logging.


### Install
```
npm install --save charmer
```


### Use
```
let charmer = require('charmer');

charmer({"name":"charmer","type":"module","language":"javascript","purpose":"Gorgeous"}, [options]);
// {
    "name": "charmer",
    "type": "module",
    "language": "javascript",
    "purpose": "Gorgeous"
}
```


### Options
```
{
  "fetch": "false",        // Whether the result should be returned or not. Default: false
  "sort": 'asc' || 'desc'  // Sort the result, by key. Works recursively.
}
```


### Contribute
```
fork https://github.com/aichholzer/charmer/
```


### License

[MIT](https://github.com/aichholzer/charmer/blob/master/LICENSE)
