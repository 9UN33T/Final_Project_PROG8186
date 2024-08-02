const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5005;

app.use(cors()); // Enable CORS
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Sample route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Sneaker routes
app.use('/api/sneakers', require('./routes/sneakerRoutes'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
