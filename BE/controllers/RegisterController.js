// controllers/userController.js
const bcrypt = require('bcryptjs');
const User = require('../models/Register');

const registerUser = (req, res) => {
  const { username, password, email, phone_number } = req.body;

  // Kiểm tra dữ liệu đầu vào
  if (!username || !password || !email || !phone_number) {
    return res.status(400).json({ error: 'Vui lòng nhập đầy đủ thông tin!' });
  }

  // Kiểm tra định dạng email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email không hợp lệ!' });
  }

  // Kiểm tra số điện thoại từ 10-12 chữ số
  const phoneRegex = /^\d{10,12}$/;
  if (!phoneRegex.test(phone_number)) {
    return res.status(400).json({ error: 'Số điện thoại phải có từ 10 đến 12 chữ số!' });
  }

  // Kiểm tra mật khẩu phải chứa cả chữ và số
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({ error: 'Mật khẩu phải có ít nhất 6 ký tự, bao gồm cả chữ và số!' });
  }

  // Mã hóa mật khẩu
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: 'Lỗi mã hóa mật khẩu!' });
    }

    // Tạo người dùng mới
    User.create({ username, password: hashedPassword, email, phone_number }, (err) => {
      if (err) {
        // Kiểm tra lỗi vi phạm ràng buộc `UNIQUE`
        if (err.code === 'ER_DUP_ENTRY') {
          if (err.sqlMessage.includes('username')) {
            return res.status(400).json({ error: 'Tên người dùng đã được sử dụng!' });
          } else if (err.sqlMessage.includes('email')) {
            return res.status(400).json({ error: 'Email đã được sử dụng!' });
          }
        }
        // Các lỗi khác
        return res.status(500).json({ error: 'Đăng ký thất bại! Lỗi không xác định.' });
      }

      // Thành công
      res.status(201).json({ message: 'Đăng ký thành công!' });
    });
  });
};

module.exports = { registerUser };
