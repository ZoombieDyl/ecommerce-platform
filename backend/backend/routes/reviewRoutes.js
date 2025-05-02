const express = require('express');
const router = express.Router();
const { createReview, getReviewsByProduct } = require('../controllers/reviewController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createReview);                     // POST /api/reviews
router.get('/:productId', getReviewsByProduct);              // GET /api/reviews/:productId

module.exports = router;
