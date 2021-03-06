'use strict';

// had enabled by egg
exports.static = true;

// 使用mongodb数据库
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

exports.cors = {
  enable: true,
  package: 'egg-cors',
};

exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};

exports.passport = {
  enable: true,
  package: 'egg-passport',
}
//配置io
exports.io = {
  enable: true,
  package: 'egg-socket.io',
};


