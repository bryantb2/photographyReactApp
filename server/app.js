const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Middlewars
/*
functions that are executed along with certain routes
*/

app.use(bodyParser.json());

//IMPORT ROUTES
const postRoute = require('./routes/image'); 
app.use('/image', postRoute); //middleware example


//ROUTES
/*
patch for updating
delete for deleting
get to retrieve info
post to send info
*/

app.get('/', (req,res) => {
    res.send('HOME');
});



//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log('connected to DB!')
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