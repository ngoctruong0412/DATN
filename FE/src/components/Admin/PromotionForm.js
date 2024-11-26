import React, { useState, useEffect } from 'react';

const PromotionForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    title: '',
    discount: '',
    description: '',
    start_date: '',
    end_date: '',
  });

  useEffect(() => {
    if (initialData) {
      // Khi nhận được dữ liệu từ props, cập nhật form
      setFormData({
        ...initialData,
        start_date: new Date(initialData.start_date).toISOString().split('T')[0], // Chuyển định dạng ISO cho input type="date"
        end_date: new Date(initialData.end_date).toISOString().split('T')[0],
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Tiêu đề</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Giảm giá (%)</label>
        <input
          type="number"
          name="discount"
          className="form-control"
          value={formData.discount}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Mô tả</label>
        <textarea
          name="description"
          className="form-control"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Ngày bắt đầu</label>
        <input
          type="date"
          name="start_date"
          className="form-control"
          value={formData.start_date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Ngày kết thúc</label>
        <input
          type="date"
          name="end_date"
          className="form-control"
          value={formData.end_date}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-success">Lưu</button>
    </form>
  );
};

export default PromotionForm;
