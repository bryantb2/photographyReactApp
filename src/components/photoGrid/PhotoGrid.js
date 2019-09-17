import React from 'react';
import '../../App.css';
import './PhotoGrid.css';
import ColumnSixGrid from './ColumnSixGrid.js';
import ColumnFourGrid from './ColumnFourGrid.js';

function PhotoGrid(props) {
    //INPUT: will take in photoArray and gridSize
    //WORKING ASSUMPTION: gridSize is an integer that is either 4 or 6
    //WORKING ASSUMPTION: props is an array of NINE image objects
    //WORKING ASSUMPTION: each object will, AT LEAST, contain an imageNumber, URL, and orientation key:value pair

    function finalOutput() {
        //if section number parameter is 4, there will be a three col grid because there are three images for every section (2 x 4 = 8 total images)
        //section number parameter is 6, there will be a six col grid because there are two images for every section (2 x 4 = 8 total images) 
        let arraySectionNumber = (props.gridSize ===6 ? 4 : 3);
        let sectionedArrayData = splitAndSectionPhotoArray(arraySectionNumber);
        const finalJSX = () => {
            if(arraySectionNumber==4)
                return (
                    <ColumnSixGrid 
                        sectionedArray={sectionedArrayData} 
                        gridSize = {props.gridSize}
                    />
                );
            else
                return (
                    <ColumnFourGrid 
                        sectionedArray={sectionedArrayData} 
                        gridSize = {props.gridSize}
                    />
                );
        }
                    
        return (
            finalJSX()
        );
    }
    
    function splitAndSectionPhotoArray(sectionNumber) {
        //splits the API call elements into sections for rows
        //takes in sectionNumber to account for the row number difference between the col6 and col4 grids (can be either 3 or 4)
        //creating three sections
         //1. index into image props array
                //2. copy sets of THREE image objects from props into each spot of the sectionedImageArray
                //3. continue until props array is fully copied
                //REMEMBER: Each section of the array represents a row
                //subArrayCounter ensures that the objects of each section start with index 0 and end with index 2
        //OR
        //creating four sections
            //variables to track the changing start and end points of the nested for loop
            //1. index into image props array
                //2. copy sets of TWO image objects from props into each spot of the sectionedImageArray
                //3. increment start and indexers outside of nested for loop
                //4. NOTE: col4grid ignores the first image from props since that is loaded directly into a special col12photo component (START AT INDEX 1!!!!)
        let sectionedImageArray;
        const photoArray = props.photoArray;
        
        if(sectionNumber === 3) {
            sectionedImageArray = [[],[],[]];
            for (let i = 0; i < 3; i++) {
                let subArrayCounter = 0;
                for (let j = (i*3); j < ((i*3)+3); j++) {
                    sectionedImageArray[i][subArrayCounter] = photoArray[j];
                    subArrayCounter++;
                }
            }
        }
        else {
            sectionedImageArray = [[],[],[],[]];
            const STARTINDEXINCREMENTOR = 2;
            const ENDINDEXINCREMENTOR = 2;
            let startIndex = 1;
            let endIndex = 3;
            for (let i = 0; i < 4; i++) {
                let subArrayCounter = 0;
                for (let j = startIndex; j < endIndex; j++) {
                    sectionedImageArray[i][subArrayCounter] = photoArray[j];
                }
                startIndex += STARTINDEXINCREMENTOR;
                endIndex += ENDINDEXINCREMENTOR;
            }   
        }
        return sectionedImageArray;
    }
    
    return (
        finalOutput()
    );
}

export default PhotoGrid;