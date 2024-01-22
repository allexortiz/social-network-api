// Import necessary modules
const express = require('express');  // Express.js for building web applications
const mongoose = require('mongoose'); // Mongoose for MongoDB object modeling

// Create an Express application
const app = express();

// Set the port to use either the provided environment variable or default to 3001
const PORT = process.env.PORT || 3001;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Middleware to parse incoming URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Connect to MongoDB using the provided URI or default to 'mongodb://localhost:27017/shadow-moses'
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/shadow-moses', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Include routes from the './routes' file
app.use(require('./routes'));

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));