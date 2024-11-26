const db = require('../config/db');

const Register = {
  findByUsername: (username, callback) => {
    const query = 'SELECT COUNT(*) AS count FROM users WHERE username = ?';
    db.query(query, [username], callback);
  },
  create: (data, callback) => {
    const query = `INSERT INTO users (username, password, email, phone_number, role) VALUES (?, ?, ?, ?, ?)`;
    const values = [data.username, data.password, data.email, data.phone_number, data.role || 1];
    db.query(query, values, callback);
  },
};

module.exports = Register;
