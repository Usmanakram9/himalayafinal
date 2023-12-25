import express from 'express';
const router = express.Router();

import {
    createBill,
    getBills,
    getSingleBill,
    getBillsByCustomerId, 
    updateBill,
    deleteBill
} from '../controllers/billController.js';

router.route('/').post(createBill).get(getBills);
router.route('/:id').get(getSingleBill).put(updateBill).delete(deleteBill);
router.route('/customer/:customerId').get(getBillsByCustomerId); // Use the new controller function


export default router;
