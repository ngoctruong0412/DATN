import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.css'; 
import logo from '../img/logo.png';  // Import hình ảnh logo

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchTerm);
    };

    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="PetPal" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        <div className="nav-item-wrapper">
                            <Nav.Link href="/productpage" className="nav-item">SẢN PHẨM CHO CHÓ</Nav.Link>
                            <ul className="sub-menu">
                                <li><Nav.Link href="#dog1">Hạt cho chó</Nav.Link></li>
                                <li><Nav.Link href="#dog2">Snack cho chó</Nav.Link></li>
                                <li><Nav.Link href="#dog3">Đồ chơi cho chó</Nav.Link></li>
                            </ul>
                        </div>

                        <div className="nav-item-wrapper">
                            <Nav.Link href="/productpage" className="nav-item">SẢN PHẨM CHO MÈO</Nav.Link>
                            <ul className="sub-menu">
                                <li><Nav.Link href="#cat1">Hạt cho mèo</Nav.Link></li>
                                <li><Nav.Link href="#cat2">Đồ chơi cho mèo</Nav.Link></li>
                                <li><Nav.Link href="#cat3">Snack cho mèo</Nav.Link></li>
                            </ul>
                        </div>

                        <Nav.Link className="nav-item" href="/promo-product">KHUYẾN MÃI</Nav.Link>
                        <Nav.Link className="nav-item" href="/services">DỊCH VỤ</Nav.Link>
                    </Nav>

                    <Form className="search-form" onSubmit={handleSearch}>
                        <FormControl
                            type="search"
                            placeholder="Tìm kiếm sản phẩm..."
                            className="search-input"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Button variant="outline-light" className="search-button" type="submit">Tìm</Button>
                    </Form>

                    <Nav className="header-icons">
                        <Nav.Link href="/login" className="icon">
                            <FontAwesomeIcon icon={faUserAlt} />
                        </Nav.Link>
                        <Nav.Link href="/cart" className="icon">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
