// routes/auth.js
const express = require('express');
const { registerUser } = require('../controllers/RegisterController');

const router = express.Router();

router.post('/register', registerUser);

module.exports = router;
