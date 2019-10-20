const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Middlewars
/*
functions that are executed along with certain routes
*/



//ROUTES
/*
patch for updating
delete for deleting
get to retrieve info
post to send info
*/

app.get("/home", (req,res) => {
    res.send("HOME");
});

app.get("/posts", (req,res) => {
    res.send("POSTS");
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true }, () => console.log('connected to DB!')
);

//tells express which port to listen on
app.listen(3001);








//packages:
/*
dotenv
mongoose
express
nodemon

*/