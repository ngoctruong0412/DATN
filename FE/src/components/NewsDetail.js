import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/NewsDetail.css'; 

// Import ảnh
import image1 from '../img/image1.jpg';
import image2 from '../img/image2.jpg';
import image3 from '../img/image3.jpg';
import image4 from '../img/image4.jpg';
import image5 from '../img/image5.jpg';

const NewsDetail = () => {
  const { id } = useParams();

  const newsData = [
    { id: 1, title: 'Chó póc', content: 'Chó phốc hay chó Fox hay là chó Miniature Pinscher là một giống chó, có nguồn gốc ở Đức, được lai tạo từ giống chó sục và German Pinscher. Trong lịch sử, chó Phốc được sử dụng để săn chuột vì kích thước nhỏ gọn và sự nhanh nhẹn của nó. Ngày nay, với tính cách tình cảm và thông minh nên chúng đã trở thành một trong những loài chó được yêu quý trong các gia đình. Sự ưu điểm của chó Phốc được thể hiện trong các công việc liên quan đến canh gác, các cuộc thi thố cần có sự nhanh nhẹn.', image: image1 },
    { id: 2, title: 'Mèo Anh', content: 'Mèo Anh lông dài là phiên bản có bộ lông dài hơn, phát triển từ giống mèo Anh lông ngắn lâu đời. Vào giữa thế kỷ 20, mèo Anh lông ngắn được lai giống với các loại lông dài khác, như mèo Angora Thổ Nhĩ Kỳ và mèo Ba Tư truyền thống. Giống mèo này nổi bật với chiếc đầu tròn cùng đôi mắt sáng long lanh và tai ngắn hình tam giác dựng thẳng. Thân hình chắc nịch, bốn chân ngắn nhưng vô cùng khỏe cùng chiếc đuôi dài và rậm lông.', image: image2 },
    { id: 3, title: 'Mèo Pháp', content: 'Mèo Munchkin, hay còn được biết đến với cái tên mèo Xúc xích, là một giống mèo khá mới với đặc điểm độc đáo là đôi chân rất ngắn do đột biến gen. Munchkin được coi là giống mèo lùn, với tạng người vừa phải và bộ lông trung bình. Đực thường nặng từ 6 đến 9 pound (3 – 4 kg), lớn hơn so với Munchkin cái, nặng từ 4 đến 8 pound (2 – 3,6 kg). Chân sau có thể hơi dài hơn chút so với chân trước, tạo nên phần cơ thể từ vai đến mông hơi nhô lên. Mặc dù chân có thể hơi cong, nhưng chân cong quá mức sẽ bị phạt.', image: image3 },
    { id: 4, title: 'Chó Alaska', content: 'Alaska (/əˈlæskə/ ⓘ) là một tiểu bang của Hoa Kỳ, nằm tại đầu tây bắc của lục địa Bắc Mỹ. Alaska giáp với hai tỉnh Yukon và British Columbia của Canada ở phía đông, giáp với Bắc Băng Dương ở phía bắc, và giáp với Thái Bình Dương ở phía tây và phía nam, đối diện với Nga qua eo biển Bering. Alaska là bang có diện tích lớn nhất trong 50 bang, ít dân thứ tư và thưa dân nhất tại Hoa Kỳ (do phần lớn diện tích nằm trong vùng cực Bắc). Xấp xỉ một nửa trong số 731.449[3] cư dân của Alaska sống trong vùng đô thị Anchorage. Chiếm vị thế chi phối trong nền kinh tế của Alaska là các ngành dầu mỏ, khí thiên nhiên, và ngư nghiệp, cũng là những tài nguyên mà Alaska có trữ lượng phong phú. Du lịch cũng là một thành phần quan trọng của nền kinh tế bang.', image: image4 },
    { id: 5, title: 'Mèo Ba Tư ', content: 'Mèo Ba Tư là giống mèo lông dài, có khuôn mặt tròn và mõm ngắn, còn được gọi là “Mèo Ba Tư lông dài” tại các quốc gia nói tiếng Anh. Nó quy chuẩn theo các cuộc thi sẽ có bộ lông cực dài và dày, chân ngắn, đầu rộng với đôi tai cách xa nhau, đôi mắt to và mõm cực ngắn. Ban đầu có mõm ngắn, nhưng theo thời gian, đặc điểm này đã trở nên cực kỳ cường điệu, đặc biệt là ở Bắc Mỹ', image: image5 },
  ];

  const news = newsData.find((n) => n.id === parseInt(id));

  return (
    <div className="news-detail">
      {news ? (
        <>
          <h2>{news.title}</h2>
          <img src={news.image} alt={news.title} style={{ width: '100%', height: 'auto' }} />
          <p>{news.content}</p>
        </>
      ) : (
        <p>Không tìm thấy tin tức.</p>
      )}
    </div>
  );
};

export default NewsDetail;
