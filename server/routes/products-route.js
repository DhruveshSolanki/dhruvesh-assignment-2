const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct, deleteAllProducts, getProductByName } = require('../controllers/productsController.js'); 

// Get all products
router.get('/', getAllProducts);

// Get a product by ID
router.get('/:id', getProductById);

// Create a new product
router.post('/', createProduct);

// Update an existing product
router.put('/:id', updateProduct);

// Delete a product
router.delete('/:id', deleteProduct);

//Delete all product
router.delete('/', deleteAllProducts);

//Get product by name
router.get('/search/:name', getProductByName);


module.exports = router;