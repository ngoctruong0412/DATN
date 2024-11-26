const ProductModel = require('../models/productModel');

const ProductController = {
  getCategories: (req, res) => {
    ProductModel.getCategories((err, categories) => {
      if (err) return res.status(500).json({ error: 'Lỗi khi lấy danh mục' });
      res.json(categories);
    });
  },

  getProducts: (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const offset = (page - 1) * limit;

    ProductModel.getAllProducts(limit, offset, (err, result) => {
      if (err) return res.status(500).json({ error: 'Lỗi khi lấy sản phẩm' });
      const { total, data } = result;
      res.json({
        data,
        total,
        page,
        pages: Math.ceil(total / limit),
        message: 'Lấy danh sách sản phẩm thành công!',
      });
    });
  },

  addProduct: (req, res) => {
    const { name, price, description, cate_id, quantity, start_date, end_date, image } = req.body;

    // Nếu không có ảnh, dùng ảnh mặc định
    const productData = {
      name,
      price,
      description,
      cate_id,
      quantity,
      start_date,
      end_date,
      image: image || '/uploads/default.jpg', // Default image nếu không có ảnh
    };

    ProductModel.addProduct(productData, (err, result) => {
      if (err) return res.status(500).json({ error: 'Lỗi khi thêm sản phẩm' });
      res.json({ message: 'Thêm sản phẩm thành công!', id: result.insertId });
    });
  },

  updateProduct: (req, res) => {
    const id = req.params.id;
    const { name, price, description, cate_id, quantity, start_date, end_date, image } = req.body;

    const productData = {
      name,
      price,
      description,
      cate_id,
      quantity,
      start_date,
      end_date,
      image,
    };

    ProductModel.updateProduct(id, productData, (err) => {
      if (err) return res.status(500).json({ error: 'Lỗi khi cập nhật sản phẩm' });
      res.json({ message: 'Cập nhật sản phẩm thành công!' });
    });
  },

  deleteProduct: (req, res) => {
    const id = req.params.id;
    ProductModel.deleteProduct(id, (err) => {
      if (err) return res.status(500).json({ error: 'Lỗi khi xóa sản phẩm' });
      res.json({ message: 'Xóa sản phẩm thành công!' });
    });
  },
};

module.exports = ProductController;
