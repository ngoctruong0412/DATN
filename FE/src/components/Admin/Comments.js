import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Paper } from '@mui/material';

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('/api/comments')
      .then(response => setComments(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (comment_id) => {
    axios.delete(`/api/comments/${comment_id}`)
      .then(() => setComments(comments.filter(comment => comment.comment_id !== comment_id)))
      .catch(error => console.error(error));
  };

  return (
    <Paper style={{ padding: '20px' }}>
      <h2>Quản lý Bình luận</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Người dùng</TableCell>
            <TableCell>Nội dung</TableCell>
            <TableCell>Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {comments.map(comment => (
            <TableRow key={comment.comment_id}>
              <TableCell>{comment.comment_id}</TableCell>
              <TableCell>{comment.user}</TableCell>
              <TableCell>{comment.content}</TableCell>
              <TableCell>
                <Button color="primary">Chi tiết</Button>
                <Button color="secondary" onClick={() => handleDelete(comment.comment_id)}>Xóa</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default Comments;
