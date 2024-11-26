const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Lấy danh sách khuyến mãi (phân trang, sắp xếp giảm dần)
router.get('/', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  db.query('SELECT COUNT(*) AS total FROM promotions', (err, countResult) => {
    if (err) throw err;

    const total = countResult[0].total;
    db.query(
      `SELECT promo_id, title, discount, description, start_date, end_date 
       FROM promotions 
       ORDER BY promo_id DESC 
       LIMIT ${limit} OFFSET ${offset}`,
      (err, result) => {
        if (err) throw err;
        res.json({
          data: result,
          total,
          page,
          pages: Math.ceil(total / limit),
          message: 'Lấy danh sách khuyến mãi thành công!',
        });
      }
    );
  });
});

// Thêm khuyến mãi
router.post('/', (req, res) => {
  const { title, discount, description, start_date, end_date } = req.body;
  const query = `
    INSERT INTO promotions (title, discount, description, start_date, end_date)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(query, [title, discount, description, start_date, end_date], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Thêm khuyến mãi thành công!', id: result.insertId });
  });
});

// Sửa khuyến mãi
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, discount, description, start_date, end_date } = req.body;
  const query = `
    UPDATE promotions
    SET title = ?, discount = ?, description = ?, start_date = ?, end_date = ?
    WHERE promo_id = ?
  `;
  db.query(query, [title, discount, description, start_date, end_date, id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Cập nhật khuyến mãi thành công!' });
  });
});

// Xóa khuyến mãi
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM promotions WHERE promo_id = ?';
  db.query(query, [id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Xóa khuyến mãi thành công!' });
  });
});

module.exports = router;
