import React from 'react';
import '././App.css';
import './PhotoGrid.css';
import Col12Photo from './Col12Photo';
import PhotoRow from './PhotoGrid';

function PhotoGrid(props,gridSize) {
    //INPUT: will take in props (from API call) and grid size
    //WORKING ASSUMPTION: gridSize is an integer that is either 4 or 6
    //WORKING ASSUMPTION: props is an array of NINE image objects
    //WORKING ASSUMPTION: each object will, AT LEAST, contain an imageNumber, URL, and orientation key:value pair
    
    //GLOBAL VARIABLES  
    let sectionedImageArray = [[],[],[],[]];
    
    //SUB-FUNCTIONS
    function sectionPhoto(props,sectionNumber) {
        //splits the API call elements into sections for rows
        //takes in sectionNumber to account for the row number difference between the col6 and col4 grids (can be either 3 or 4)
        if(sectionNumber === 3) {
            //creating three sections
            for (let i = 0; i < 3; i++) {
                //1. index into image props array
                //2. copy sets of THREE image objects from props into each spot of the sectionedImageArray
                for (let j = (i*3); j < ((i*3)+3); j++) {
                    sectionedImageArray[i][j] = props[j];
                }
            }
        }
        else {
            //creating four sections
            for (let i = 0; i < 4; i++) {
                //1. index into image props array
                //2. copy sets of TWO image objects from props into each spot of the sectionedImageArray
                //3. NOTE: col4grid ignores the first image from props since that is loaded directly into a special col12photo component (START AT INDEX 1!!!!)
                for (let j = i; j < (i+3); j++) {
                    sectionedImageArray[i][j+1] = props[j];
                }
            }
        }
        
    }
    
    
    //photo grid with 4 colmn photos
    const ColumnFourGrid = props =>
        <div className="gridSection">
            //map sectioned image collection to THREE photoRow
        </div>;
    
    //photo grid with 6 colmn photos
    const ColumnSixGrid = props =>
        <div className="gridSection">
            <div className="row">
                <Col12Photo />
            </div>
            <PhotoRow />
            <PhotoRow />
            <PhotoRow />
            <PhotoRow />
        </div>;
    
    const finaloutput = null;
    
    if(gridSize === 6) {
        //fill the grid
        <ColumnSixGrid props=props />
        //assign it to final output
        finaloutput = ColumnSixGrid;
    }
    else {
        finaloutput = ColumnFourGrid;
    }
    
    return (
        <finaloutput />
    );
}

export default PhotoGrid;