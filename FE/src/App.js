import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './Pages/Service';
import PromoProducts from './Pages/Promo';
import Home from './Pages/Home';
import Login from "./Pages/Login";
import RegisterForm from "./Pages/Register";
import EnterEmail from "./Pages/EnterEmail";
import ContactPage from './Pages/Contact';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import ProductCate from './Pages/ProductCate';
import NewPage from './Pages/NewPage';
import NewsDetailPage from './Pages/NewDetailPage';
import AdminPage from './Pages/AdminPage';
import { CartProvider } from './Contexts/CartContext';
// Giả định Header và Footer là các thành phần khác mà bạn muốn tích hợp

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          {/* Đặt Header bên ngoài Routes để xuất hiện trên mọi trang */}
        

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/promo-product" element={<PromoProducts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/resetemail" element={<EnterEmail />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Product />} />
            <Route path="/productpage" element={<ProductCate />} />
            <Route path="/news" element={<NewPage />} />
            <Route path="/news/:id" element={<NewsDetailPage />} />
            <Route path="/admin/*" element={<AdminPage />} />
          </Routes>

          {/* Đặt Footer bên ngoài Routes để xuất hiện trên mọi trang */}
        
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
