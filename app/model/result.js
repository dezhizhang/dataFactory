'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ResultSchema = new Schema({
    original: { type: String },
    name: { type: String },
    type: { type: String },
    values: { type: Number },
    meaning: { type: String },


  });

  return mongoose.model('Result', ResultSchema, 'result');


};
