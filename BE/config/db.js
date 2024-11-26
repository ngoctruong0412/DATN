const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Thay bằng tên người dùng MySQL của bạn
  password: '', // Thay bằng mật khẩu MySQL của bạn
  database: 'petpal' // Tên cơ sở dữ liệu
});

db.connect((err) => {
  if (err) {
    console.error('Kết nối đến MySQL thất bại:', err);
    return;
  }
  console.log('Kết nối đến MySQL thành công');
});

module.exports = db;
