import express from 'express';
import { createNewProduct, readAllProducts, readSingleProduct, updateSingleProduct, deleteSingleProduct } from '../controllers/productsControllers.js';

const router = express.Router();

// READ ALL PRODUCTS
router.post('/', readAllProducts);

// CREATE NEW PRODUCT
router.post('/', createNewProduct);

// READ SINGLE PRODUCT
router.get('/:id', readSingleProduct);

// UPDATE SINGLE PRODUCT
router.put('/:id', updateSingleProduct);

// DELETE SINGLE PRODUCT
router.delete('/:id', deleteSingleProduct);

export default router;