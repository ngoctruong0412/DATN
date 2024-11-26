import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AppointmentsForm from './AppointmentsForm';
import './custom.css';


function Appointments() {
    return (
        <Router>
            <div className="container mt-5">
                <header className="text-center mb-5">
                    <h1 className="display-4 text-primary">Quản lý Đặt lịch Tiệm Thú Cưng</h1>
                    <p className="lead text-secondary">
                        
                    </p>
                </header>
                <div className="row text-center">
                    <div className="col-md-3">
                        <div className="card shadow-sm mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Quản lý Lịch Hẹn</h5>
                                <p className="card-text">Quản lý và xem lịch hẹn của các thú cưng.</p>
                                <Link to="/appointments" className="btn btn-primary">Xem Lịch Hẹn</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow-sm mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Quản lý Khách Hàng</h5>
                                <p className="card-text">Xem và quản lý thông tin khách hàng.</p>
                                <Link to="/customers" className="btn btn-primary">Xem Khách Hàng</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow-sm mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Quản lý Dịch Vụ</h5>
                                <p className="card-text">Xem và quản lý các dịch vụ cung cấp.</p>
                                <Link to="/services" className="btn btn-primary">Xem Dịch Vụ</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow-sm mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Quản lý Nhân Viên</h5>
                                <p className="card-text">Xem và quản lý nhân viên trong cửa hàng.</p>
                                <Link to="/employees" className="btn btn-primary">Xem Nhân Viên</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Thêm phần Routes để hiển thị các component khác */}
                <Routes>
                    <Route path="/appointments" element={<AppointmentsForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Appointments;
