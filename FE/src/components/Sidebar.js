import React from 'react';
import { ListGroup } from 'react-bootstrap';
import '../styles/Sidebar.css'; // Import the CSS file

const Sidebar = ({ categories, setActiveCategory }) => {
  return (
    <ListGroup className="sidebar-sticky">
      {categories.map((category, index) => (
        <ListGroup.Item
          key={index}
          onClick={() => setActiveCategory(category)}
          action
        >
          {category}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Sidebar;
