module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const PriceSchema = new Schema({
        count:{ type:Number },
        operator:{ type:String },
        hitRule:{ type:String },
        price:{type:Number }

    })

    return mongoose.model('Price',PriceSchema,'price')
}