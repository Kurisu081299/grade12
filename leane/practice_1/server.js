const express=require ('express');
const app=express();
const port=5000;

const routes = require('./routes/routes');

app.use('/api/v1/user', routes);










app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
});