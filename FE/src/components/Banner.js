import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/Baner.css'; // CSS cho banner

// Import hình ảnh banner từ folder img
import banner1 from '../assest/Banner/baner1.webp';
import banner2 from '../assest/Banner/baner2.webp';
import banner3 from '../assest/Banner/baner3.jpg';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                   
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                   
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                   
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
