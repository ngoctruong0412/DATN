import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductData from './productData';
import { Button } from 'react-bootstrap';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the product by ID
    const product = ProductData.find((item) => item.id === parseInt(id));

    // Redirect if product not found
    useEffect(() => {
        if (!product) {
            navigate('/products'); // Redirect to products page if product not found
        }
    }, [product, navigate]);

    // States for image selection, comment management
    const [selectedImage, setSelectedImage] = useState(product ? product.images[0] : '');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const handleAddComment = () => {
        if (comment.trim()) {
            setComments([...comments, { text: comment, date: new Date() }]);
            setComment('');
        }
    };

    return (
        <div className="product-detail-container">
            {/* Image Section */}
            <div className="image-section">
                {product ? (
                    <>
                        <img
                            src={selectedImage}
                            alt={product.Title}
                            className="product-detail-image"
                        />
                        <div className="thumbnails">
                            {product.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Thumbnail ${index}`}
                                    className="thumbnail"
                                    onMouseEnter={() => setSelectedImage(img)}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>

            {/* Info Section */}
            <div className="info-section">
                {product ? (
                    <>
                        <h2>{product.Title}</h2>
                        <p>{product.Description}</p>
                        <p className="price">{product.Price} VNĐ</p>
                        <Button variant="success">Thêm vào giỏ hàng</Button>
                    </>
                ) : (
                    <p>Loading product details...</p>
                )}

                {/* Comments Section */}
                <div className="comments-section">
                    <h3>Bình luận</h3>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Nhập bình luận của bạn"
                    />
                    <Button variant="primary" onClick={handleAddComment}>
                        Gửi
                    </Button>
                    <div className="comments-list">
                        {comments.length === 0 ? (
                            <p>Chưa có bình luận nào.</p>
                        ) : (
                            comments.map((cmt, index) => (
                                <div key={index} className="comment-item">
                                    <p>{cmt.text}</p>
                                    <small>{cmt.date.toLocaleString()}</small>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
