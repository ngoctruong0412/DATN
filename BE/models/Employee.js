// models/Employee.js
const db = require('../config/db');

class Employee {
    static getAllEmployees(offset, limit, result) {
        db.query(`SELECT * FROM employees LIMIT ?, ?`, [offset, limit], (err, res) => {
            if (err) return result(err, null);
            result(null, res);
        });
    }

    static createEmployee(newEmployee, result) {
        db.query('INSERT INTO employees SET ?', newEmployee, (err, res) => {
            if (err) return result(err, null);
            result(null, { employee_id: res.insertId, ...newEmployee });
        });
    }

    static updateEmployee(employee_id, updatedEmployee, result) {
        db.query('UPDATE employees SET ? WHERE employee_id = ?', [updatedEmployee, employee_id], (err, res) => {
            if (err) return result(err, null);
            result(null, { employee_id, ...updatedEmployee });
        });
    }

    static deleteEmployee(employee_id, result) {
        db.query('DELETE FROM employees WHERE employee_id = ?',employee_id, (err, res) => {
            if (err) return result(err, null);
            result(null, res);
        });
    }
}
module.exports = Employee;
