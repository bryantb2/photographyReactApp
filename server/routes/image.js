const express = require('express');
const router = express.Router();
const Image = require('../models/Image');

router.get('/', (req,res) => {
    res.send('Image');
});

router.post('/', (req,res) => {
    console.log(req.body);
})


module.exports = router;
