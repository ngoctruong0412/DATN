// src/components/Cart.js
import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import '../styles/Cart.css';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Hạt cho chó Royal Canin', price: 500000, quantity: 1 },
        { id: 2, name: 'Snack cho mèo Whiskas', price: 300000, quantity: 2 },
        { id: 3, name: 'Đồ chơi xương cao su', price: 150000, quantity: 1 },
    ]);

    const [showCheckout, setShowCheckout] = useState(false);
    const [customerInfo, setCustomerInfo] = useState({ name: '', email: '', address: '' });

    const handleQuantityChange = (id, delta) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(item.quantity + delta, 1) } : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleCheckout = () => {
        setShowCheckout(true);
    };

    const handleClose = () => setShowCheckout(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomerInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    };

    const handlePayment = (e) => {
        e.preventDefault();
        console.log('Thanh toán thành công với thông tin:', customerInfo);
        alert('Thanh toán thành công! Cảm ơn bạn đã mua hàng.');
        setCartItems([]); // Clear cart after payment
        setShowCheckout(false);
    };

    return (
        <Container className="cart-container">
            <h2>Giỏ hàng của bạn</h2>
            {cartItems.length === 0 ? (
                <p>Giỏ hàng của bạn đang trống!</p>
            ) : (
                <>
                    <Table bordered hover className="cart-table">
                        <thead>
                            <tr>
                                <th>Sản phẩm</th>
                                <th>Giá</th>
                                <th>Số lượng</th>
                                <th>Tổng</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.price.toLocaleString()} VND</td>
                                    <td>
                                        <Button
                                            variant="outline-dark"
                                            onClick={() => handleQuantityChange(item.id, -1)}
                                            className="quantity-button"
                                        >
                                            -
                                        </Button>
                                        <span className="quantity">{item.quantity}</span>
                                        <Button
                                            variant="outline-dark"
                                            onClick={() => handleQuantityChange(item.id, 1)}
                                            className="quantity-button"
                                        >
                                            +
                                        </Button>
                                    </td>
                                    <td>{(item.price * item.quantity).toLocaleString()} VND</td>
                                    <td>
                                        <Button
                                            variant="danger"
                                            onClick={() => handleRemoveItem(item.id)}
                                        >
                                            Xóa
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <h3 className="total-price">
                        Tổng cộng: {totalPrice.toLocaleString()} VND
                    </h3>
                    <Button variant="success" className="checkout-button" onClick={handleCheckout}>
                        Thanh toán
                    </Button>
                </>
            )}

            {/* Modal Thanh Toán */}
            <Modal show={showCheckout} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông tin thanh toán</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handlePayment}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Họ và tên</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={customerInfo.name}
                                onChange={handleInputChange}
                                required
                                placeholder="Nhập họ và tên"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={customerInfo.email}
                                onChange={handleInputChange}
                                required
                                placeholder="Nhập email"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="address">
                            <Form.Label>Địa chỉ giao hàng</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                value={customerInfo.address}
                                onChange={handleInputChange}
                                required
                                placeholder="Nhập địa chỉ giao hàng"
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Thanh toán
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default Cart;
