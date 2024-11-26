const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/CommentsController');

// Route để hiển thị bình luận
router.get('/comments', commentsController.getComments);

// Route để xóa bình luận
router.post('/comments/delete/:comment_id', commentsController.deleteComment);

module.exports = router;
