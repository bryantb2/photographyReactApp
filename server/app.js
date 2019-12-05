const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares: functions that are executed along with certain routes
app.use(cors()); //alows for cross-domain communication with the web server
app.use(bodyParser.json());
app.use(cors({
    origin: process.env.ORIGIN_CONNECTION
}));

//IMPORT ROUTES
const imageRoute = require('./routes/image');
app.use('/image', imageRoute); //middleware example


//ROUTES: patch for updating delete for deleting get to retrieve info post to send info

app.get('/', (req, res) => {
    res.send('Image API Server.');
});

//Connect to DB
mongoose.connect(process.env.DB_LOCAL_CONNECTION, {
    useNewUrlParser: true
}, () => console.log('connected to DB!'));

//tells express which port to listen on
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));