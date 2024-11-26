import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Admin/Sidebar';
import Dashboard from '../components/Admin/Dashboard';
import Users from '../components/Admin/Users';
import Services from '../components/Admin/Services';
import Product from '../components/Admin/Product';
import OrderHistory from '../components/Admin/OrderHistory';
import Orders from '../components/Admin/Orders';
import Posts from '../components/Admin/Posts';
import Employees from '../components/Admin/Employees'
import Categories from '../components/Admin/Categories';
import Appointments from '../components/Admin/AppointmentsForm';
import AdminAccounts from '../components/Admin/AdminAccount';
import Comments from '../components/Admin/Comments';
import PromotionList from '../components/Admin/PromotionList';
import 'bootstrap/dist/css/bootstrap.min.css';


function AdminPage() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ marginLeft: '100px', padding: '50px', width: '100%' }}>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="services" element={<Services />} />
          <Route path="products" element={<Product />} />
          <Route path="order-history" element={<OrderHistory />} />
          <Route path="orders" element={<Orders />} />
          <Route path="posts" element={<Posts />} />
          <Route path="employees" element={<Employees />} />
          <Route path="categories" element={<Categories />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="admin-accounts" element={<AdminAccounts />} />
          <Route path="comments" element={<Comments />} />
          <Route path="promotions" element={<PromotionList/>} />
        </Routes>
      </main>
    </div>
  );
}

export default AdminPage;
