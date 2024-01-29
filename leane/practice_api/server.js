const express=require ('express');
const dbConn=require('./config/db.config');
const app=express();
const port=5000;

const routes1=require('./routes/routes');


app.use('/api/v1/user', routes1);










app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
});