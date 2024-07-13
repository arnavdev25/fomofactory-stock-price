const { Schema, model } = require("mongoose")


const stockSchema = new Schema({
    symbol: { type: String, required: true },
    price: { type: Number, required: true },
    updated_at: { type: Date, default: Date.now }
});


const Stock = model('Stock', stockSchema);


module.exports = Stock;