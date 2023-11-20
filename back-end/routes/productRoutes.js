import express from 'express';
const router = express.Router();

import {addProduct,getCustomers,getProductById,deleteProduct,udpateProduct} from '../controllers/productController.js';

router.route('/').post(addProduct).get(getCustomers);
router.route('/:id').get(getProductById).delete(deleteProduct).put(udpateProduct);

export default router;  