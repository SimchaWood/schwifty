'use strict';

const chalk = require('chalk');

console.log('Starting...');

const colors = [
  'black',
  'blackBright',
  'white',
  'whiteBright',
  'red',
  'redBright',
  'yellow',
  'yellowBright',
  'green',
  'greenBright',
  'cyan',
  'cyanBright',
  'blue',
  'blueBright',
  'magenta',
  'magentaBright',
];

for (let x = 0; x < colors.length; x++) {
  const color = colors[x];
  console.log(chalk[color](`This color is ${color}`));
}

console.log('Done.');
