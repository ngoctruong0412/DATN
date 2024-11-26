
const db = require('../config/db');

// Hàm để lấy danh sách bình luận
exports.getComments = (req, res) => {
    const query = 'SELECT * FROM comments';

    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching comments:", err);
            return res.status(500).send('Lỗi truy vấn cơ sở dữ liệu');
        }
        res.render('comments', { comments: results });
    });
};

// Hàm để xóa bình luận
exports.deleteComment = (req, res) => {
    const commentId = req.params.comment_id;
    const query = 'DELETE FROM comments WHERE comment_id = ?';

    db.query(query, [commentId], (err, results) => {
        if (err) {
            console.error("Error deleting comment:", err);
            return res.status(500).send('Lỗi khi xóa bình luận');
        }
        res.redirect('/comments');
    });
};