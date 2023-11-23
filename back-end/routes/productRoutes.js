import express from 'express';
const router = express.Router();

import {addProduct,getProducts,getProductById,deleteProduct,udpateProduct} from '../controllers/productController.js';

router.route('/').post(addProduct).get(getProducts);
router.route('/:id').get(getProductById).delete(deleteProduct).put(udpateProduct);

export default router;  