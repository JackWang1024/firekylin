'use strict';
/**
 * db config
 * @type {Object}
 */

exports.__esModule = true;
exports.default = {
  type: 'mysql',
  log_sql: true,
  log_connect: true,
  adapter: {
    mysql: {
      host: '127.0.0.1',
      port: '',
      database: '52dachu',
      user: 'root',
      password: 'root',
      prefix: 'dc_',
      encoding: 'utf8'
    },
    mongo: {}
  }
};