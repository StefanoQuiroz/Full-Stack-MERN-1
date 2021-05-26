const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    Title: {type:String},
    Price: {type:Number},
    Description: {type:String}
}, {timestamps:true});

const Product = mongoose.model('Products', ProductSchema);

module.exports = Product;