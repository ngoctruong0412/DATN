import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Paper } from '@mui/material';

function AppointmentsForm() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('/api/appointments')
      .then(response => setAppointments(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (promo_id) => {
    axios.delete(`/api/appointments/${promo_id}`)
      .then(() => setAppointments(appointments.filter(appointment => appointment.promo_id !== promo_id)))
      .catch(error => console.error(error));
  };

  return (
    <Paper style={{ padding: '20px' }}>
      <h2>Quản lý Đặt lịch</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Khách hàng</TableCell>
            <TableCell>Ngày đặt</TableCell>
            <TableCell>Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map(appointment => (
            <TableRow key={appointment.promo_id}>
              <TableCell>{appointment.promo_id}</TableCell>
              <TableCell>{appointment.customer}</TableCell>
              <TableCell>{appointment.date}</TableCell>
              <TableCell>
                <Button color="primary">Chi tiết</Button>
                <Button color="secondary" onClick={() => handleDelete(appointment.promo_id)}>Xóa</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default AppointmentsForm;
