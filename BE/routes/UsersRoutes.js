// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/UsersController');

router.get('/', userController.getAllUsers);
router.put('/:user_id/status', userController.updateUserStatus);

module.exports = router;
