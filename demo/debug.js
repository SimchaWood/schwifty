/* eslint-disable strict */
const stringThing = require("./debug2");

function thrower(z) {
  if (!z) {
    throw Error("Foo!");
  }
  return z + 1;
}

function catcher(z) {
  try {
    thrower(0);
  } catch (err) {
    console.log(err);
  }
}

catcher(0);

thrower(0);

thrower(1);

thrower({});

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

function bar(y) {}

function baz(z) {
  if (z < 0) {
    z = 0;
  } else if (z > 5) {
    z = 5;
  }
  return z;
}

let num = bar(baz(7));

let str = "";

while (num) {
  str = str.concat(`${stringThing("foobar")}`);
  num--;
}

console.log(str);
