//Our dependencies
const express = require('express')
const app = express()
const mysql = require("mysql")
const cors = require("cors")

//Let us run the server. SO its running,
app.listen(3002, ()=>{
    console.log('Server is running on port 3002');
    
})

//Let us create our database (mysql)
const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'', //If you have set xampp password please enter it here
    database:'plantdb',
})

//Let us now create a route to the server that will register a user.

app.post('/register', (req,res)=>{
    //We need to get variables sent from the form
})
