// controllers/postController.js

const db = require('../config/db');

// Lấy tất cả bài viết
exports.getAllPosts = (req, res) => {
  db.query('SELECT * FROM blogposts', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};
// Thêm bài viết
exports.addPost = (req, res) => {
    const { title, content } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;
  
    const sql = 'INSERT INTO blogposts (title, content, image_url) VALUES (?, ?, ?)';
    db.query(sql, [title, content, image], (err, result) => {
      if (err) {
        console.error(err); // Log lỗi chi tiết
        return res.status(500).json({ error: 'Có lỗi xảy ra khi thêm bài viết.' });
      }
      res.json({ message: 'Bài viết đã được thêm', id: result.insertId });
    });
  };

// Sửa bài viết
exports.updatePost = (req, res) => {
  const { id } = req.params;
  const { author_id, blog_category_id, title, content, updated_at, image_url } = req.body;
  db.query('UPDATE blogposts SET ? WHERE post_id = ?', [{ author_id, blog_category_id, title, content, updated_at, image_url }, id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Post updated successfully' });
  });
};

// Xóa bài viết
exports.deletePost = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM blogposts WHERE post_id = ?', id, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Post deleted successfully' });
  });
};

