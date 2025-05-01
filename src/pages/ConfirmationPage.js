import React from 'react';

const ConfirmationPage = () => {
  const order = JSON.parse(localStorage.getItem('orderItems'));
  const items = order?.items || [];
  const orderNumber = order?.orderNumber || order?._id?.slice(-6) || 'N/A';

  return (
    <div style={{ padding: '2rem' }}>
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          padding: '2rem',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          maxWidth: '700px',
          margin: '0 auto'
        }}
      >
        <h1 style={{ marginBottom: '1rem' }}>Order Confirmation</h1>
        <p><strong>Order #: </strong>{orderNumber}</p>

        <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', marginBottom: '2rem' }}>
          {items.map((item, idx) => (
            <li key={idx}>
              {item.name} — {item.quantity} unit{item.quantity > 1 ? 's' : ''}
            </li>
          ))}
        </ul>

        <p>Thank you for your purchase! Your order is being processed.</p>
      </div>
    </div>
  );
};

export default ConfirmationPage;
