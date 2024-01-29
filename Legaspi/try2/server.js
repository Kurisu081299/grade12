const express=require ('express');
const bodyParser = require('body-parser');
const dbConn=require('./config/db.config');
const app=express();
const port=5001;

const userRoute = require('./route/userRoute');


// Middleware
app.use(bodyParser.json());

app.use('/api/v1/user', userRoute);








app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
});