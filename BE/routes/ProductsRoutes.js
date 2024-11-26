const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');
const upload = require('../middlewares/upload');

// API upload ảnh
router.post('/upload', upload.single('image'), (req, res) => {
  if (req.file) {
    res.json({ url: `/uploads/${req.file.filename}` });
  } else {
    res.status(400).json({ error: 'Không có file ảnh được tải lên' });
  }
});

// Các routes API khác
router.get('/', ProductController.getProducts);
router.get('/categories', ProductController.getCategories);
router.post('/', ProductController.addProduct);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;
