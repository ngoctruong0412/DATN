import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import '../styles/CartUser.css';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        { name: "Sản phẩm 1:", price: 100000 },
        { name: "Sản phẩm 2:", price: 200000 },
        { name: "Sản phẩm 3:", price: 300000 },
    ]); // Ví dụ về trạng thái cho giỏ hàng
    const [total, setTotal] = useState(600000); // Tổng tiền ban đầu

    // Hàm để xóa sản phẩm khỏi giỏ hàng
    const handleRemoveItem = (index) => {
        const updatedCartItems = [...cartItems];  // Sao chép giỏ hàng hiện tại
        const removedItem = updatedCartItems.splice(index, 1);  // Xóa sản phẩm tại vị trí chỉ số `index`
        setCartItems(updatedCartItems);  // Cập nhật giỏ hàng
        setTotal(total - removedItem[0].price);  // Cập nhật tổng tiền
    };

    // Ví dụ về chương trình khuyến mãi
    const promoItems = [
        {
            name: "VITAMIN BỔ SUNG CANXI CHO CHÓ",
            price: 42000,
            condition: "Cho đơn hàng tối thiểu 10 sản phẩm",
            limit: "Không giới hạn"
        }
    ];

    return (
        <Container className="cart-container">
            <Row>
                <Col md={8}>
                    <h3>Giỏ hàng của bạn</h3>
                    {cartItems.length === 0 ? (
                        <p>Giỏ hàng của bạn đang trống</p>
                    ) : (
                        <div>
                            {cartItems.map((item, index) => (
                                <div key={index} className="cart-item">
                                    <h5>{item.name}</h5>
                                    <p>{item.price}đ</p>
                                    <Button variant="danger" onClick={() => handleRemoveItem(index)}>Xóa</Button>
                                </div>
                            ))}
                        </div>
                    )}
                </Col>

                <Col md={4}>
                    <h3>Thông tin đơn hàng</h3>
                    <Card>
                        <Card.Body>
                            <Card.Title>Tổng tiền:</Card.Title>
                            <Card.Text>{total}đ</Card.Text>
                            <p>
                                Phí vận chuyển sẽ được tính ở trang thanh toán. <br />
                                Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.
                            </p>
                            <Button variant="danger" block>THANH TOÁN</Button>
                        </Card.Body>
                    </Card>

                    <h4 className="mt-4">Chương trình khuyến mãi</h4>
                    {promoItems.map((promo, index) => (
                        <Card key={index} className="mt-3">
                            <Card.Body>
                                <Card.Title>{promo.name}</Card.Title>
                                <Card.Text>Đồng giá {promo.price}đ</Card.Text>
                                <p>{promo.condition}</p>
                                <p>HSD: {promo.limit}</p>
                                <Button variant="outline-primary">Xem chi tiết</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            </Row>

            <Row className="mt-3">
                <Col>
                    <Button variant="secondary" href="/">Tiếp tục mua hàng</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;
