const express=require ('express');
const app=express();
const port=5000;
const bodyParser = require('body-parser');
const route = require('./route/route');

app.use(bodyParser.json());
app.use('/api/v1/user', route);










app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
});

