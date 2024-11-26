import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductData from './productData'; // Giả sử dữ liệu sản phẩm được chứa ở đây
import '../styles/Product.css'; // Giả sử file CSS để tạo kiểu cho trang

const Products = () => {
    const navigate = useNavigate();

    const handleViewDetail = (productId) => {
        navigate(`products/${productId}`);
    };

    // Kiểm tra nếu không có dữ liệu sản phẩm để hiển thị
    if (!ProductData || ProductData.length === 0) {
        return <p>Hiện không có sản phẩm nào.</p>;
    }

    return (
        <div className="product-container">
            {ProductData.map((product) => (
                <div className="product-box" key={product.id}>
                    <div className="product-content">
                        <div className="product-image">
                            {/* Cải thiện thuộc tính alt để thân thiện hơn với accessibility */}
                            <img src={product.img} alt={`Hình ảnh của ${product.Title}`} />
                        </div>
                        <div className="product-info">
                            <h3>{product.Title}</h3>
                            <p>{product.Price} VNĐ</p>
                            {/* Thêm class cho nút để dễ dàng tùy chỉnh */}
                            <button className="view-detail-btn" onClick={() => handleViewDetail(product.id)}>
                                Xem Chi Tiết
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
