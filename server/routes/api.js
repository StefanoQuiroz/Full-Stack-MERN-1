const express = require('express');
const route = express();
const {createProduct, getAllProducts, getProduct, updateProduct, deleteProduct} = require("../controllers/product")


route.post("/", createProduct);
route.get("/products", getAllProducts);
route.get("/product/:id", getProduct);
route.put("/product/:id", updateProduct);
route.delete("/product/:id", deleteProduct);

module.exports = route;