const appointmentModel = require('../models/appointmentModel');

exports.getAllAppointments = (req, res) => {
  appointmentModel.getAll((error, results) => {
    if (error) {
      res.status(500).json({ error });
    } else {
      res.status(200).json(results);
    }
  });
};

exports.createAppointment = (req, res) => {
  const { customerId, serviceId, date, time } = req.body;
  appointmentModel.create({ customerId, serviceId, date, time }, (error, result) => {
    if (error) {
      res.status(500).json({ error });
    } else {
      res.status(201).json({ message: 'Appointment created', id: result.insertId });
    }
  });
};
