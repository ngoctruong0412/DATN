// src/Pages/ProductList.js
import React, { useState } from 'react';
import ProductData from './productData';
import { useCart } from '../Contexts/CartContext';
import { AiFillCloseCircle } from 'react-icons/ai';
import '../styles/Product.css';

const ProductList = () => {
    const [selectedProduct, setSelectedProduct] = useState(null); // Product đang được chọn để hiển thị chi tiết
    const { addToCart } = useCart();

    const openDetail = (product) => {
        setSelectedProduct(product);
    };

    const closeDetail = () => {
        setSelectedProduct(null);
    };

    return (
        <>
            {/* Modal hiển thị chi tiết sản phẩm */}
            {selectedProduct && (
                <div className="detail-modal">
                    <div className="detail-content">
                        <button className="close-button" onClick={closeDetail}>
                            <AiFillCloseCircle size={24} />
                        </button>
                        <div className="detail-info">
                            <div className="detail-image">
                                <img src={selectedProduct.img} alt={selectedProduct.Title} />
                            </div>
                            <div className="detail-text">
                                <h2>{selectedProduct.Title}</h2>
                                <h3>{selectedProduct.Price} VNĐ</h3>
                                <p>{selectedProduct.Des}</p>
                                <button 
                                    className="add-cart-button"
                                    onClick={() => addToCart(selectedProduct)}
                                >
                                    Thêm vào giỏ hàng
                                </button>
                                <div className="comments-section">
                                    <h3>Đánh giá & Bình luận</h3>
                                    <textarea
                                        placeholder="Nhập đánh giá hoặc bình luận của bạn"
                                    />
                                    <button className="comment-button">
                                        Gửi bình luận
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Danh sách sản phẩm */}
            <div className="product-container">
                {ProductData.map((product) => (
                    <div className="product-box" key={product.id}>
                        <div className="product-content">
                            <div className="product-image">
                                <img src={product.img} alt={product.Title} />
                            </div>
                            <div className="product-info">
                                <h3>{product.Title}</h3>
                                <p>{product.Price} VNĐ</p>
                                <button 
                                    className="view-button" 
                                    onClick={() => openDetail(product)}
                                >
                                    Xem Chi Tiết
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductList;
