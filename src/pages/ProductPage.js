import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const ProductPage = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext);

  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });

  useEffect(() => {
    fetch(`/api/products`)
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p._id === id);
        setProduct(found);
      });

    fetch(`/api/reviews/${id}`)
      .then(res => res.json())
      .then(setReviews);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      },
      body: JSON.stringify({ productId: id, ...newReview })
    });

    if (res.ok) {
      const posted = await res.json();
      setReviews((prev) => [...prev, posted]);
      setNewReview({ rating: 5, comment: '' });
    }
  };

  if (!product) return <p>Loading...</p>;

  const avgRating = reviews.length
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : 0;

  return (
    <div style={{ padding: '2rem' }}>
      <div
        style={{
          display: 'flex',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          maxWidth: '900px',
          margin: '0 auto',
          gap: '2rem',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}
      >
        {/* Left: Info */}
        <div style={{ flex: '1 1 300px' }}>
          <h1 style={{ marginBottom: '0.5rem' }}>{product.name}</h1>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> {product.price} GP</p>
          <p><strong>Rating:</strong> {avgRating} ★ ({reviews.length} reviews)</p>
          <p><strong>Description:</strong> {product.description}</p>
        </div>

        {/* Right: Image */}
        <div style={{ flex: '0 0 200px', textAlign: 'center' }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', maxWidth: '180px', borderRadius: '10px' }}
          />
        </div>
      </div>

      {/* Leave a review */}
      {user && (
        <form
          onSubmit={handleSubmit}
          style={{
            marginTop: '2rem',
            backgroundColor: 'rgba(255,255,255,0.85)',
            padding: '1.5rem',
            borderRadius: '12px',
            maxWidth: '900px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <h3>Leave a Review</h3>
          <label><strong>Rating (1–5):</strong></label>
          <input
            type="number"
            min="1"
            max="5"
            value={newReview.rating}
            onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
            required
            style={{ width: '60px', marginLeft: '0.5rem', marginBottom: '1rem' }}
          />
          <br />
          <textarea
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            placeholder="Write your comment..."
            required
            rows={4}
            style={{ width: '100%', marginBottom: '1rem' }}
          />
          <br />
          <button
            type="submit"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Submit Review
          </button>
        </form>
      )}

      {/* Review List */}
      <div
        style={{
          marginTop: '2rem',
          backgroundColor: 'rgba(255,255,255,0.85)',
          padding: '1.5rem',
          borderRadius: '12px',
          maxWidth: '900px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <h3>Reviews</h3>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul style={{ paddingLeft: '1.2rem' }}>
            {reviews.map((r, i) => (
              <li key={i} style={{ marginBottom: '0.75rem' }}>
                <strong>{r.rating} ★</strong> – {r.comment}
                <br />
                <i style={{ fontSize: '0.9em', color: '#666' }}>
                  by {r.user?.username || 'Anonymous'}
                </i>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
