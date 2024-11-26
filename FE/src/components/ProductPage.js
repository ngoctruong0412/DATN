import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import ProductList from './ProductList';

const ProductPage = () => {
  const categories = ['Thức ăn', 'Trang phục', 'Thuốc', 'Đồ chơi'];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const products = {
    'Thức ăn': [
      { name: 'Thức ăn A', description: 'Mô tả sản phẩm A', image: 'https://via.placeholder.com/150' },
      { name: 'Thức ăn B', description: 'Mô tả sản phẩm B', image: 'https://via.placeholder.com/150' },
      { name: 'Thức ăn C', description: 'Mô tả sản phẩm C', image: 'https://via.placeholder.com/150' },
    ],
    'Trang phục': [
      { name: 'Trang phục A', description: 'Mô tả sản phẩm A', image: 'https://via.placeholder.com/150' },
      { name: 'Trang phục B', description: 'Mô tả sản phẩm B', image: 'https://via.placeholder.com/150' },
      { name: 'Trang phục C', description: 'Mô tả sản phẩm C', image: 'https://via.placeholder.com/150' },
    ],
    'Thuốc': [
      { name: 'Thuốc A', description: 'Mô tả sản phẩm A', image: 'https://via.placeholder.com/150' },
      { name: 'Thuốc B', description: 'Mô tả sản phẩm B', image: 'https://via.placeholder.com/150' },
      { name: 'Thuốc C', description: 'Mô tả sản phẩm C', image: 'https://via.placeholder.com/150' },
    ],
    'Đồ chơi': [
      { name: 'Đồ chơi A', description: 'Mô tả sản phẩm A', image: 'https://via.placeholder.com/150' },
      { name: 'Đồ chơi B', description: 'Mô tả sản phẩm B', image: 'https://via.placeholder.com/150' },
      { name: 'Đồ chơi C', description: 'Mô tả sản phẩm C', image: 'https://via.placeholder.com/150' },
    ],
  };

  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <Sidebar categories={categories} setActiveCategory={setActiveCategory} />
        </Col>
        <Col md={9}>
          <h2>{activeCategory}</h2>
          <ProductList products={products[activeCategory]} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
