// controllers/employeeController.js
const Employee = require('../models/Employee');

exports.getEmployees = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const offset = (page - 1) * limit;

    Employee.getAllEmployees(offset, limit, (err, data) => {
        if (err) res.status(500).send({ message: "Lỗi server khi tải danh sách nhân viên" });
        else res.send(data);
    });
};

exports.createEmployee = (req, res) => {
    const newEmployee = req.body;
    Employee.createEmployee(newEmployee, (err, data) => {
        if (err) res.status(500).send({ message: "Lỗi server khi thêm nhân viên" });
        else res.send(data);
    });
};

exports.updateEmployee = (req, res) => {
    Employee.updateEmployee(req.params.employee_id, req.body, (err, data) => {
        if (err) res.status(500).send({ message: "Lỗi server khi cập nhật nhân viên" });
        else res.send(data);
    });
};

exports.deleteEmployee = (req, res) => {
    Employee.deleteEmployee(req.params.employee_id, (err, data) => {
        if (err) res.status(500).send({ message: "Lỗi server khi xóa nhân viên" });
        else res.send({ message: 'Xóa nhân viên thành công' });
    });
};
