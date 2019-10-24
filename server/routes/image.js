const express = require('express');
const router = express.Router();
const Image = require('../models/Image');

router.get('/', (req,res) => {
    res.send('Image');
});

router.post('/', (req,res) => {
    const image = new Image({
        genre: req.body.genre,
        imageName: req.body.imageNumber,
        imageNumber: req.body.imageNumber,
        thumbnail: req.body.thumbnail,
        fullSizeImage: req.body.fullSizeImage,
        orientation: req.body.orientation,
        timeStamp: req.body.timeStamp
    });
    
    image.save()
    .exec()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(200);
    })
});


module.exports = router;
