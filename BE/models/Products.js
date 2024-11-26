const db = require('../config/db');

const ProductModel = {
  getCategories: (callback) => {
    db.query('SELECT cate_id, cate_name FROM categories', callback);
  },

  getAllProducts: (limit, offset, callback) => {
    const countQuery = 'SELECT COUNT(*) AS total FROM products';
    const dataQuery = `
      SELECT p.product_id, p.name, p.price, p.description, c.cate_name, p.quantity, 
             p.start_date, p.end_date, p.image
      FROM products p
      JOIN categories c ON p.cate_id = c.cate_id
      ORDER BY p.product_id DESC
      LIMIT ? OFFSET ?;
    `;
    db.query(countQuery, (err, countResult) => {
      if (err) return callback(err);
      const total = countResult[0].total;
      db.query(dataQuery, [limit, offset], (err, dataResult) => {
        if (err) return callback(err);
        callback(null, { total, data: dataResult });
      });
    });
  },

  addProduct: (product, callback) => {
    const query = `
      INSERT INTO products (name, price, description, cate_id, quantity, start_date, end_date, image)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?);
    `;
    db.query(
      query,
      [product.name, product.price, product.description, product.cate_id, product.quantity, 
       product.start_date, product.end_date, product.image],
      callback
    );
  },

  updateProduct: (id, product, callback) => {
    const query = `
      UPDATE products
      SET name = ?, price = ?, description = ?, cate_id = ?, quantity = ?, 
          start_date = ?, end_date = ?, image = ?
      WHERE product_id = ?;
    `;
    db.query(
      query,
      [product.name, product.price, product.description, product.cate_id, product.quantity, 
       product.start_date, product.end_date, product.image, id],
      callback
    );
  },

  deleteProduct: (id, callback) => {
    const query = 'DELETE FROM products WHERE product_id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = ProductModel;
