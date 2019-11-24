const express = require('express');
const router = express.Router();
const Image = require('../models/Image');
const Discriminator = require('../models/Discriminator');
// using async and await key words removes the need to use extra syntax like .then and arrow functions

// GET SPECIFIC IMAGE FROM A GENRE CATEGORY
router.get('/:genre/:imageId', async (req, res) => {
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
router.get('/:genre', async (req, res) => {
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
        res.json(images);
    } catch (err) {
        console.log(err);
        res.json({
            message: err
        });
    }
});

// UPDATE AN IMAGE property
router.patch('/:genre/:imageId', async (req, res) => {
    const propertyToChange = req.body.property;
    const newPropertyValue = req.body.changedValue;
    const imageId = req.params.imageId;
    const genre = req.params.genre;
    try {
        // cannot set the _id or genre properties because it would through the document objects out of sync
        if(!(propertyToChange == "_id" || propertyToChange == "genre")) {
            // test for invalid data
            if(propertyToChange == "orientation" && !(newPropertyValue=="portrait" || newPropertyValue=="horizontal")) {
                res.status(404).send('ERROR: _orientation property can only be portrait or horizontal');
            }
            else {
                const updatedImage = await UpdateImageProperty(genre, imageId, propertyToChange, newPropertyValue);
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
    const builderReturnObject = Discriminator(imageGenre, image);
    
    console.log("inside post route");
    console.log('logging builderObject: ');
    console.log(builderReturnObject);
    
    try {
        if(builderReturnObject.builtSucessfully == false) {
            res.json(builderReturnObject.message);
        }
        const genreSpecificImage = builderReturnObject.newImageObject;
        const savedImage = await genreSpecificImage.save();
        console.log('logging finished savedImage: ');
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
router.delete('/:genre/:imageId', async (req, res) => {
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

// NEW SERVER HELPER FUNCTIONS
//async function GetCollectionNameByRequesteGenre()

// OLD<------------------------- SERVER HELPER FUNCTIONS
async function DeleteImageByGenreAndId(genreNameAsString, imageId) {
    // Calls GetReferenceToImageGenre() to get an objectId for a genre-specific document
    // Uses the mongoDb update property to push the imageObject onto the document's imageArray 
}

async function PostImageIntoGenreArray(genreNameAsString, imageObject) {
    // Calls GetReferenceToImageGenre() to get an objectId for a genre-specific document
    // Uses the mongoDb update property to push the imageObject onto the document's imageArray
    const genreID = await GetReferenceToGenreContainer(genreNameAsString);
    const updatedImage = await ImageGenre.update({
            _id: genreID //search criteria
        }, {
            $push: {
                // field to be updated
                imageArray: imageObject
            }
    });
}

async function UpdateImageProperty(genreNameAsString, imageId, property, changedValue) {
    // Calls GetReferenceToImageGenre() to get an objectId for a genre-specific document
    // Use findById function to get the ImageGenre
    // Use foreach loop to iterate through all the image objects, and change the desire property based off the imageId
    // Update the ImageGenre array property and set it to the new modified array
    // Return the updated image object
    const genreID = await GetReferenceToGenreContainer(genreNameAsString);
    const updatedImageGenre = await ImageGenre.findById({
        _id: genreID
    });
    
    let updatedImageObject = null;
    let newImageArray = updatedImageGenre.imageArray;
    newImageArray.forEach((image)=>{
        if(image._id.toString() == imageId) {
            image[property] = changedValue;
            updatedImageObject = image;
        }
    });
    
    const updatedImage = await ImageGenre.updateOne({
            _id: genreID //search criteria
        }, {
        $set: {
            // gets the property from the URL params and sets the property of the specific image to the propertyValue in the body
            imageArray: newImageArray
        }
    });
    return updatedImageObject;
}

async function GetAllImages() {
    // Use array of genre string constants to
        // loop through each genre and return its respective genre array
        // concat the genreArray to main array
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
    const genreObject = await ImageGenre.findOne({
        _id: genreID
    });
    const images = genreObject.imageArray;
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