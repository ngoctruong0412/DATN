const express = require('express');
const router = express.Router();
const OrdersController = require('../controllers/OrdersController');

// Định nghĩa route cho việc lấy danh sách orders
router.get('/', OrdersController.getOrders);

module.exports = router;
