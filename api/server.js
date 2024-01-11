const express = require('express');
const dbConn = require('./config/db.config'); // Update with the correct path to your db.config file
const app = express();
const port = process.env.PORT || 8000;

// Routes
const userRoute = require('./route/userRoute');

app.use('/api/v1/user', userRoute);

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });