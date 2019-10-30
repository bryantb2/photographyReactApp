const express = require('express');
const router = express.Router();
const Image = require('../models/Image');

router.get('/', (req,res) => {
    res.send('Image');
});

//using async and await key words removes the need to use extra syntax like .then and arrow functions
router.post('/', async (req,res) => {
    const image = new Image({
        genre: req.body.genre,
        imageName: req.body.imageNumber,
        imageNumber: req.body.imageNumber,
        thumbnail: req.body.thumbnail,
        fullSizeImage: req.body.fullSizeImage,
        orientation: req.body.orientation
    });
    
    try{
        console.log(image);
        const savedImage = await image.save();
        res.json(savedImage);
    }
    catch(err) {
        res.json({message: err});
    }
    
    
});


module.exports = router;
