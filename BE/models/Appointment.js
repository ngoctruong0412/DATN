const db = require('../config/db');

exports.getAll = (callback) => {
  db.query('SELECT * FROM appointments', callback);
};

exports.create = (data, callback) => {
  const { customerId, serviceId, date, time } = data;
  db.query(
    'INSERT INTO appointments (customer_id, service_id, date, time) VALUES (?, ?, ?, ?)',
    [customerId, serviceId, date, time],
    callback
  );
};
