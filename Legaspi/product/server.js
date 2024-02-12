const express = require('express');
const bodyParser = require('body-parser');
const dbConn = require('./config/db.config');
const app = express();
const port = process.env.PORT || 8001;

// Routes
const userRoute = require('./route/userRoute');

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/v1/user', userRoute);

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
