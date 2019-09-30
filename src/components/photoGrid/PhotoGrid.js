import React from 'react';
import '../../App.css';
import './PhotoGrid.css';
import PhotoRow from './PhotoRow';
import Col6Photo from './Col6Photo';
import Col4Photo from './Col4Photo';
import Col12Photo from './Col12Photo';

function PhotoGrid(props) {
    //INPUT: will take in photoArray, photoArray SIZE, and gridSize
    //WORKING ASSUMPTION: gridSize is an integer that is either 4 or 6
    //WORKING ASSUMPTION: props is an array of NINE image objects
    //WORKING ASSUMPTION: each object will, AT LEAST, contain an imageNumber, URL, and orientation key:value pair

    function finalOutput() {
        //if section number parameter is 4, there will be a three col grid because there are three images for every section (2 x 4 = 8 total images)
        //section number parameter is 6, there will be a six col grid because there are two images for every section (2 x 4 = 8 total images) 
        let arraySectionNumber = (props.gridSize ===6 ? 4 : 3);
        let sectionedArrayData = splitAndSectionPhotoArray(arraySectionNumber);
        //let size = props.photoArraySize;
        
        const finalOutput = () => {
        //two main conditional blocks for photoGrird: if the photoArray is full (9 items) OR incomplete (less than 9 items)
        //if(size===9) {
            //complete photoArray conditional block
            if(props.gridSize===6) {
                let firstSection = sectionedArrayData.shift();
                return (
                    //special case
                    <div className="gridSection">
                        <PhotoRow
                            key={"row0"} 
                            sectionIndex={0} //this is for debugging
                            section={firstSection} 
                            gridSize={12} //forces a col12row to be rendered and returned
                        />
                        {
                        sectionedArrayData.map((section,index) =>
                            <PhotoRow 
                                customClassLeft={"photoCol6"}
                                customClassRight={undefined} 
                                key={"row"+(index+1)} 
                                sectionIndex={index+1} //this is for debugging
                                section={section} 
                                gridSize={props.gridSize}
                            />)
                        }
                    </div>
                );
            }
            else {
                return(
                    <div className="gridSection">
                        {
                        sectionedArrayData.map((section,index) =>
                            <PhotoRow 
                                key={"row"+index} 
                                sectionIndex={index} //this is for debugging
                                section={section} 
                                gridSize={props.gridSize}
                            />)
                        }
                    </div>
                );
            }
        }
        
        return (
            finalOutput()
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
        //creating five sections
            //variables to track the changing start and end points of the nested for loop
            //1. index into image props array
                //2. copy sets of TWO image objects from props into each spot of the sectionedImageArray
                //3. increment start and indexers outside of nested for loop
                //4. NOTE: will have 1,2,2,2,2 in each section respectively
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
            sectionedImageArray = [[],[],[],[],[]];
            sectionedImageArray[0][0]=photoArray[0];
            const STARTINDEXINCREMENTOR = 2;
            const ENDINDEXINCREMENTOR = 2;
            let startIndex = 1;
            let endIndex = 3;
            for (let i = 1; i < 5; i++) {
                let subArrayCounter = 0;
                for (let j = startIndex; j < endIndex; j++) {
                    sectionedImageArray[i][subArrayCounter] = photoArray[j];
                    subArrayCounter++;
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