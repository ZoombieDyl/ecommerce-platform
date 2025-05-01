import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CartPage = () => {
  const { cart, updateQuantity } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxRate = 0.07;
  const taxes = subtotal * taxRate;
  const total = subtotal + taxes;

  const formatCurrency = (amount) =>
    amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  const handleCheckout = () => {
    if (!user) {
      toast.info('Please log in to proceed to checkout.', {
        position: 'bottom-right',
        autoClose: 2000
      });
      navigate('/login');
    } else {
      navigate('/checkout');
    }
  };

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
    if (newQuantity === 0) {
      toast.success('Item removed from cart', {
        position: 'bottom-right',
        autoClose: 1000
      });
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Shopping Cart</h2>
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
                  <td style={tdStyle}>
                    <select
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item._id, Number(e.target.value))}
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                      <option value={0}>Remove</option>
                    </select>
                  </td>
                  <td style={tdStyle}>{formatCurrency(item.price * item.quantity)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals */}
          <div style={{ textAlign: 'right', marginTop: '2rem' }}>
            <p>Subtotal: <strong>{formatCurrency(subtotal)}</strong></p>
            <p>Taxes (7%): <strong>{formatCurrency(taxes)}</strong></p>
            <p>Total: <strong>{formatCurrency(total)}</strong></p>
          </div>

          {/* Checkout Button */}
          <div style={{ textAlign: 'right' }}>
            <button
              onClick={handleCheckout}
              style={{
                marginTop: '1.5rem',
                padding: '1rem 2rem',
                backgroundColor: 'green',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Proceed to Checkout
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

export default CartPage;
