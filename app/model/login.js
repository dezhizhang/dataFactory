'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;


  const LoginSchema = new Schema({
    userName: { type: String },
    passWord: { type: String },


  });

  return mongoose.model('Login', LoginSchema, 'login');
};
