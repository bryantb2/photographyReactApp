const mongoose = require('mongoose');
const CollectionNames = ('../utilities/CollectionNames');

function Discriminator(genreString, vanillaImageObject) {
    
    // 1. function will take in a standard image object and genreString
    // 2. use the mongoose discriminator function to update the target collection of the image
    
    // VALIDATOR
    const isGenreValid = () => {
        // loop through collection names and determine if the genreString is valid
        let collectionNameArray = CollectionNames.GetCollectionNames;
        let isValidCollectionName = false;
        collectionNameArray.forEach((name)=>{
            if(name === genreString) {
                isValidCollectionName = true;
                console.log("THE GENRE IS VALID!!!!!!!");
            }
        });
        return isValidCollectionName;
    }
    
    console.log("inside discriminator, logging if genre is valid: ");
    console.log(isGenreValid());
    
    console.log("inside discriminator, logging the collection name array: ");
    console.log(CollectionNames.GetCollectionNames);
    
    // BUILDING RETURN OBJECTS
    let returnObject = {
        builtSucessfully: false,
        message: "",
        newImageObject: null
    };
    
    if(isGenreValid === true) {
        // unique key required for models that are discriminated
        const discriminatorKey = Date.now();
        const newImageObject = vanillaImageObject.discriminator('GenreImage',
                        new mongoose.Schema({}, discriminatorKey, ));
        returnObject.newImageObject = newImageObject;
        returnObject.builtSucessfully = false;
        returnObject.message = "success!";
    }
    else {
        returnObject.builtSucessfully = false;
        returnObject.message = "The genre string must be a valid collection name to generate a collection-based model object";
    }
    return returnObject;
}

module.exports = Discriminator;