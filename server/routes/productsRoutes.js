import express from 'express';
import { createNewProduct } from '../controllers/productsControllers.js';

const router = express.Router();

// CREATE NEW PRODUCT
router.post('/', createNewProduct);

export default router;