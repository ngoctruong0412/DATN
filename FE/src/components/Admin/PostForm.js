// src/components/Admin/PostForm.js

import React, { useState, useEffect } from 'react';

const PostForm = ({ onSubmit, post, setEditingPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setImage(null); // Reset image when editing
    } else {
      setTitle('');
      setContent('');
      setImage(null);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    onSubmit(formData); // Gửi formData lên server
    setEditingPost(null);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Lưu tệp hình ảnh được chọn
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
      <h2 className="mb-4">{post ? 'Cập nhật bài viết' : 'Thêm bài viết'}</h2>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Tiêu đề</label>
        <input
          type="text"
          id="title"
          className="form-control"
          placeholder="Nhập tiêu đề"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">Nội dung</label>
        <textarea
          id="content"
          className="form-control"
          placeholder="Nhập nội dung"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">Tải ảnh</label>
        <input
          type="file"
          id="image"
          className="form-control"
          accept="image/*"
          onChange={handleImageChange} // Xử lý thay đổi tệp hình ảnh
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {post ? 'Cập nhật' : 'Thêm bài viết'}
      </button>
    </form>
  );
};

export default PostForm;
