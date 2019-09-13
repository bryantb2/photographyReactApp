import React from 'react';
import '../../App.css';
import './PhotoGrid.css';
import ColumnSixGrid from './ColumnSixGrid.js';
import ColumnFourGrid from './ColumnFourGrid.js';

class PhotoGrid extends React.Component {
    constructor(props) {
        //INPUT: will take in photoArray, gridSize, and 
        //WORKING ASSUMPTION: gridSize is an integer that is either 4 or 6
        //WORKING ASSUMPTION: props is an array of NINE image objects
        //WORKING ASSUMPTION: each object will, AT LEAST, contain an imageNumber, URL, and orientation key:value pair
        super(props);
        this.state = {};
        
        //BINDS
        this.finalOutput = this.finalOutput.bind(this);
        this.splitAndSectionPhotoArray = this.splitAndSectionPhotoArray.bind(this);
        
        //Method CALLS
        const JSXOutput = this.finalOutput(this.props);
    }
   
    
    //Methods
    finalOutput(props) {
        //returnedJSX will store the final output to be returned
        //split the rawArray that was inputted so it can be passed as sections into the Grid
        let finalJSX = null;
        let sectionedArray = this.splitAndSectionPhotoArray(props.photoArray,(props.gridSize ===6 ? 4 : 3));
        //section number parameter is 4 in a six col grid because there are two images for every section (2 x 4 = 8 total images)
        finalJSX = <ColumnSixGrid 
                    sectionedArray={sectionedArray} 
                    gridSize = {props.gridSize}
                    />;
                    
        return {finalJSX};
    };
    
    splitAndSectionPhotoArray(props,sectionNumber) {
        //splits the API call elements into sections for rows
        //takes in sectionNumber to account for the row number difference between the col6 and col4 grids (can be either 3 or 4)
        let sectionedImageArray = [[],[],[],[]];
        let rawArray = props.photoArray.slice(0);
        if(sectionNumber === 3) {
            //creating three sections
            for (let i = 0; i < 3; i++) {
                //1. index into image props array
                //2. copy sets of THREE image objects from props into each spot of the sectionedImageArray
                for (let j = (i*3); j < ((i*3)+3); j++) {
                    sectionedImageArray[i][j] = rawArray[j];
                }
            }
        }
        else {
            //creating four sections

            //variables to track the changing start and end points of the nested for loop
            const STARTINDEXINCREMENTOR = 2;
            const ENDINDEXINCREMENTOR = 2;
            let startIndex = 1;
            let endIndex = 3;

            for (let i = 0; i < 4; i++) {
                //1. index into image props array
                //2. copy sets of TWO image objects from props into each spot of the sectionedImageArray
                //3. increment start and indexers outside of nested for loop
                //4. NOTE: col4grid ignores the first image from props since that is loaded directly into a special col12photo component (START AT INDEX 1!!!!)
                for (let j = startIndex; j < endIndex; j++) {
                    sectionedImageArray[i][j] = rawArray[j];
                }
                startIndex += STARTINDEXINCREMENTOR;
                endIndex += ENDINDEXINCREMENTOR;
            }   
        }
        return sectionedImageArray;
    }
    
    render() {
        return (
            <JSXOutput />
        );
    }
}

export default PhotoGrid;