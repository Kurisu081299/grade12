const express = require('express');
const dbConn = require('./configs/db.Config');
const app = express();
const port = 5002;
const cors = require('cors'); // Add the cors middleware

// Enable CORS for all routes
app.use(cors());

const userRoute = require('./routes/userRoute');

app.use('/api/v1/user', userRoute);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
