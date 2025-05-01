const Review = require('../models/Review');

exports.createReview = async (req, res) => {
  try {
    const { productId, rating, comment } = req.body;
    const user = req.user.id;

    const review = new Review({ user, productId, rating, comment });
    const saved = await review.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getReviewsByProduct = async (req, res) => {
  try {
    const reviews = await Review.find({ productId: req.params.productId }).populate('user', 'username');
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
