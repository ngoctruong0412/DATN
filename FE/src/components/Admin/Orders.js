import React, { useEffect, useState } from 'react';
function OrderList() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  // Fetching orders data from the API
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/orders');
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Orders data:', data); // Kiểm tra dữ liệu nhận được
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError('Lỗi khi tải danh sách đơn hàng. Vui lòng thử lại sau.');
      }
    };

    fetchOrders();
  }, []);

  const updateStatus = async (orderId, status) => {
    try {
      const response = await fetch(`/orders/${orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to update order status: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      alert(data.message);
      
      // Cập nhật lại trạng thái đơn hàng trong danh sách
      setOrders(prevOrders => 
        prevOrders.map(order => 
          order.order_id === orderId ? { ...order, status } : order
        )
      );
    } catch (error) {
      console.error('Error updating order status:', error);
      alert('Lỗi khi cập nhật trạng thái đơn hàng. Vui lòng thử lại sau.');
    }
  };

  return (
    <div>
      <h1>Danh sách đơn hàng</h1>
      {error && <p className="error">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên khách hàng</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Giá</th>
            <th>Ngày mua</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.order_id}>
              <td>{order.order_id}</td>
              <td>{order.customer_name}</td>
              <td>{order.phone}</td>
              <td>{order.address}</td>
              <td>{order.product_code}</td>
              <td>{order.product_name}</td>
              <td>{order.quantity}</td>
              <td>{order.price} VND</td>
              <td>{order.purchase_date}</td>
              <td>{order.status}</td>
              <td className="btn-group">
                <button className="btn-preparing" onClick={() => updateStatus(order.order_id, 'preparing')}>Chuẩn bị</button>
                <button className="btn-sent" onClick={() => updateStatus(order.order_id, 'sent')}>Đã gửi</button>
                <button className="btn-completed" onClick={() => updateStatus(order.order_id, 'completed')}>Hoàn thành</button>
                <button className="btn-canceled" onClick={() => updateStatus(order.order_id, 'canceled')}>Hủy bỏ</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;
