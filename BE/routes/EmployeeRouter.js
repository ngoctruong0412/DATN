const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/EmployeeController');

router.patch('/employees/:id', employeeController.updateEmployee);
router.get('/employees', employeeController.getEmployees);
router.post('/employees', employeeController.createEmployee);
router.put('/employees/:id', employeeController.updateEmployee);

module.exports = router;