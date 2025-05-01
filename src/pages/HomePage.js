import React from 'react';
import ProductList from '../components/ProductList';

const HomePage = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '1.5rem',
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '1rem',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        }}
      >
        <h1>Welcome to the Potion Seller's Emporium</h1>
      </div>
      <ProductList />
    </div>
  );
};

export default HomePage;
