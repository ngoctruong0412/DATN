// src/components/Contact.js
import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.2613286541305!2d108.16720347465616!3d16.051923239901875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142191686b4d0a7%3A0x77c8a107ad9ffd37!2zMTE2IE5ndXnhu4VuIEh1eSBUxrDhu59uZywgSG_DoCBBbiwgTGnDqm4gQ2hp4buDdSwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1728964073364!5m2!1sen!2s"
          width="680"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="info-container">
        <h2>Liên hệ</h2>
        <p><strong>Địa chỉ chúng tôi:</strong> 116 Nguyễn Huy Tưởng</p>
        <p><strong>Email:</strong> petpalshop@gmail.com</p>
        <p><strong>Điện thoại:</strong> 0898 4237 40</p>
        <p><strong>Thời gian làm việc:</strong> Tất cả các ngày trong tuần từ 9h30 - 21h30</p>

        <h3>Gửi thắc mắc cho chúng tôi</h3>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Tên của bạn" required />
          <input type="email" name="email" placeholder="Email của bạn" required />
          <textarea name="message" rows="5" placeholder="Nội dung thắc mắc" required></textarea>
          <button type="submit">Gửi</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
