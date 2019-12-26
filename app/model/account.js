'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const AccountSchema = new Schema({
    id:{ type: String },
    name:{ type: String },
    custName:{ type:String },
    


  });

  return mongoose.model('Account', AccountSchema, 'account');
};
