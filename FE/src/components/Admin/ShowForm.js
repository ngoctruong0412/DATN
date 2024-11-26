// components/ShowForm.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import EmployeeForm from './EmployeeForm';

const ShowForm = ({ showForm, fetchEmployees, selectedEmployee, setSelectedEmployee, onClose }) => {
    // Hiệu ứng trượt từ trên xuống
    const slideDown = useSpring({
        transform: showForm ? `translateY(0%)` : `translateY(-100%)`,
        opacity: showForm ? 1 : 0,
        config: { tension: 300, friction: 30 },
    });

    return (
        <animated.div style={slideDown}>
            {showForm && (
                <EmployeeForm
                    fetchEmployees={fetchEmployees}
                    selectedEmployee={selectedEmployee}
                    setSelectedEmployee={setSelectedEmployee}
                    onClose={onClose}
                />
            )}
        </animated.div>
    );
};

export default ShowForm;
