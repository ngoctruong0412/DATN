import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  // Lấy danh sách sản phẩm
  const fetchProducts = async (page = 1) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/products?page=${page}`);
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
      setCurrentPage(page);
    } catch (error) {
      setError("Lỗi khi lấy dữ liệu sản phẩm.");
      console.error(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/categories');
      setCategories(response.data.categories || []); // Đảm bảo luôn là mảng
    } catch (error) {
      console.error("Lỗi khi lấy danh mục sản phẩm:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Xử lý thêm/cập nhật sản phẩm
  const handleAddOrUpdate = async (formData) => {
    try {
      if (editingProduct) {
        await axios.put(`http://localhost:5000/api/products/${editingProduct.product_id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setMessage('Cập nhật sản phẩm thành công!');
        setEditingProduct(null);
      } else {
        await axios.post('http://localhost:5000/api/products', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setMessage('Thêm sản phẩm thành công!');
      }
      fetchProducts(currentPage);
    } catch (error) {
      setError("Lỗi khi thêm/cập nhật sản phẩm.");
      console.error(error);
    }
  };

  // Xử lý chỉnh sửa
  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  // Xử lý xóa
  const handleDelete = async (product_id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${product_id}`);
      setMessage('Xóa sản phẩm thành công!');
      fetchProducts(currentPage);
    } catch (error) {
      setError("Lỗi khi xóa sản phẩm.");
      console.error(error);
    }
  };

  // Chuyển trang
  const handlePageChange = (page) => {
    fetchProducts(page);
  };

  // Xóa thông báo lỗi
  useEffect(() => {
    if (error || message) {
      const timeout = setTimeout(() => {
        setError(null);
        setMessage('');
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [error, message]);

  return (
    <div className="container mt-5">
      <h1>Quản lý sản phẩm</h1>

      {error && <div className="alert alert-danger">{error}</div>}
      {message && <div className="alert alert-success">{message}</div>}

      <ProductForm
        onSubmit={handleAddOrUpdate}
        editingProduct={editingProduct}
        categories={categories}
      />

      <ProductList
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {products.length === 0 && !error && (
        <p className="text-center mt-4">Không có sản phẩm nào.</p>
      )}

      <div className="pagination mt-4 d-flex justify-content-center">
        <button
          className="btn btn-secondary mr-2"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Trang trước
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`btn ${currentPage === i + 1 ? 'btn-primary' : 'btn-outline-primary'} mx-1`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="btn btn-secondary ml-2"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Trang sau
        </button>
      </div>
    </div>
  );
};

export default Product;
