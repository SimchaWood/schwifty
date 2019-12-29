#! /usr/env/foo
/* eslint-disable max-classes-per-file */

'use strict';

class Sale {
  constructor(price) {
    [this.decoratorsList, this.price] = [[], price];
  }

  /**
   * Description of the `decorate` method.
   * @param {*} decorator a decorator
   * @returns {void} not used
   */
  decorate(decorator) {
    if (!Sale[decorator]) {
      throw new Error(`decorator not exist: ${decorator}`);
    }
    this.decoratorsList.push(Sale[decorator]);
  }

  getPrice() {
    for (const decorator of this.decoratorsList) {
      this.price = decorator(this.price);
    }
    return this.price.toFixed(2);
  }

  static quebec(price) {
    // this is a comment
    return price + price * 7.5 / 100;
  }

  static fedtax(price) {
    return price + price * 5 / 100;
  }
}

let sale = new Sale(100);
sale.decorate('fedtax');
sale.decorate('quebec');
console.log(sale.getPrice()); //112.88

sale.getPrice();

//deeply nested

async function asyncCall() {
  var result = await resolveAfter2Seconds();
}

const options = {
  connections: {
    compression: false
  }
};

for (let i = 0; i < 10; i++) {
  continue;
}

if (true) { }

while (false) { }

switch (2) {
  case 2:
    break;
  default:
    break;
}

class Foo {}

class EditFishForm extends Component {
  // static propTypes = {
  //   updateFish: PropTypes.func,
  //   deleteFish: PropTypes.func,
  //   index: PropTypes.string,
  //   fish: PropTypes.shape({
  //     image: PropTypes.string,
  //     name: PropTypes.string.isRequired
  //   })
  // }
}
const str = `The price for this widget is ${sale.getPrice('widget')}`;
const rx = /^(?:(start))(?<!foo)(?<=bar)MUSKET_(?<cfgName>[A-Z0-9_]+)(._fibble\d*){0,1}(?=foo)(?!bar)$/u;
const text = "foobar";
const { foo: bar } = require('stuff');

console.log(rx, text, bar);

const pi = Math.PI;
// const str = JSON.stringify()

const { find: _find, forEach, isUndefined } = require('lodash');
const winston = require('winston');

const loggerConfig = require('./config');
const { getTransportConfig } = require('./util');

/**
 * Class that serves as an interface for winston.Logger
 */
class LoggerWrapper {
  /**
   * @param {loggerConfig} config A logger configuration object.
   */
  constructor(config) {
    this.container = new winston.Container();
    this.loggerConfigs = this.configureLoggers(config);

    this.log = {
      /** @type {loggerMethod} */
      error: this.addLogMethod('mainLogger', 'error'),
      /** @type {loggerMethod} */
      warn: this.addLogMethod('mainLogger', 'warn'),
      /** @type {loggerMethod} */
      info: this.addLogMethod('mainLogger', 'info'),
      /** @type {loggerMethod} */
      verbose: this.addLogMethod('mainLogger', 'verbose'),
      /** @type {loggerMethod} */
      silly: this.addLogMethod('mainLogger', 'silly'),
    };

    this.status = {
      /** @type {statusMethod} */
      error: this.addLogMethod('statusLogger', 'error'),
      /** @type {statusMethod} */
      alert: this.addLogMethod('statusLogger', 'alert'),
      /** @type {statusMethod} */
      info: this.addLogMethod('statusLogger', 'info'),
    };

    this._debug = this.addLogMethod('debugLogger');
    this._request = this.addLogMethod('requestLogger');
  }

  configureLoggers(config) {
    const loggerArray = [];

    forEach(config, (configData, loggerId) => {
      const logger = { loggerId };

      logger.colors = (() => {
        const colors = {};
        forEach(configData.levels, (levelData, level) => {
          colors[level] = levelData.color;
        });
        return colors;
      })();

      logger.levels = (() => {
        const levels = {};
        forEach(configData.levels, (levelData, level) => {
          levels[level] = levelData.level;
        });
        return levels;
      })();

      logger.level = (() => {
        let level;
        forEach(logger.levels, (value, key) => {
          if (level) {
            if (value >= logger.levels[level]) {
              level = key;
            }
          } else {
            level = key;
          }
        });
        return level;
      })();

      this.container.add(loggerId, {
        level: logger.level,
        levels: logger.levels,
        transports: getTransportConfig(configData.transports, logger),
      });

      logger.logMethod = configData.logMethod;
      logger.pipeline = this.container.get(loggerId);

      loggerArray.push(logger);
    });

    return loggerArray;
  }

  /**
   * @param {string} loggerId Logger name used as key in logger config
   * @param {string} [logLevel='info'] Level name to be associated with logger method
   * @returns {loggerMethod|statusMethod}
   */
  addLogMethod(loggerId, logLevel) {
    const config = this.getLoggerConfig(loggerId);
    const logger = config.pipeline;
    const level = logLevel || logger.level;

    if (isUndefined(config.logMethod)) {
      return (info) => {
        info.level = level;
        return logger.log(info);
      };
    }
    return config.logMethod(logger, level);
  }

  getLoggerConfig(loggerId) {
    return _find(this.loggerConfigs, (x) => x.loggerId === loggerId);
  }
}

const logger = new LoggerWrapper(loggerConfig);

module.exports = logger;
