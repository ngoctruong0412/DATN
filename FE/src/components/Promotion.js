// src/components/Promotions.js
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/Promotion.css'; // CSS tùy chỉnh

const promotions = [
    {
        id: 1,
        title: 'BẢN SAO TẠO TỪ PATE PEDIGREE 130G 15%',
        discount: 'Giảm 15%',
        description: 'Áp dụng với một số sản phẩm',
        expiry: 'HSD: Không giới hạn',
    },
    {
        id: 2,
        title: 'PATE HUG & PATE AATAS 10%',
        discount: 'Giảm 10%',
        description: 'Áp dụng với một số sản phẩm',
        expiry: 'HSD: Không giới hạn',
    },
    {
        id: 3,
        title: 'SNACK GÀ MỀM JERHIGH - PRAMA NHIỀU VỊ',
        discount: 'Đồng giá 42k',
        description: 'Cho đơn hàng tối thiểu 10 sản phẩm',
        expiry: 'HSD: Không giới hạn',
    },
];

const Promotions = () => {
    return (
        <Container className="promotions-container">
            <h2>Chương trình khuyến mãi</h2>
            <Row>
                {promotions.map((promo) => (
                    <Col key={promo.id} md={4} className="mb-4">
                        <Card className="promotion-card">
                            <Card.Body>
                                <Card.Title>{promo.title}</Card.Title>
                                <h3 className="discount-text">{promo.discount}</h3>
                                <Card.Text className="expiry">{promo.expiry}</Card.Text>
                                <Card.Text className="description">
                                    *{promo.description}
                                </Card.Text>
                                <Button variant="dark">Xem chi tiết</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Promotions;
