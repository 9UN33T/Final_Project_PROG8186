const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Sneaker = require('./models/Sneaker');

dotenv.config();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

const sneakers = [
  {
    name: 'Nike Air Max 270',
    description: 'The Nike Air Max 270 is inspired by two icons of big Air: the Air Max 180 and Air Max 93.',
    imageUrl: 'https://example.com/nike-air-max-270.jpg',
    category: 'Nike',
    price: 150,
    countInStock: 10,
  },
  {
    name: 'Adidas UltraBoost 21',
    description: 'These running shoes deliver comfort and responsiveness with each step.',
    imageUrl: 'https://example.com/adidas-ultraboost-21.jpg',
    category: 'Adidas',
    price: 180,
    countInStock: 7,
  },
  {
    name: 'Puma RS-X3',
    description: 'The Puma RS-X3 takes the signature style of the RS series and levels it up to the third power.',
    imageUrl: 'https://example.com/puma-rs-x3.jpg',
    category: 'Puma',
    price: 120,
    countInStock: 15,
  },
];

const seedDatabase = async () => {
  try {
    await Sneaker.deleteMany({});
    await Sneaker.insertMany(sneakers);
    console.log('Database seeded!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
  }
};

seedDatabase();
