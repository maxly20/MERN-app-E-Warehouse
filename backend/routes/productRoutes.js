import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductbyId,
} from '../controllers/productController.js';

router.route('/').get(getProducts);

router.route('/:id').get(getProductbyId);

export default router;
