import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from '@mui/icons-material/Store';
import CategoryIcon from '@mui/icons-material/Category';
import EmployeeIcon from '@mui/icons-material/Badge'
import ArticleIcon from '@mui/icons-material/Article';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BuildIcon from '@mui/icons-material/Build';
import EventIcon from '@mui/icons-material/Event';
import CommentIcon from '@mui/icons-material/Comment';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import './Sidebar.css';

function Sidebar() {
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: 'dashboard' },
    { text: 'Quản lý Người dùng', icon: <PeopleIcon />, path: 'users' },
    { text: 'Quản lý nhân viên', icon: <EmployeeIcon />, path: 'employees' },
    { text: 'Quản lý Sản phẩm', icon: <StoreIcon />, path: 'products' },
    { text: 'Quản lý Danh mục', icon: <CategoryIcon />, path: 'categories' },
    { text: 'Quản lý Bài viết', icon: <ArticleIcon />, path: 'posts' },
    { text: 'Quản lý Đơn hàng', icon: <ShoppingCartIcon />, path: 'orders' },
    { text: 'Quản lý Dịch vụ', icon: <BuildIcon />, path: 'services' },
    { text: 'Quản lý Đặt lịch', icon: <EventIcon />, path: 'appointments' },
    { text: 'Quản lý Bình luận', icon: <CommentIcon />, path: 'comments' },
    { text: 'Quản lý khuyến mãi', icon: <LocalOfferIcon />, path: 'promotions' },
  ];

  return (
    <Drawer variant="permanent" anchor="left" className="sidebar-drawer">
      <List className="sidebar-list">
        {menuItems.map((item, index) => (
          <ListItem
            button
            component={Link}
            to={item.path} // Relative path without /admin
            key={index}
            className="sidebar-item"
            aria-label={item.text}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
