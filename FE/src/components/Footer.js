import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Footer.css'; // Import CSS cho Footer

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={3}>
                        <h5>Về Chúng Tôi</h5>
                        <p>PetPal chuyên cung cấp sản phẩm và dịch vụ tốt nhất cho thú cưng. Chúng tôi luôn đặt sức khỏe và hạnh phúc của thú cưng lên hàng đầu.</p>
                    </Col>
                    <Col md={3}>
                        <h5>Liên Kết Nhanh</h5>
                        <ul className="footer-links">
                            <li><a href="/">Trang Chủ</a></li>
                            <li><a href="/products">Sản Phẩm</a></li>
                            <li><a href="/contact">Liên Hệ</a></li>
                            <li><a href="/news">Tin Tức</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>FANPAGE</h5>
                        <div className="social-icons">
                        <div class="fb-page" data-href="https://www.facebook.com/profile.php?id=61567398533417" data-tabs="timeline" data-width="120" data-height="80" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/profile.php?id=61567398533417" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/profile.php?id=61567398533417">PetPal</a></blockquote></div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <h5>Đăng Ký Nhận Tin</h5>
                        <Form className="newsletter-form">
                            <Form.Group controlId="formEmail">
                                <Form.Control type="email" placeholder="Nhập email của bạn" />
                            </Form.Group>
                            <Button variant="primary" type="submit">Đăng Ký</Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <p className="copyright">© 2024 PetPal - Bản quyền thuộc về PetPal</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
