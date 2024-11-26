const db = require('../config/db');

// Lấy tổng số lượng khuyến mãi
exports.getTotalPromotions = (callback) => {
  const query = 'SELECT COUNT(*) AS total FROM promotions';
  db.query(query, callback);
};

// Lấy danh sách khuyến mãi (phân trang)
exports.getPromotions = (limit, offset, callback) => {
  const query = `
    SELECT promo_id, title, discount, description, start_date, end_date 
    FROM promotions 
    ORDER BY promo_id DESC 
    LIMIT ? OFFSET ?
  `;
  db.query(query, [limit, offset], callback);
};

// Thêm khuyến mãi
exports.createPromotion = (data, callback) => {
  const query = `
    INSERT INTO promotions (title, discount, description, start_date, end_date)
    VALUES (?, ?, ?, ?, ?)
  `;
  const { title, discount, description, start_date, end_date } = data;
  db.query(query, [title, discount, description, start_date, end_date], callback);
};

// Sửa khuyến mãi
exports.updatePromotion = (id, data, callback) => {
  const query = `
    UPDATE promotions
    SET title = ?, discount = ?, description = ?, start_date = ?, end_date = ?
    WHERE promo_id = ?
  `;
  const { title, discount, description, start_date, end_date } = data;
  db.query(query, [title, discount, description, start_date, end_date, id], callback);
};

// Xóa khuyến mãi
exports.deletePromotion = (id, callback) => {
  const query = 'DELETE FROM promotions WHERE promo_id = ?';
  db.query(query, [id], callback);
};
