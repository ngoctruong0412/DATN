// src/App.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostForm from './PostForm';
import PostList from './PostList';
import 'bootstrap/dist/css/bootstrap.min.css';
function Post() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await axios.get('http://localhost:5000/api/posts');
    setPosts(response.data);
  };

  const handleAddOrUpdatePost = async (post) => {
    if (editingPost) {
      await axios.put(`http://localhost:5000/api/posts/${editingPost.post_id}`, {
        ...post,
        updated_at: new Date().toISOString().slice(0, 10),
      });
    } else {
      await axios.post('http://localhost:5000/api/posts', {
        ...post,
        created_at: new Date().toISOString().slice(0, 10),
        updated_at: new Date().toISOString().slice(0, 10),
        author_id: 1, // Thay đổi theo yêu cầu
        blog_category_id: 1 // Thay đổi theo yêu cầu
      });
    }
    setEditingPost(null);
    fetchPosts();
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
  };

  const handleDeletePost = async (id) => {
    await axios.delete(`http://localhost:5000/api/posts/${id}`);
    fetchPosts();
  };

  return (
    <div className="App">
      <h1>Blog Posts</h1>
      <PostForm onSubmit={handleAddOrUpdatePost} post={editingPost} setEditingPost={setEditingPost} />
      <PostList posts={posts} onEdit={handleEditPost} onDelete={handleDeletePost} />
    </div>
  );
}

export default Post;
