// src/components/Admin/PostList.js

import React, { useState } from 'react';

const PostList = ({ posts, onEdit, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Tính toán chỉ số của các bài viết để hiển thị trên trang hiện tại
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Thay đổi trang
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Tính toán tổng số trang
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="mt-4">
      <h2>Danh sách bài viết</h2>
      <ul className="list-group">
        {currentPosts.map((post) => (
          <li key={post.post_id} className="list-group-item">
            <h5>{post.title}</h5>
            <img src={post.image_url} alt={post.title} className="img-fluid" />
            <p>{post.content}</p>
            <small>{post.created_at}</small>
            <button onClick={() => onEdit(post)} className="btn btn-warning btn-sm m-1">Sửa</button>
            <button onClick={() => onDelete(post.post_id)} className="btn btn-danger btn-sm m-1">Xóa</button>
          </li>
        ))}
      </ul>

      {/* Phân trang */}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default PostList;
