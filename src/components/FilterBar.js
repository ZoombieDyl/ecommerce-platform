import React from 'react';

const FilterBar = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="filter-bar">
      <select value={selectedCategory} onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;