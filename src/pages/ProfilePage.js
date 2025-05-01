// src/pages/ProfilePage.js
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';

const ProfilePage = () => {
  const { user, logout } = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch('/api/orders', {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        });
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.error('Failed to load orders:', err);
      }
    };

    if (user) fetchOrders();
  }, [user]);

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '2rem', borderRadius: '12px', boxShadow: '0 0 10px rgba(0,0,0,0.2)', maxWidth: '1100px', margin: '0 auto' }}>
        <h2>Profile</h2>
        <p><strong>Username:</strong> {user?.username}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <button onClick={logout} style={{ marginBottom: '1rem' }}>Logout</button>

        <h3>Order History</h3>
        <div style={{ overflowX: 'auto' }}>
          <table
            style={{
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderCollapse: 'collapse',
              borderRadius: '8px',
              overflow: 'hidden',
              marginTop: '1rem'
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#f3e9d2' }}>
                <th style={thStyle}>Order #</th>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Items</th>
                <th style={thStyle}>Total (GP)</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td style={tdStyle}>{order.orderNumber || order._id.slice(-6)}</td>
                  <td style={tdStyle}>{new Date(order.createdAt).toLocaleString()}</td>
                  <td style={tdStyle}>
                    <ul style={{ paddingLeft: '1rem', margin: 0 }}>
                      {order.items.map((item, idx) => (
                        <li key={idx}>{item.name} × {item.quantity} — {item.price} GP</li>
                      ))}
                    </ul>
                  </td>
                  <td style={tdStyle}>{order.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const thStyle = {
  padding: '10px',
  textAlign: 'left',
  borderBottom: '2px solid #ccc'
};

const tdStyle = {
  padding: '10px',
  verticalAlign: 'top',
  borderBottom: '1px solid #eee'
};

export default ProfilePage;
