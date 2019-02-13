
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const RetrySchema = new Schema({
        apiCode:{ type:String },
        name:{ type:String },
        internalCode:{ type:String },
        operator:{ type:String },
        retryStrategy:{ type:String },
        category:{ type:String }
    })

    return mongoose.model('Retry',RetrySchema,'retry');


}