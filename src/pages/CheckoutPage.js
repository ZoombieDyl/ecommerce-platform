import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxRate = 0.07;
  const taxes = subtotal * taxRate;
  const total = subtotal + taxes;

  const formatCurrency = (amount) =>
    amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  const handleCheckout = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    const order = {
      items: cart.map((item) => ({
        productId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image
      })),
      total: Number(total.toFixed(2))
    };

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`
        },
        body: JSON.stringify(order)
      });

      if (!res.ok) throw new Error('Order failed');
      const saved = await res.json();
      localStorage.setItem('orderItems', JSON.stringify(saved));
      clearCart();
      navigate('/order-confirmation');
    } catch (err) {
      console.error('Checkout error:', err);
      alert('Checkout failed');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            padding: '1.5rem',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)'
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f3e9d2' }}>
                <th style={thStyle}>Image</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Price</th>
                <th style={thStyle}>Quantity</th>
                <th style={thStyle}>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td style={tdStyle}>
                    <img
                      src={item.image || '/placeholder.png'}
                      alt={item.name}
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                  </td>
                  <td style={tdStyle}>{item.name}</td>
                  <td style={tdStyle}>{formatCurrency(item.price)}</td>
                  <td style={tdStyle}>{item.quantity}</td>
                  <td style={tdStyle}>{formatCurrency(item.price * item.quantity)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ textAlign: 'right', marginTop: '2rem' }}>
            <p>Subtotal: <strong>{formatCurrency(subtotal)}</strong></p>
            <p>Taxes (7%): <strong>{formatCurrency(taxes)}</strong></p>
            <p>Total: <strong>{formatCurrency(total)}</strong></p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <button
              onClick={handleCheckout}
              style={{
                marginTop: '1.5rem',
                padding: '1rem 2rem',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const thStyle = {
  textAlign: 'left',
  padding: '12px',
  borderBottom: '2px solid #ccc'
};

const tdStyle = {
  padding: '12px',
  borderBottom: '1px solid #eee',
  verticalAlign: 'middle'
};

export default CheckoutPage;
