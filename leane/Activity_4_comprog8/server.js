const express=require ('express');
const dbConn=require('./configs/db.Configs');
const app=express();
const port=5000;

const userRoute = require('./routes/userRoutes');

app.use('/api/v1/user', userRoute);










app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
});