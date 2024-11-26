const express = require('express');
const router = express.Router();
const postController = require('../controllers/PostController');

// Lấy tất cả bài viết
router.get('/', postController.getAllPosts);

// Thêm bài viết
router.post('/', postController.addPost);

// Sửa bài viết
router.put('/:id', postController.updatePost);

// Xóa bài viết
router.delete('/:id', postController.deletePost);

module.exports = router;
