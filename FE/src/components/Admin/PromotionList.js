import React from 'react';

const PromotionList = ({ promotions = [], onEdit, onDelete }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('vi-VN'); // Định dạng ngày/tháng/năm
  };

  return (
    <div>
      {promotions.length > 0 ? (
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Tiêu đề</th>
              <th>Giảm giá (%)</th>
              <th>Mô tả</th>
              <th>Ngày bắt đầu</th>
              <th>Ngày kết thúc</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {promotions.map((promo, index) => (
              <tr key={promo.promo_id}>
                <td>{index + 1}</td>
                <td>{promo.title}</td>
                <td>{promo.discount}%</td>
                <td>{promo.description}</td>
                <td>{formatDate(promo.start_date)}</td>
                <td>{formatDate(promo.end_date)}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => onEdit(promo)}
                  >
                    Sửa
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(promo.promo_id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Hiện không có chương trình khuyến mãi nào.</p>
      )}
    </div>
  );
};

export default PromotionList;
