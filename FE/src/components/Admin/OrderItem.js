// frontend/src/OrderItem.js
import React from 'react';

function OrderItem({ orders }) { // Đổi từ order thành orders
  const updateStatus = (status) => {
    fetch(`/orders/${orders.order_id}`, { // Sửa từ order thành orders
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        window.location.reload();
      })
      .catch(error => console.error('Error updating status:', error));
  };

  return (
    <tr>
      <td>{orders.order_id}</td> {/* Sửa từ order thành orders */}
      <td>{orders.users_name}</td> {/* Sửa từ order thành orders */}
      <td>{orders.phone}</td> {/* Sửa từ order thành orders */}
      <td>{orders.address}</td> {/* Sửa từ order thành orders */}
      <td>{orders.product_code}</td> {/* Sửa từ order thành orders */}
      <td>{orders.product_name}</td> {/* Sửa từ order thành orders */}
      <td>{orders.quantity}</td> {/* Sửa từ order thành orders */}
      <td>{orders.price} VND</td> {/* Sửa từ order thành orders */}
      <td>{orders.purchase_date}</td> {/* Sửa từ order thành orders */}
      <td>{orders.status}</td> {/* Sửa từ order thành orders */}
      <td>
        <button onClick={() => updateStatus('preparing')}>Chuẩn bị</button>
        <button onClick={() => updateStatus('sent')}>Đã gửi</button>
        <button onClick={() => updateStatus('completed')}>Hoàn thành</button>
        <button onClick={() => updateStatus('canceled')}>Hủy bỏ</button>
      </td>
    </tr>
  );
}

export default OrderItem;
