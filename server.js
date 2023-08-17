const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas
const MONGODB_URI = 'mongodb+srv://faisal:21031994@cluster0.bnsrejb.mongodb.net/Live_Project';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(express.json());

// Define routes (you will need to create these)
const postsRoutes = require('./routes/posts');
app.use('/api/posts', postsRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
