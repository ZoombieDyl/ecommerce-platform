import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div
          style={{
            backgroundColor: 'rgba(255, 250, 235, 0.9)',
            border: '1px solid #d2b48c',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            maxWidth: '1100px',
            margin: '2rem auto'
          }}
        >
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #ccc',
                paddingBottom: '1rem',
                marginBottom: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '60px', marginRight: '1rem' }}
                />
                <div>
                  <h4 style={{ marginBottom: '4px' }}>{item.name}</h4>
                  <p style={{ margin: 0 }}>${item.price.toFixed(2)} x {item.quantity || 1}</p>
                </div>
              </div>
              <select
                value={item.quantity || 1}
                onChange={(e) => {
                  const qty = parseInt(e.target.value);
                  item.quantity = qty;
                }}
              >
                {[...Array(10).keys()].map((n) => (
                  <option key={n + 1} value={n + 1}>
                    {n + 1}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <div style={{ marginTop: '2rem' }}>
            <p><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>
            <p><strong>Taxes (7%):</strong> ${tax.toFixed(2)}</p>
            <p><strong>Total:</strong> ${total.toFixed(2)}</p>
          </div>

          <button
            style={{
              marginTop: '1.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'green',
              color: 'white',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
