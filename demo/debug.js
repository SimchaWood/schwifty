/* eslint-disable strict */
const stringThing = require('./debug2');

// throw Error('Foo!');

function foo(x) {
  while (x < 10) {
    x++;
  }
  return x;
}

let z = 0;
if (z !== 0) {
  z = 1;
}

function bar(y) {
  return foo(y);
}

function baz(z) {
  if (z < 0) {
    z = 0;
  } else if (z > 5) {
    z = 5;
  }
  return z;
}

let num = bar(baz(7));

let str = '';

while (num) {
  str = str.concat(`${stringThing('foobar')}`);
  num--;
}

console.log(str);
