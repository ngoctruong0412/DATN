import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/UserNews.css';

// Import ảnh
import image1 from '../img/image1.jpg';
import image2 from '../img/image2.jpg';
import image3 from '../img/image3.jpg';
import image4 from '../img/image4.jpg';
import image5 from '../img/image5.jpg';

const UserNews = () => {
  const newsData = [
    { id: 1, title: 'Chó Póc', content: 'Chó phốc hay chó Fox hay là chó Miniature Pinscher ', image: image1 },
    { id: 2, title: 'Mèo Anh', content: 'Mèo Anh lông ngắn (British Shorthair, mèo Aln)', image: image2 },
    { id: 3, title: 'Mèo pháp', content: 'Mèo Anh lông ngắn (British Shorthair)', image: image3 },
    { id: 4, title: 'Chó alaska', content: 'Chó Mật Alaska', image: image4 },
    { id: 5, title: 'Mèo Ba Tư', content: 'Mèo Ba Tư là giống mèo lông dài', image: image5 },
  ];

  return (
    <div className="user-news">
      <h1 className="news-title">Tin Tức</h1>
      {newsData.map((news) => (
        <div className="news-item" key={news.id}>
          <img
            src={news.image}
            alt={news.title}
            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
          />
          <div className="news-content">
            <h3>{news.title}</h3>
            <p>{news.content}</p>
            <Link to={`/news/${news.id}`}>Xem Chi Tiết</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserNews;
