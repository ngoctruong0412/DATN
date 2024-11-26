import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';

function Dashboard() {
  return (
    <div>
      <Typography variant="h4">Dashboard</Typography>
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper style={{ padding: '20px' }}>Doanh thu</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper style={{ padding: '20px' }}>Đơn hàng mới</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper style={{ padding: '20px' }}>Sản phẩm bán</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper style={{ padding: '20px' }}>Dịch vụ cung cấp</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
