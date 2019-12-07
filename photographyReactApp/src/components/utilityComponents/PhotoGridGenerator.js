import React from 'react';
import PhotoGrid from '../photoGrid/PhotoGrid.js';

function PhotoGridGenerator(props) {
    // NOTE: method converts a 2-D array of image objects that have 10 images in each sub-element
    // sectioned and parsed image object array, and number of sections that should be render (from 0)
    // returns an array of image grids
    let formattedImageObjectArray = props.formattedImageObjectArray;
    let numberOfSectionsToRender = props.numberOfSectionsToRender;
    //method takes in the state section number
    //loops +1 each time until the counter equals the inputted section number
    //will store JSX components in an array for temp storage
    //array of components will be returned once loop is complete... those elements will then be rendered on the page
    let tempCompArray = new Array();
    for(let i =1; i<= numberOfSectionsToRender; i++) {
        tempCompArray.push(
            <PhotoGrid 
                key={i-1} 
                photoArray={formattedImageObjectArray[i-1]}
            />
        )
    }
    return (tempCompArray);
}
export default PhotoGridGenerator;