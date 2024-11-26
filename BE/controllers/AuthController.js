const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/Login');


const login = (req, res) => {
    const { username, password } = req.body;

    userModel.findUserByUsername(username, (err, results) => {
        if (err) return res.status(500).json({ error: 'Lỗi kết nối cơ sở dữ liệu' });
        if (results.length === 0) return res.status(401).json({ error: 'Tên người dùng hoặc mật khẩu không đúng' });

        const user = results[0];

        if (user.status === 'Bị Chặn') {
            return res.status(403).json({ error: 'Tài khoản của bạn đã bị chặn' });
        }

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err || !isMatch) {
                return res.status(401).json({ error: 'Tên người dùng hoặc mật khẩu không đúng' });
            }

           // Secret key nên được đặt trong file .env để bảo mật
        const secretKey = process.env.JWT_SECRET || "your_secret_key"; // Thay "your_secret_key" bằng giá trị thực tế

           // Khi sử dụng jwt.sign:
        const token = jwt.sign({ id: user.user_id }, secretKey, { expiresIn: "1h" });

            const redirectUrl = user.role === 1 ? 'http://localhost:3000' : 'http://localhost:3000/admin';
            res.json({ token, redirectUrl, message: 'Đăng nhập thành công' });
        });
    });
};

module.exports = { login };
