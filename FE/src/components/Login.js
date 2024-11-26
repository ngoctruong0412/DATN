import React, { useState } from 'react';
import { loginUser } from './services/LoginApi';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        try {
            const response = await loginUser(username, password);
            const { token, redirectUrl, message } = response.data;
            localStorage.setItem('token', token);
            setMessage(message);
            setError('');

            setTimeout(() => {
                window.location.href = redirectUrl;
            }, 1500);
        } catch (error) {
            setMessage('');
            setError(error.response?.data?.error || 'Đăng nhập thất bại');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="card p-4" style={{ width: '350px' }}>
                <h3 className="text-center mb-3">Đăng Nhập</h3>
                
                {/* Error and success messages */}
                {error && <div className="alert alert-danger">{error}</div>}
                {message && <div className="alert alert-success">{message}</div>}
                
                {/* Username Input */}
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Tên người dùng"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                
                {/* Password Input */}
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

               

                {/* Login Button */}
                <button className="btn btn-primary w-100" onClick={handleLogin}>
                    Đăng Nhập
                </button>

                {/* Footer Links */}
                <div className="footer-links text-center mt-3">
                    <p>
                        Khách hàng mới? <a href="/register">Tạo tài khoản</a>
                    </p>
                    <p>
                        Quên mật khẩu? <a href="/resetemail">Khôi phục mật khẩu</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
