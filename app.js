const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const cookieparser=require("cookie-parser");

const app = express();
dotenv.config({path:'./config.env'});

require('./db/conn');
//const User = require('./model/userSchema');

app.use(express.json());
app.use(cookieparser());

//linking the router files to make our routes easy
app.use(require('./router/auth'));

const PORT = process.env.PORT || 3000;




/*app.get('/about', (req, res) => {
    console.log(`hello my about`)
    res.send(`HELLO about WORLD FROM SERVER`);
});*/

/*app.get('/contact', (req, res) => {
    //res.cookie("test", 'Das');
    res.send(`HELLO contact WORLD FROM SERVER`);
});*/

app.get('/learning', (req, res) => {
    res.send(`HELLO learning  WORLD FROM SERVER`);
});

app.get('/signin', (req, res) => {
    res.send(`HELLO signin contact WORLD FROM SERVER`);
});

app.get('/signup', (req, res) => {
    res.send(`HELLO signup contact WORLD FROM SERVER`);
});

if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

app.listen(3000, () => {
    console.log(`server is running at port ${PORT}`);
});
