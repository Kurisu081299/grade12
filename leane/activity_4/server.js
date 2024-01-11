const express=require ('express');
const dbConn=require('./config/db.config');
const app=express();
const port=5000;

const userRoute = require('./route/userRoute');

app.use('/api/v1/user', userRoute);










app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
});