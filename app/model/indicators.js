module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    

    const IndicatorsSchema = new Schema({
        index:{ type:String },
        name:{ type:String },
        isMulriple:{ type:Boolean },
        operator:{ type:String },
        category:{ type:String },
        tags:{ type:String },
        resultExample:{ type:String },
        unit:{ type:String },
        description:{ type:String }

    })

    return mongoose.model('Indicators', IndicatorsSchema,'indicators');
}