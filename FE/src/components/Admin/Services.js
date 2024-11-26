import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Paper } from '@mui/material';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('/api/services')
      .then(response => setServices(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (service_id) => {
    axios.delete(`/api/services/${service_id}`)
      .then(() => setServices(services.filter(service => service.service_id !== service_id)))
      .catch(error => console.error(error));
  };

  return (
    <Paper style={{ padding: '20px' }}>
      <h2>Quản lý Dịch vụ</h2>
      <Button variant="contained" color="primary" style={{ marginBottom: '10px' }}>Thêm Dịch vụ</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Tên Dịch vụ</TableCell>
            <TableCell>Giá</TableCell>
            <TableCell>Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {services.map(service => (
            <TableRow key={service.service_id}>
              <TableCell>{service.service_id}</TableCell>
              <TableCell>{service.name}</TableCell>
              <TableCell>{service.price}</TableCell>
              <TableCell>
                <Button color="primary">Sửa</Button>
                <Button color="secondary" onClick={() => handleDelete(service.service_id)}>Xóa</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default Services;
