import React from 'react';

const ProductList = ({ products = [], onEdit, onDelete, isLoading }) => (
  <div className="table-responsive mt-4">
    <table className="table table-bordered">
      <thead className="thead-dark">
        <tr>
          <th>Hình ảnh</th>
          <th>Tên sản phẩm</th>
          <th>Mô tả</th>
          <th>Giá</th>
          <th>Số lượng</th>
          <th>Danh mục</th>
          <th>Ngày sản xuất</th>
          <th>Ngày hết hạn</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <tr>
            <td colSpan="9" className="text-center">
              Đang tải...
            </td>
          </tr>
        ) : products.length > 0 ? (
          products.map((product) => (
            <tr key={product.product_id}>
              <td>
                {product.image ? (
                  <img
                    src={`http://localhost:5000${product.image}`}
                    alt={product.name}
                    width="50"
                    height="50"
                    style={{ objectFit: 'cover', borderRadius: '4px' }}
                  />
                ) : (
                  <span>Không có ảnh</span>
                )}
              </td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                  product.price
                )}
              </td>
              <td>{product.quantity}</td>
              <td>{product.category_name || 'Không rõ'}</td> {/* Hiển thị tên danh mục */}
              <td>{product.start_date ? new Date(product.start_date).toLocaleDateString() : 'N/A'}</td>
              <td>{product.end_date ? new Date(product.end_date).toLocaleDateString() : 'N/A'}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm mr-2"
                  onClick={() => onEdit(product)}
                >
                  Sửa
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() =>
                    window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?') &&
                    onDelete(product.product_id)
                  }
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="9" className="text-center">
              Không có sản phẩm nào
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

export default ProductList;
