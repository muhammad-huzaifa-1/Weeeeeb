const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:String,
    price:Number,
    discription:String,
    category:String,
    image:Array,
    date:String
});

const ProductModel = mongoose.model('products', ProductSchema);

module.exports = ProductModel;