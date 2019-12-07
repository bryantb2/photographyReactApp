import React from 'react';
import '../../App.css';
import './PhotoGrid.css';
import PhotoRow from './PhotoRow.js';
import Col6Photo from './Col6Photo.js';

class PhotoGrid extends React.Component {
    //INPUT: will take in photoArray, photoArray SIZE, and gridSize
    //WORKING ASSUMPTION: gridSize is an integer that is either 4 or 6
    //WORKING ASSUMPTION: props is an array of NINE image objects
    //WORKING ASSUMPTION: each object will, AT LEAST, contain an imageNumber, URL, and orientation key:value pair
    constructor(props) {
        super(props);
        this.state = {}
        
        // binds
        this.finalOutput = this.finalOutput.bind(this);
        this.splitAndSectionPhotoArray = this.splitAndSectionPhotoArray.bind(this);
    }
    
    finalOutput() {
        // utilizes ES6 mapping function to 
        let sectionedArrayData = this.splitAndSectionPhotoArray(this.props.photoArray);
        let firstSection = sectionedArrayData.shift();
        
        return (
            <div className="gridSection">
                {
                sectionedArrayData.map((section,index) =>
                    <PhotoRow>
                        {(section[0] !== undefined)?
                            <Col6Photo
                                key={"photo0"}
                                id={section[0].imageNumber}
                                customorientation= {section[0].orientation}
                                src={section[0].thumbnail}
                                fullImage={section[0].URL}
                            /> : null
                        }
                        {(section[1] !== undefined)? 
                            <Col6Photo 
                                key={"photo1"}
                                id={section[1].imageNumber}
                                customorientation= {section[1].orientation}
                                src={section[1].thumbnail}
                                fullImage={section[1].URL}
                            /> : null
                        }
                    </PhotoRow>
                )}
            </div>
            );
    };

    splitAndSectionPhotoArray(photoArray) {
        //splits the API call elements into sections for rows
        //creating three sections
        //REMEMBER: Each section of the array represents a row
        //creating five sections
            //variables to track the changing start and end points of the nested for loop
            //1. index into image props array
                //2. copy sets of TWO image objects from props into each spot of the sectionedImageArray
                //3. increment start and indexers outside of nested for loop
                //4. NOTE: will have 1,2,2,2,2 in each section respectively
                        
        let sectionedImageArray;
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
        return sectionedImageArray;
    }
    
    render() {
        return (
            this.finalOutput()
        );
    }
    
}

export default PhotoGrid;