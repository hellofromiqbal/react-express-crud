import express from 'express';
import { createNewProduct, readAllProducts, readSingleProduct, updateSingleProduct, deleteSingleProduct } from '../controllers/productsControllers.js';

const router = express.Router();

// CREATE NEW PRODUCT
router.post('/', createNewProduct);

// READ ALL PRODUCTS
router.get('/', readAllProducts);

// READ SINGLE PRODUCT
router.get('/:id', readSingleProduct);

// UPDATE SINGLE PRODUCT
router.put('/:id', updateSingleProduct);

// DELETE SINGLE PRODUCT
router.delete(':/id', deleteSingleProduct);

export default router;