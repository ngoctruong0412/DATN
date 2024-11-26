
const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/CategoriesController');

// Định nghĩa các route cho danh mục
router.get('/', categoriesController.getCategories);
router.post('/', categoriesController.addCategory);
router.put('/:cate_id', categoriesController.updateCategory);
router.delete('/:cate_id', categoriesController.deleteCategory);

module.exports = router;
