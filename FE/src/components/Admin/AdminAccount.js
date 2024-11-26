import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Paper } from '@mui/material';

function AdminAccounts() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    axios.get('/api/admin-accounts')
      .then(response => setAdmins(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/admin-accounts/${id}`)
      .then(() => setAdmins(admins.filter(admin => admin.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <Paper style={{ padding: '20px' }}>
      <h2>Quản lý Tài khoản Admin</h2>
      <Button variant="contained" color="primary" style={{ marginBottom: '10px' }}>Thêm Tài khoản Admin</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Tên</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {admins.map(admin => (
            <TableRow key={admin.id}>
              <TableCell>{admin.id}</TableCell>
              <TableCell>{admin.name}</TableCell>
              <TableCell>{admin.email}</TableCell>
              <TableCell>
                <Button color="primary">Sửa</Button>
                <Button color="secondary" onClick={() => handleDelete(admin.id)}>Xóa</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default AdminAccounts;
