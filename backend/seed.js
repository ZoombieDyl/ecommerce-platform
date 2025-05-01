const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

// Use this if you want to reuse your front-end data.js
const sampleData = require('./sampleProducts');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');


    await Product.deleteMany();
    console.log('Old products cleared');

    const inserted = await Product.insertMany(sampleData);
    console.log(`Inserted ${inserted.length} products`);

    process.exit();
  })
  .catch((err) => {
    console.error('Seeding failed:', err);
    process.exit(1);
  });
