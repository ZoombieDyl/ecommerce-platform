import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [viewMode, setViewMode] = useState('gallery');

  useEffect(() => {
    const API_BASE = process.env.REACT_APP_API_URL;
  
    fetch(`${API_BASE}/api/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Failed to fetch products:', err));
  }, []);
  

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortOption === 'price-asc') return a.price - b.price;
      if (sortOption === 'price-desc') return b.price - a.price;
      if (sortOption === 'rating') return (b.rating || 0) - (a.rating || 0);
      return 0;
    });

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div style={{ margin: '0 20px' }}>
      {/* Search + Filter */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
          marginBottom: '1rem'
        }}
      >
        <SearchBar onSearch={setSearchQuery} />
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* View and Sort Controls */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <div>
          <label>View: </label>
          <button onClick={() => setViewMode('gallery')}>🟦 Gallery</button>
          <button onClick={() => setViewMode('list')}>📄 List</button>
        </div>

        <div>
          <label>Sort by: </label>
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="">-- None --</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Product List */}
      <div
        className={viewMode === 'gallery' ? 'product-list gallery' : 'product-list list'}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          padding: '1rem',
          borderRadius: '12px',
          boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)'
        }}
      >
        {viewMode === 'list' && (
          <div className="product-header">
            <span className="col-img" style={{ width: '60px' }}></span>
            <span className="col-name">Name</span>
            <span className="col-price">Price</span>
            <span className="col-rating">Rating</span>
            <span className="col-action">Action</span>
          </div>
        )}

        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} viewMode={viewMode} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
