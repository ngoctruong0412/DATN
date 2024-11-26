const db = require('../config/db');

// Hàm lấy danh sách danh mục
exports.getCategories = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const offset = (page - 1) * limit;

    db.query(`SELECT * FROM categories LIMIT ${limit} OFFSET ${offset}`, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

// Hàm thêm danh mục mới
exports.addCategory = (req, res) => {
    const { name } = req.body;
    db.query('INSERT INTO categories (name) VALUES (?)', [name], (err, result) => {
        if (err) throw err;
        res.json({ cate_id: result.insertId, name });
    });
};

// Hàm cập nhật danh mục
exports.updateCategory = (req, res) => {
    const { cate_id } = req.params;
    const { name } = req.body;
    db.query('UPDATE categories SET name = ? WHERE cate_id = ?', [name, cate_id], (err) => {
        if (err) throw err;
        res.json({ message: 'Cập nhật thành công' });
    });
};

// Hàm xóa danh mục
exports.deleteCategory = (req, res) => {
    const { cate_id } = req.params;
    db.query('DELETE FROM categories WHERE id = ?', [cate_id], (err) => {
        if (err) throw err;
        res.json({ message: 'Xóa thành công' });
    });
};
