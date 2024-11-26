import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmployeeForm.css';

const EmployeeForm = ({ fetchEmployees, selectedEmployee, setSelectedEmployee, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        position: '',
        salary: '',
        start_date: '', // Giữ "Ngày Bắt Đầu" trong form khi thêm mới
        status: 'Đang làm'
    });

    useEffect(() => {
        if (selectedEmployee) {
            setFormData(selectedEmployee);
        }
    }, [selectedEmployee]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedEmployee) {
                await axios.put(`http://localhost:5000/api/employees/${selectedEmployee.employee_id}`, formData);
            } else {
                await axios.post('http://localhost:5000/api/employees', formData);
            }
            fetchEmployees(1);
            setFormData({
                name: '',
                email: '',
                phone_number: '',
                position: '',
                salary: '',
                start_date: '',
                status: 'Đang làm'
            });
            setSelectedEmployee(null);
            onClose();
        } catch (error) {
            console.error("Lỗi khi thêm/sửa nhân viên:", error);
            alert("Không thể thêm/sửa nhân viên. Vui lòng thử lại.");
        }
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-sm">
                <div className="card-header bg-primary text-white d-flex justify-content-between">
                    <h5 className="card-title mb-0">{selectedEmployee ? 'Sửa Nhân Viên' : 'Thêm Nhân Viên'}</h5>
                    <button onClick={onClose} className="btn btn-light btn-sm">Đóng</button>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Tên Nhân Viên</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Nhập tên nhân viên"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Nhập email"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone_number" className="form-label">Số Điện Thoại</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phone_number"
                                name="phone_number"
                                value={formData.phone_number}
                                onChange={handleChange}
                                required
                                placeholder="Nhập số điện thoại"
                                pattern="[0-9]{10,12}"
                                title="Số điện thoại phải là 10-12 chữ số"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="position" className="form-label">Chức Vụ</label>
                            <input
                                type="text"
                                className="form-control"
                                id="position"
                                name="position"
                                value={formData.position}
                                onChange={handleChange}
                                required
                                placeholder="Nhập chức vụ"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="salary" className="form-label">Lương</label>
                            <input
                                type="number"
                                className="form-control"
                                id="salary"
                                name="salary"
                                value={formData.salary}
                                onChange={handleChange}
                                required
                                placeholder="Nhập lương"
                            />
                        </div>
                        {/* Chỉ hiển thị trường "Ngày Bắt Đầu" khi thêm mới */}
                        {!selectedEmployee && (
                            <div className="mb-3">
                                <label htmlFor="start_date" className="form-label">Ngày Bắt Đầu</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="start_date"
                                    name="start_date"
                                    value={formData.start_date}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="mb-3">
                            <label htmlFor="status" className="form-label">Trạng Thái</label>
                            <select
                                className="form-select"
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                            >
                                <option value="Đang làm">Đang làm</option>
                                <option value="Đã nghỉ">Đã nghỉ</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-success w-100">
                            {selectedEmployee ? 'Cập Nhật Nhân Viên' : 'Thêm Nhân Viên'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmployeeForm;
