import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, viewMode }) => {
  const { addToCart } = useContext(CartContext);
  const [rating, setRating] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    fetch(`/api/reviews/${product._id}`)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          const avg = data.reduce((sum, r) => sum + r.rating, 0) / data.length;
          setRating(avg);
          setReviewCount(data.length);
        }
      });
  }, [product._id]);

  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;
  const ratingDisplay = rating.toFixed(1);

  if (viewMode === 'list') {
    return (
      <div className="product-row">
        <img
          src={product.image}
          alt={product.name}
          className="list-img"
          style={{ width: '60px' }}
        />
        <span className="col-name">
          <Link to={`/product/${product._id}`}>{product.name}</Link>
        </span>
        <span className="col-price">{product.price.toFixed(2)} GP</span>
        <span className="col-rating">
          {'★'.repeat(filledStars)}{'☆'.repeat(emptyStars)} ({ratingDisplay})
        </span>
        <span className="col-action">
          <button className="btn-click" onClick={() => addToCart(product)}>
            Add
          </button>
        </span>
      </div>
    );
  }

  // Gallery view
  return (
    <div className="product-card gallery">
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            maxHeight: '160px',
            objectFit: 'contain',
            padding: '10px',
            boxSizing: 'border-box'
          }}
        />
        <div className="product-details" style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '10px' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: 0 }}>
            <Link to={`/product/${product._id}`}>{product.name}</Link>
          </h3>
          <p style={{ margin: 0 }}>{product.price.toFixed(2)} GP</p>
          <div style={{ margin: 0 }}>
            {'★'.repeat(filledStars)}{'☆'.repeat(emptyStars)} <span>({ratingDisplay})</span>
          </div>
          <button className="btn-click" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
    </div>
  );
};

export default ProductCard;
