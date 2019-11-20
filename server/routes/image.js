const express = require('express');
const router = express.Router();
const Image = require('../models/Image');
const ImageGenre = require('../models/ImageGenre');
const Directory = require('../models/Directory');
require('dotenv/config');
// using async and await key words removes the need to use extra syntax like .then and arrow functions

// GET SPECIFIC IMAGE FROM A GENRE CATEGORY
router.get('/genre/:genre/:imageId', async (req, res) => {
    const requestedGenre = req.params.genre;
    const requestedImageId = req.params.imageId;
    try {
        const image = await GetImageByGenreAndId(requestedGenre,requestedImageId);
        res.json(image);
    } catch (err) {
        console.log(err);
        res.json({
            message: err
        });
    }
});

// GETS IMAGES BASED OFF GENRE
router.get('/genre/:genre', async (req, res) => {
    try {
        const imageArray = await GetImageArrayByGenre(req.params.genre);
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
        const images = await GetAllImages();
        if (image == null) {
            res.status(404);
        }
        else {
            res.status(202);
        }
        res.json(images);
    } catch (err) {
        console.log(err);
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
        //const savedImage = await image.save();
        const savedImage = await PostImageIntoGenreArray(req.body.genre, image);
        console.log(image);
        res.json(savedImage);
    } catch (err) {
        console.log(err);
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
        console.log(err);
        res.json({
            message: err
        });
    }

});

// TEST ROUTES
router.get('/containerRef', async (req,res)=>{
    try {
        const directory = await Directory.findById({
            _id: '5dcdc3ca1c9d440000f857b1'
        });
        if (directory == null) {
            res.status(404);
        }
        else {
            res.status(202);
        }
        res.json(directory);
    } catch (err) {
        console.log(err);
        res.json({
            message: err
        });
    }
});

router.post('/buildContainerRef',async(req,res) => {
    const directory = new Directory({
            storingImages: req.body.storingImages,
            genre: req.body.genre
        });
    try {
        if (directory == null) {
            res.status(404);
        }
        else {
            res.status(202);
        }
        const savedDirectory = await directory.save();
        console.log(directory);
        res.json(directory);
    }
    catch(err) {
        console.log(err);
        res.json({
            message: err
    })};
});


// SERVER HELPER FUNCTIONS
async function PostImageIntoGenreArray(genreNameAsString, imageObject) {
    // Calls GetReferenceToImageGenre() to get an objectId for a genre-specific document
    // Uses the mongoDb update property to push the imageObject onto the document's imageArray
    console.log("Inside post image helper function!");
    console.log(imageObject);
    const genreID = await GetReferenceToImageGenre(genreNameAsString);
    const updatedImage = await ImageGenre.update({
            _id: genreID //search criteria
        }, {
            $push: {
                // field to be updated
                imageArray: imageObject
            }
    });
    console.log("logging image pushed into array: ");
    console.log(updatedImage);
    return updatedImage;
}

async function UpdateImageProperty(genreNameAsString, ) {
    //TODO: FINISHED THIS   
}

async function GetAllImages() {
    // Use array of genre string constants to
        // loop through each genre and return its respective genre array
        // concat the genreArray to main array
    console.log("inside GetAllImages");
    const genreArray = ['urban','natural','aerial','portraits'];
    let imageArray = await GetImageArrayByGenre(genreArray[0]);
    for(let i = 1; i < genreArray.length; i++) {
        let tempArray = await GetImageArrayByGenre(genreArray[i]);
        imageArray = imageArray.concat(tempArray);
    }
    return imageArray;
}

async function GetImageArrayByGenre(genreNameAsString) {
    // Calls GetReferenceToImageContainer() to get an objectId for a genre-specific document
    // Uses the genre document ID to find the document storing an array of image objects
    // return the array of image objects
    const genreID = await GetReferenceToGenreContainer(genreNameAsString);
    console.log(`genreId for ${genreNameAsString}: ${genreID}`);
    const genreObject = await ImageGenre.findOne({
        _id: genreID
    });
    const images = genreObject.imageArray;
    console.log("Inside GetImageArrayByGenre function, logging imageArrray: ");
    console.log(genreObject);

    return images;
}

async function GetImageByGenreAndId(genreNameAsString, imageId) {
    // Gets the array of genre images from GetImageArrayByGenre()
        // loops through image array, searching for Id
        // if image with Id is found, return image object
        // if not found, return null
    const imageArrayByGenre = await GetImageArrayByGenre(genreNameAsString);
    let targetImage = null;
    imageArrayByGenre.forEach((image)=> {
        console.log(image);
        if(image._id.toString() == imageId) {
            console.log("yup, the Ids match. Returning image object");
            targetImage = image;
            return;
        }
    });
    return targetImage;
}

async function GetReferenceToGenreContainer(genreNameAsString) {
    // searchs the specified DB collection for the document with the objectId set in the .env file
        // finds and gets the document by objectId
        // accesses the genre sub-object, which is a series of key/value pairs for genre names and their document objectIds
        // Gets and RETURNS the appropriate genre document ID as a STRING
    const requestedGenre = genreNameAsString;
    const directoryId = process.env.DIRECTORY_ID;
    const directoryContainer = await Directory.findById({
        _id: directoryId
    });
    
    console.log("logging requestedGenre");
    console.log(genreNameAsString);
    
    console.log("logging directoryId");
    console.log(directoryId);
    
    console.log("logging central directory");
    console.log(directoryContainer);
    
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
    return (genreID.toString());
}

module.exports = router;