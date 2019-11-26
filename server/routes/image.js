const express = require('express');
const router = express.Router();
const Image = require('../models/Image');
// using async and await key words removes the need to use extra syntax like .then and arrow functions

// GETS IMAGES BASED OFF GENRE
router.get('/:genre', async (req, res) => {
    try {
        console.log(req.params.genre)
        const imageArray = await Image.find({
            genre: req.params.genre
        })
        res.json(imageArray);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

// GETS ALL IMAGES
router.get('/', async (req, res) => {
    try {
        const images = await Image.find();
        res.json(images);
    } catch (err) {
        console.log(err);
        res.json({
            message: err
        });
    }
});

// UPDATE AN IMAGE property
router.patch('/:imageId', async (req, res) => {
    const propertyToChange = req.body.property;
    const newPropertyValue = req.body.changedValue;
    const imageId = req.params.imageId;
    try {
        // cannot set the _id or genre properties because it would through the document objects out of sync
        if(!(propertyToChange == "_id" || propertyToChange == "genre")) {
            // test for invalid data
            if(propertyToChange == "orientation" && !(newPropertyValue=="portrait" || newPropertyValue=="horizontal")) {
                res.status(404).send('ERROR: _orientation property can only be portrait or horizontal');
            }
            else {
                const updatedImage = await Image.updateOne({
                    _id: imageId //search criteria
                }, {
                $set: {
                    // dynamically setting and updating property value
                    [property]: changedValue
                }});
                res.json(updatedImage);
            }
        }
        else {
            res.status(404).send('ERROR: _id and genre properties are immutable');
        }
    } catch (err) {
        res.json({
            err
        });
    }
});

// SUBMITS AN IMAGE
router.post('/', async (req, res) => {
    const imageGenre = req.body.genre;
    let image = new Image({
        genre: req.body.genre,
        thumbnail: req.body.thumbnail,
        fullSizeImage: req.body.fullSizeImage,
        orientation: req.body.orientation
    });
<<<<<<< HEAD
=======
    const builderReturnObject = Discriminator(imageGenre, image);
    
>>>>>>> 9112038b985d91eaf741847b5921b2f289d7309d
    try {
        const savedImage = await image.save();
        console.log(savedImage);
        res.json(savedImage);
    } catch (err) {
        console.log(err);
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
        res.json(removedImage);
    } catch (err) {
        console.log(err);
        res.json({
            message: err
        });
    }
});

module.exports = router;