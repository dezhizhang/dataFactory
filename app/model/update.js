'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UpdateSchema = new Schema({
    apiCode: { type: String },
    name: { type: String },
    internalCode: { type: String },
    operator: { type: String },
    updateStrategy: { type: String },
    category: { type: String },

  });

  return mongoose.model('Update', UpdateSchema, 'update');

};
