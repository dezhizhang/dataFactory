'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const d = new Date();

  const IndexScheam = new Schema({
    apiCode: { type: String },
    name: { type: String },
    isMulriple: { type: Boolean },
    description: { type: String },
    createdTime: {
      type: Number,
      default: d.getTime(),
    },
    updatedTime: {
      type: Number,
      default: d.getTime(),
    },
    operator: { type: String },
    category: { type: String },
    tags: { type: String },
    requestMethod: { type: String },
    address: { type: String },
    isDeleted: { type: Boolean },
    resultMapCategory: { type: String },
    resultExample: { type: String },
    isSubscripe: { type: Boolean },
    params: { type: Array },


  });

  return mongoose.model('Index', IndexScheam, 'index');
};
