const express = require('express');
const router = express.Router();
const Order = require('../models/order.model');

// Create Order (embedded product)
router.post('/', async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.send(order);
});

// Get all Orders
router.get('/', async (req, res) => {
  const orders = await Order.find();
  res.send(orders);
});

module.exports = router;
