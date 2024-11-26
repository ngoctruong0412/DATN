const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/AppointmentController');

router.get('/appoinment', appointmentController.getAllAppointments);
router.post('/appoinment', appointmentController.createAppointment);

module.exports = router;
