const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const dbConn = require('./config/db.config'); // Update with the correct path to your db.config file
const app = express();
const port = 5002;

// Routes
const userRoute = require('./route/userRoute');
// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

app.use('/api/v1/user', userRoute);

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });