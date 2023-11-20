import express from 'express';
const router = express.Router();

import { registerUser, deleteCustomer,updateCustomer,getCustomers,getSingleCustomer } from '../controllers/customerController.js';


router.route('/').post(registerUser).get(getCustomers);
router.route('/:id').delete(deleteCustomer).put(updateCustomer).get(getSingleCustomer);

export default router;