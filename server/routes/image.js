const express = require('express');
const router = express.Router();
const Image = require('../models/Image');
const ImageContainer = require('../models/ImageContainer');
const ContainerDirectory = require('../models/ContainerDirectory');
require('dotenv/config');
// using async and await key words removes the need to use extra syntax like .then and arrow functions

// GET SPECIFIC IMAGE FROM A GENRE CATEGORY
router.get('/:genre/:imageId', async (req, res) => {
    try {
        // TODO: ASK MARI IF AWAIT IS REQUIRED WHEN CALLING THE FUNCTION
        const image = await GetImageByGenreAndId(req.params.gerne,req.params.imageId);
        if (image == null) {
            res.status(404);
        }
        else {
            res.status(202);
        }
        res.json(image);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

// GETS IMAGES BASED OFF GENRE
router.get('/genre/:genre', async (req, res) => {
    try {
        // TODO: ASK MARI IF AWAIT IS REQUIRED WHEN CALLING THE FUNCTION
        const imageArray = await GetImageArrayByGenre(req.params.gerne);
        if (image == null) {
            res.status(404);
        }
        else {
            res.status(202);
        }
        console.log(imageArray);
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
        res.json({
            message: err
        });
    }
});

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

// DELETE A SPECIFIC IMAGE
router.delete('genre/:genre/:imageId', async (req, res) => {
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


// SERVER FUNCTIONS
async function GetAllImages() {
    // Use array of genre string constants to
        // loop through each genre and return its respective genre array
        // concat the genreArray to main array
    const genreArray = ["urban","natural","aerial","portraits"];
    let imageArray = GetImageArrayByGenre(genreArray[0]);
    for(let i = 1; i < genreArray.length; i++) {
        let tempArray = GetImageArrayByGenre(genreArray[i]);
        imageArray = imageArray.concat(tempArray);
    }
}

async function GetImageArrayByGenre(genreNameAsString) {
    // searchs the specified DB collection for the document with the objectId set in the .env file
            // finds and gets the document by objectId
            // accesses the genre sub-object, which is a series of key/value pairs for genre names and their document objectIds
            // Gets the appropriate genre document ID 
            // Uses the genre document ID to find the document storing an array of image objects
            // return the array of image objects
        const requestedGenre = genreNameAsString;
        const directoryId = process.env.DIRECTORY_ID;
        const directoryContainer = await ContainerDirectory.findById({
            _id: directoryId
        });
       
        const genreDirectory = directoryContainer.genre;
        let genreID;
        if(requestedGenre === "urban") {
            genreID = genreDirectory.urban;
        }
        else if(requestedGenre === "natural") {
            genreID = genreDirectory.natural;
        }
        else if(requestedGenre === "aerial") {
            genreID = genreDirectory.aerial;
        }
        else {
            genreID = genreDirectory.portraits;
        }
        
        // NOTE: when attempt to find an image container by id, the genreID object MUST be toString-ed
        
        const genreObject = await ImageContainer.findById({
            _id: genreID.toString()
        });
        const images = genreObject.imageArray;
    
        return images;
}

async function GetImageByGenreAndId(genreNameAsString, imageIdAsInt) {
    // Gets the array of genre images from GetImageArrayByGenre()
        // loops through image array, searching for Id
        // if image with Id is found, return image object
        // if not found, return null
    const imageArrayByGenre = GetImageArrayByGenre(genreNameAsString);
    let foundImage = null;
    imageArrayByGenre.forEach((image)=>{
        if(image._id.toString() === imageIdAsInt) {
            return image;
        }
    });
    return foundImage;
}

module.exports = router;