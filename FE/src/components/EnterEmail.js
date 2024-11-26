import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ResetPassword.css';

const EnterEmail = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email nhập vào:", email);
    navigate('/reset');
  };

  return (
    <div className="reset-container">
      <h2 className="reset-title">KHÔI PHỤC MẬT KHẨU</h2>
      <p className="reset-description">Nhập email của bạn:</p>
      <form onSubmit={handleSubmit} className="reset-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="reset-input-field"
        />
        <p className="reset-description">
          This site is protected by reCAPTCHA and the Google&nbsp;
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="reset-link">
            Privacy Policy
          </a> and&nbsp;
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="reset-link">
            Terms of Service
          </a> apply.
        </p>
        <button type="submit" className="reset-submit-button">KHÔI PHỤC</button>
      </form>
      <p className="reset-description">
        Bạn đã nhớ mật khẩu?&nbsp;
        <a href="/login" className="reset-link">Trở về đăng nhập</a>
      </p>
    </div>
  );
};

export default EnterEmail;
