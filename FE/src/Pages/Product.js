import React from 'react';
// Uncomment the Header and Footer if needed for consistent layout
// import Header from '../components/Header';
import { Routes, Route } from 'react-router-dom';
import Product from '../components/Product';
import ProductDetail from '../components/ProductDetail';
// import Footer from '../components/Footer';

const ProductPage = () => {
  return (
    <div>
      <Routes>
    
        <Route path="/products" element={<Product />} />

        <Route path="/products/:id" element={<ProductDetail />} />        

        <Route path="/" element={<Product />} />
      </Routes>
    </div>
  );
};

export default ProductPage;
