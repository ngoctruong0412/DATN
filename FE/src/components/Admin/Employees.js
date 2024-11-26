import React, { useState } from 'react';
import EmployeeList from './EmployeeList';
import ShowForm from './ShowForm';

function Employee() {
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const fetchEmployees = (page) => {
        // Hàm để tải lại danh sách nhân viên
    };

    const handleAddEmployeeClick = () => {
        // Nếu form đang mở, đóng form; nếu không, mở form và đặt selectedEmployee là null
        if (showForm) {
            setShowForm(false);
            setSelectedEmployee(null);
        } else {
            setShowForm(true);
            setSelectedEmployee(null);
        }
    };

    const handleEditEmployee = (employee) => {
        setSelectedEmployee(employee); // Đặt nhân viên để sửa
        setShowForm(true); // Hiển thị form để sửa nhân viên
    };

    const handleFormClose = () => {
        setShowForm(false); // Đóng form
    };

    return (
        <div className="container">
            {/* Chỉ hiển thị nút "Thêm Nhân Viên" khi form không mở */}
            {!showForm && (
                <button onClick={handleAddEmployeeClick} className="btn btn-primary my-3">
                    Thêm Nhân Viên
                </button>
            )}

            {/* Sử dụng ShowForm component để hiển thị form với hiệu ứng */}
            <ShowForm 
                showForm={showForm}
                fetchEmployees={fetchEmployees}
                selectedEmployee={selectedEmployee}
                setSelectedEmployee={setSelectedEmployee}
                onClose={handleFormClose}
            />

            <EmployeeList 
                setSelectedEmployee={setSelectedEmployee} 
                fetchEmployees={fetchEmployees} 
                onEditEmployee={handleEditEmployee} 
            />
        </div>
    );
}

export default Employee;
