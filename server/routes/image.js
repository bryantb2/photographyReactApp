const express = require('express');
const router = express.Router();
const Image = require('../models/Image');

//GETS ALL IMAGES
router.get('/', async (req, res) => {
    try {
        const images = await Image.find();
        res.json(images);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//using async and await key words removes the need to use extra syntax like .then and arrow functions
//SUBMITS AN IMAGE
router.post('/', async (req, res) => {
    const image = new Image({
        genre: req.body.genre,
        imageNumber: req.body.imageNumber,
        thumbnail: req.body.thumbnail,
        fullSizeImage: req.body.fullSizeImage,
        orientation: req.body.orientation
    });

    try {
        console.log(image);
        const savedImage = await image.save();
        res.json(savedImage);
    } catch (err) {
        res.json({
            message: err
        });
    }


});

//GET SPECIFIC IMAGE
router.get('/:imageId', async (req, res) => {
    try {
        console.log(req.params);
        const image = await Image.findById(req.params.imageId);
        res.json(image);
    } catch (err) {
        res.json({
            message: err
        });
    }
});


//DELETE A SPECIFIC IMAGE
router.delete('/:imageId', async (req, res) => {
    try {
        const removedImage = await Image.remove({
            _id: req.params.imageId
        });
        res.json(removedImage);
    } catch (err) {
        res.json({
            message: err
        });
    }

});


//UPDATE AN IMAGE
router.patch('/:imageId', async (req, res) => {
    try {
        const updatedImage = await Image.updateOne({
            _id: req.params.imageId //search criteria
        }, {
            $set: {
                orientation: req.body.orientation
            }
        });
        res.json(updatedImage);
    } catch (err) {
        res.json({
            message: err
        });
    }
});


module.exports = router;
