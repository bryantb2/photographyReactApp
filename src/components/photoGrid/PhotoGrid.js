import React from 'react';
import '../../App.css';
import './PhotoGrid.css';
import Col12Photo from './Col12Photo';
import PhotoRow from './PhotoGrid';

function PhotoGrid(props,gridSize) {
    //INPUT: will take in array from API call (accessed through props) and grid size
    //WORKING ASSUMPTION: gridSize is an integer that is either 4 or 6
    //WORKING ASSUMPTION: props is an array of NINE image objects
    //WORKING ASSUMPTION: each object will, AT LEAST, contain an imageNumber, URL, and orientation key:value pair
    
    //GLOBAL VARIABLES  
    let sectionedImageArray = [[],[],[],[]];
    
    /*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
    
    //SUB-FUNCTIONS
    function splitAndSectionPhotoArray(props,sectionNumber) {
        //splits the API call elements into sections for rows
        //takes in sectionNumber to account for the row number difference between the col6 and col4 grids (can be either 3 or 4)
        let rawArray = props.array;
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
    }
    
    /*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
    
    //PRESENTATIONAL COMPONENTS
    
    //PHOTOGRID COLUMN FOUR (per image)
    //map sectioned image collection to THREE photoRow
            //takes a sectioned portion of the array map function and:
                //passes it in to the photorow component
    const ColumnFourGrid = props =>
        <div className="gridSection">
            {props.sectionedArray.map(section =>
                <PhotoRow section={section} gridSize={props.gridSize} />)}
        </div>;
    
    //PHOTOGRID COLUMN SIX (per image)
    const ColumnSixGrid = props =>
        <div className="gridSection">
            <div className="row">
                <Col12Photo />
            </div>
            {props.sectionedArray.map(section =>
                <PhotoRow section={section} gridSize={props.gridSize}/>)}
        </div>;
    
    /*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
    
    //CONDITIONAL RENDER FUNCTION
    const finaloutput = props => {
        //returnedJSX will store the final output to be returned
        //split the rawArray that was inputted so it can be passed into the Grid
        let finalJSX = null;
        if(gridSize === 6) {
            //fill the grid
            //assign it to final output
            finalJSX = <ColumnSixGrid gridSize = {gridSize}/>;
        }
        else {
            finalJSX = <ColumnFourGrid gridSize = {gridSize} />;
        }
        
    };
    
    return (
        {finaloutput}
    );
}

export default PhotoGrid;