const express = require('express');
const router = express.Router();
const Image = require('../models/Image');

// GETS ALL IMAGES
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

// GETS IMAGES BASED OFF GENRE
router.get('/:genre', async (req, res) => {
    try {
        // search the DB for the document with storingImages prop set to false
            // get the objectID from the appropriate genre object prop
            // use the genre object ID to search for the appropriate storage document
            // return image array from imageArray property
        const genreDocID = await 
        const images = await Image.find();
        res.json(images);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

// using async and await key words removes the need to use extra syntax like .then and arrow functions
// SUBMITS AN IMAGE
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

// GET SPECIFIC IMAGE
router.get('/:imageId', async (req, res) => {
    try {
        console.log(req.params);
        const image = await Image.findById(req.params.imageId);
        if (image == null) {
            res.status(404).send("An image with that ID was not found");
        }
        else {
            res.status(202).send("Success, the image was retrieved!");
        }
        res.json(image);
    } catch (err) {
        res.json({
            message: err
        });
    }
});


// DELETE A SPECIFIC IMAGE
router.delete('/:imageId', async (req, res) => {
    try {
        const removedImage = await Image.remove({
            _id: req.params.imageId
        });
        if (removedImage == null) {
            res.status(404).send("An image with that ID was not found");
        }
        else {
            res.status(202).send("Success, that SOB is GONE!");
        }
        res.json(removedImage);
    } catch (err) {
        res.json({
            message: err
        });
    }

});


// UPDATE AN IMAGE property
router.patch('/:imageId/:property', async (req, res) => {
    try {
        const updatedImage = await Image.updateOne({
            _id: req.params.imageId //search criteria
        }, {
            $set: {
                // gets the property from the URL params and sets the property of the specific image to the propertyValue in the body
                property: req.body.propertyValue
            }
        });
        if (updatedImage == null) {
            res.status(404).send("An image with that ID was not found");
            // return statement here to break out of the route?
        }
        else {
            res.status(202).send("Success, image was updated!");
        }
        res.json(updatedImage);
    } catch (err) {
        res.json({
            message: err
        });
    }
});


module.exports = router;