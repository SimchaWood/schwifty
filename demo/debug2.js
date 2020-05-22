/* eslint-disable strict */
let foo = "foobar";

function stringThing(str) {
  return str.toUpperCase();
}

// Todo: Stuff
foo = stringThing(foo);

module.exports = stringThing;
