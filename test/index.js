'use strict';


let charmer = require('../lib'),
    should = require('should'),
    dataToCharm = {
        "name": "charmer",
        "type": "module",
        "language": "javascript",
        "purpose": "Make things gorgeous."
    };

it('Basic object', done => {

    should(charmer(dataToCharm, { fetch: true })).equal(`{
  "name": "charmer",
  "type": "module",
  "language": "javascript",
  "purpose": "Make things gorgeous."
}`);
    done();
});

it('Sort, asc', done => {

    should(charmer(dataToCharm, { fetch: true, sort: 'asc' })).equal(`{
  "language": "javascript",
  "name": "charmer",
  "purpose": "Make things gorgeous.",
  "type": "module"
}`);
    done();
});

it('Sort, desc', done => {

    should(charmer(dataToCharm, { fetch: true, sort: 'desc' })).equal(`{
  "type": "module",
  "purpose": "Make things gorgeous.",
  "name": "charmer",
  "language": "javascript"
}`);
    done();
});
