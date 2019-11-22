const mongoose = require('mongoose');
import CollectionNames from "../utilities/CollectionNames.js";

function BuildGenreSpecificImage(genreString, vanillaImageObject) {
    
    // 1. function will take in a standard image object and genreString
    // 2. use the mongoose discriminator function to update the target collection of the image
    
    // VALIDATOR
    const isGenreValid = (genreString) => {
        // loop through collection names and determine if the genreString is valid
        let collectionNameArray = CollectionNames.CollectionNameArray;
        let isValidCollectionName = false;
        collectionNameArray.forEach((name)=>{
            if(name === genreString)
                isValidCollectionName = true;
        });
        return isValidCollectionName;
    }
    
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

export default BuildGenreSpecificImage;