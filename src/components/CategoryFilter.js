import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import CategoryFilter from '../components/CategoryFilter';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div>
      <h1>Welcome to Our Store</h1>
      <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <ProductList selectedCategory={selectedCategory} />
    </div>
  );
};

export default HomePage;
