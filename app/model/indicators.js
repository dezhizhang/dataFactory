'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const IndicatorsSchema = new Schema({
    apiCode: { type: String },
    name: { type: String },
    isMulriple: { type: String },
    operator: { type: Number },
    category: { type: String },
    tags: { type: String },
    resultExample: { type: String },
    unit: { type: String },
    description: { type: String },

  });

  return mongoose.model('Indicators', IndicatorsSchema, 'indicators');
};
