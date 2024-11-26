import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phone_number: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/users/register', formData);
      setMessage(response.data.message);
      setError('');
    } catch (error) {
      setMessage('');
      setError(error.response?.data?.error || 'Đăng ký thất bại!');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card p-4" style={{ width: '350px' }}>
        <h3 className="text-center mb-3">Đăng ký tài khoản</h3>
        
        {/* Error and success messages */}
        {error && <div className="alert alert-danger">{error}</div>}
        {message && <div className="alert alert-success">{message}</div>}
        
        {/* Username Input */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Tên người dùng"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Mật khẩu"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Number Input */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Số điện thoại"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>
          Đăng ký
        </button>

        {/* Footer Links */}
        <div className="footer-links text-center mt-3">
          <p>
            Đã có tài khoản? <a href="/login">Quay lại đăng nhập</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
