import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/UserInfo.css'; // Đảm bảo bạn tạo file CSS để định dạng

const UserInfo = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Hàm để lấy dữ liệu từ backend
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/user'); // Thay URL này thành API endpoint thật của bạn
                setUser(response.data);
                setLoading(false);
            } catch (err) {
                setError('Không thể lấy dữ liệu người dùng');
                setLoading(false);
            }
        };

        fetchUserData();
    }, []); // Chỉ gọi một lần khi component được mount

    if (loading) {
        return <div>Đang tải thông tin...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="user-info-container">
            <h1 className="user-info-title">Tài khoản của bạn</h1>
            <div className="user-info-content">
                <div className="user-info-sidebar">
                    <h3>Tài khoản</h3>
                    <ul>
                        <li>Thông tin tài khoản</li>
                        <li>Danh sách địa chỉ</li>
                        <li>Đăng xuất</li>
                    </ul>
                </div>
                <div className="user-info-details">
                    <h3>Thông tin tài khoản</h3>
                    <p><strong>{user.name}</strong></p>
                    <p>{user.email}</p>
                    <p>{user.country}</p>
                    <a href="#user">{user.address}</a>
                    <div className="no-orders">
                        {user.orders.length === 0 ? (
                            <p>Bạn chưa đặt mua sản phẩm.</p>
                        ) : (
                            <p>Bạn đã có {user.orders.length} sản phẩm đã đặt.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
