const Product = require("../models/Product");

const createProduct = async (req,res) => {
    try{
        const prods = await Product.create(req.body);
        res.json(prods);
    }
    catch(err){
        console.error(err);
    }
    
}

const getAllProducts = (req, res) => {
    Product.find()
        .then(product => res.json(product))
        .catch(err => console.error(err));
}

const getProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => console.error(err));
}


const updateProduct = async (req,res) => {
    try{
        const prods = await Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true});
        res.json(prods);
    }
    catch(err){
        console.error(err)
    }
}

const deleteProduct = async(req, res) => {
    try{
        const prod = await Product.deleteOne({_id: req.params.id});
        res.json(prod);
    }
    catch(err){
        console.error(err);
    }
}

module.exports = {createProduct, getAllProducts, getProduct, updateProduct, deleteProduct};