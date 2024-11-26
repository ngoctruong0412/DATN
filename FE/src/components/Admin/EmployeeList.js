import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

const EmployeeList = ({ setSelectedEmployee, fetchEmployees, onEditEmployee }) => {
    const [employees, setEmployees] = useState([]);
    const [page, setPage] = useState(1);

    const loadEmployees = async (page) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/employees?page=${page}`);
            setEmployees(response.data);
        } catch (error) {
            console.error("Lỗi khi tải danh sách nhân viên:", error);
        }
    };

    useEffect(() => {
        loadEmployees(page);
    }, [page]);

    const handleDelete = async (employee_id) => {
        try {
            await axios.delete(`http://localhost:5000/api/employees/${employee_id}`);
            loadEmployees(page);
        } catch (error) {
            console.error("Lỗi khi xóa nhân viên:", error);
            alert("Không thể xóa nhân viên. Vui lòng thử lại.");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Danh Sách Nhân Viên</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Số Điện Thoại</th>
                        <th>Chức Vụ</th>
                        <th>Lương</th>
                        <th>Ngày Bắt Đầu</th>
                        <th>Trạng Thái</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.employee_id}>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone_number}</td>
                            <td>{employee.position}</td>
                            <td>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(employee.salary)}</td>
                            <td>{new Date(employee.start_date).toLocaleDateString()}</td>
                            <td>{employee.status}</td>
                            <td>
                                <button
                                    onClick={() => onEditEmployee(employee)}
                                    className="btn btn-warning btn-sm me-2"
                                >
                                    Sửa
                                </button>
                                <button
                                    onClick={() => handleDelete(employee.employee_id)}
                                    className="btn btn-danger btn-sm me-2"
                                >
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination page={page} setPage={setPage} />
        </div>
    );
};

export default EmployeeList;
