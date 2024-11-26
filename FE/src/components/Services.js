import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Services.css'; // Import a custom CSS file

const Services = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Dịch Vụ PetPal</h2>

      {/* Phần dịch vụ Khách sạn cho mèo */}
      <div className="row mb-5">
        <div className="col-md-6">
          <div className="card">
            <img
              src="https://fagopet.vn/tassets/images/vkdj25ze38678tahx6rkzfe4d0y0.webp"
              alt="Khách sạn cho mèo"
              className="img-fluid card-img-top"
            />
            <div className="card-body">
              <h3 className="card-title">Khách sạn cho mèo</h3>
              <p className="card-text">
                Dịch vụ khách sạn cho mèo của chúng tôi cung cấp không gian thoải mái và an toàn cho mèo của bạn. Với phòng ốc thoáng mát, sạch sẽ, cùng với sự chăm sóc tận tình từ đội ngũ nhân viên giàu kinh nghiệm.
              </p>
              <p className="card-text">
                Các dịch vụ bao gồm: ăn uống, chơi đùa, theo dõi sức khỏe hàng ngày và chăm sóc vệ sinh cho mèo yêu của bạn.
              </p>
              <button className="btn btn-primary">Đặt chỗ ngay</button>
            </div>
          </div>
        </div>
        
        {/* Phần dịch vụ Spa-Grooming */}
        <div className="col-md-6">
          <div className="card">
            <img
              src="https://fagopet.vn/uploads/images/631780319487f617f236dcb8/dich-vu-tam-cho-meo-o-tphcm__2_.webp"
              alt="Spa-Grooming"
              className="img-fluid card-img-top"
            />
            <div className="card-body">
              <h3 className="card-title">Spa-Grooming</h3>
              <p className="card-text">
                Dịch vụ spa-grooming giúp thú cưng của bạn trở nên xinh đẹp và khỏe mạnh hơn. Chúng tôi cung cấp các gói chăm sóc toàn diện bao gồm tắm rửa, cắt tỉa lông, và làm sạch tai, móng cho thú cưng.
              </p>
              <p className="card-text">
                Chúng tôi sử dụng các sản phẩm chăm sóc da và lông cao cấp, cùng với thiết bị hiện đại, đảm bảo thú cưng của bạn sẽ được thư giãn tối đa.
              </p>
              <button className="btn btn-primary">Đặt lịch ngay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
