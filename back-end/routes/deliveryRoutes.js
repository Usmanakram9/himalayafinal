import express  from "express";

import {
    createDelivery,
    getAllDeliveries,
    getDeliveryById,
    updateDeliveryById,
    deleteDeliveryById,
  } from '../controllers/deliveryController.js';
  
  const router = express.Router();
  
  // Create a new delivery
  router.post('/', createDelivery);
  
  // Get all deliveries
  router.get('/', getAllDeliveries);
  
  // Get a specific delivery by ID
  router.get('/:id', getDeliveryById);
  
  // Update a delivery by ID
  router.put('/:id', updateDeliveryById);
  
  // Delete a delivery by ID
  router.delete('/:id', deleteDeliveryById);
  
  export default router;

