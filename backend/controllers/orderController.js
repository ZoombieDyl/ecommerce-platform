const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    try {
      const { items, total } = req.body;
      const userId = req.user.id;
  
      const lastOrder = await Order.findOne().sort({ orderNumber: -1 });
      const lastNumber = lastOrder?.orderNumber;
      const nextOrderNumber = typeof lastNumber === 'number' ? lastNumber + 1 : 100000;
  
      const order = new Order({
        user: userId,
        items,
        total,
        orderNumber: nextOrderNumber
      });
  
      const saved = await order.save();
      res.status(201).json(saved);
    } catch (err) {
      console.error('Order creation failed:', err);
      res.status(500).json({ message: err.message });
    }
  };  
  

exports.getUserOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await Order.find({ user: userId }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
