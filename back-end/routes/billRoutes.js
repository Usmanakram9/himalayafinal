import express from 'express';
const router = express.Router();

import {
    createBill,
    getBills,
    getSingleBill,
    updateBill,
    deleteBill
} from '../controllers/billController.js';

router.route('/').post(createBill).get(getBills);
router.route('/:id').get(getSingleBill).put(updateBill).delete(deleteBill);

export default router;
