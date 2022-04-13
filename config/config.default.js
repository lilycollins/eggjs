/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1649298023345_1216';

  // add your middleware config here
  config.middleware = [];

  // remove csrf defend temporary for study
  config.security = {
    csrf: {
      enable: false,
    },
  };
  // use EJS engine
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  config.ejs = {};

  config.mysql = {
    app: true,
    agent: false,
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: '113488zuo.',
      database: 'user',
    },
  };

  // config.session = {
  //   keys: 'tangqiz-session', // default value
  //   httpOnly: true,
  //   maxAge: 1000 * 10,
  //   renew: true, // refresh session automatically when the page has visited
  // };

  // config.middleware = [ 'counter' ];
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
