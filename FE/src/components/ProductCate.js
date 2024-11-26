// src/components/ProductCategories.js
import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import odem from '../img/odem.webp';
import xitkhuan from '../img/khukhuan.webp';
import balo from '../img/balo.webp';
import '../styles/ProductCate.css'; // CSS tùy chỉnh



const ProductCate = () => {
    const categories = [
        { id: 1, img: odem,  },
        { id: 2, img: xitkhuan,},
        { id: 3, img: balo, },

    ];

    return (
        <Container>
          
            <Row>
                {categories.map(category => (
                    <Col md={4} key={category.id} className="mb-4">
                        <Card className="text-center"> {/* Center text for better appearance */}
                            <Card.Img variant="top" src={category.img} className="category-img" />
                            <Card.Body>
                                <Card.Title>{category.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductCate;