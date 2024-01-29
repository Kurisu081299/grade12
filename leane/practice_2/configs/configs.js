const mysql=require("mysql2");
const dotenv=require("dotenv").config();
const connection=mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '1234',
    database:'practice_2'
})

connection.connect(function(err){
if (err) throw err;
console.log ("databse connected");
});

module.exports = connection;

