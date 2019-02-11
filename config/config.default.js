'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1549853008392_1737';

  // add your config here
  config.middleware = [];

  //配置数据库连接
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/dataFactory',
      options: {},
    },
  };


  // 允许请求
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  config.security = {
      csrf: {
          enable: false,
      }
  };



  return config;
};
