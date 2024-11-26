import React, { useState, useEffect } from 'react';

const ProductForm = ({ onSubmit, editingProduct, categories }) => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    start_date: '',
    end_date: '',
    category: '' // Thêm danh mục
  });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (editingProduct) {
      setForm({
        name: editingProduct.name || '',
        description: editingProduct.description || '',
        price: editingProduct.price || '',
        quantity: editingProduct.quantity || '',
        start_date: editingProduct.start_date || '',
        end_date: editingProduct.end_date || '',
        category: editingProduct.category || '' // Gán danh mục nếu đang chỉnh sửa
      });
      setImageFile(null);
    }
  }, [editingProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('description', form.description);
    formData.append('price', form.price);
    formData.append('quantity', form.quantity);
    formData.append('start_date', form.start_date);
    formData.append('end_date', form.end_date);
    formData.append('category', form.category); // Thêm danh mục

    if (imageFile) {
      formData.append('image', imageFile);
    } else if (editingProduct && editingProduct.image) {
      formData.append('existingImage', editingProduct.image);
    }

    onSubmit(formData);

    // Reset form nếu thêm sản phẩm thành công
    setForm({
      name: '',
      description: '',
      price: '',
      quantity: '',
      start_date: '',
      end_date: '',
      category: ''
    });
    setImageFile(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <label>Tên sản phẩm</label>
        <input
          type="text"
          className="form-control"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label>Mô tả</label>
        <textarea
          className="form-control"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label>Giá</label>
        <input
          type="number"
          className="form-control"
          value={form.price}
          min="0"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label>Số lượng</label>
        <input
          type="number"
          className="form-control"
          value={form.quantity}
          min="0"
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
      <label>Danh mục</label>
        <select
          className="form-control"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          required
        >
          <option value="">Chọn danh mục</option>
          {categories.length > 0
            ? categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))
            : null}
        </select>
      </div>
      <div className="form-group">
        <label>Ngày sản xuất</label>
        <input
          type="date"
          className="form-control"
          value={form.start_date}
          onChange={(e) => setForm({ ...form, start_date: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label>Ngày hết hạn</label>
        <input
          type="date"
          className="form-control"
          value={form.end_date}
          onChange={(e) => setForm({ ...form, end_date: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Hình ảnh</label>
        <input
          type="file"
          className="form-control"
          onChange={(e) => setImageFile(e.target.files[0])}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        {editingProduct ? 'Cập nhật' : 'Thêm'} sản phẩm
      </button>
    </form>
  );
};

export default ProductForm;
