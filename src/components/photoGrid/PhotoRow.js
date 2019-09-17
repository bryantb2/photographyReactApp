import React from 'react';
import Col6Photo from './Col6Photo';
import Col4Photo from './Col4Photo';

function PhotoRow(props) {
    console.log("inside Photorow, logging sectionedArray");
        console.log(props.sectionedArray);
    //WORKING ASSUMPTION: row will take in a section of 2-3 photo objects that can then be indexed into
    const ColumnFourRow = () =>
    <div className="row">
        <Col4Photo
            key={"photo0"}
            id={props.section[props.sectionIndex][0].imageNumber}
            customorientation= {props.section[props.sectionIndex][0].orientation}
            src={props.section[props.sectionIndex][0].thumbnail}
            fullImage={props.section[props.sectionIndex][0].URL}
        />
        <Col4Photo
            key={"photo1"}
            id={props.section[props.sectionIndex][1].imageNumber}
            customorientation= {props.section[props.sectionIndex][1].orientation}
            src={props.section[props.sectionIndex][1].thumbnail}
            fullImage={props.section[props.sectionIndex][1].URL}
        />
        <Col4Photo 
            key={"photo2"}
            id={props.section[props.sectionIndex][2].imageNumber}
            customorientation= {props.section[props.sectionIndex][2].orientation}
            src={props.section[props.sectionIndex][2].thumbnail}
            fullImage={props.section[props.sectionIndex][2].URL}
        />
    </div>;
    
    const ColumnSixRow = () =>
    <div className="row">
        <Col6Photo 
            key={"photo0"}
            id={props.section[props.sectionIndex][0].imageNumber}
            customorientation= {props.section[props.sectionIndex][0].orientation}
            src={props.section[props.sectionIndex][0].thumbnail}
            fullImage={props.section[props.sectionIndex][0].URL}
        />
        <Col6Photo 
            key={"photo1"}
            id={props.section[props.sectionIndex][1].imageNumber}
            customorientation= {props.section[props.sectionIndex][1].orientation}
            src={props.section[props.sectionIndex][1].thumbnail}
            fullImage={props.section[props.sectionIndex][1].URL}
        />
    </div>;
    
    /*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
    
    //CONDITIONAL RENDER FUNCTION
    function finaloutput() {
        //returnedJSX will store the final output to be returned
        //conditionally render row based on gridSize
        
        let finalJSX;
        if(props.gridSize === 6) {
            //fill the grid
            //assign it to final output
            finalJSX = <ColumnSixRow section={props.section} gridSize={props.gridSize} />;
        }
        else {
            finalJSX = <ColumnFourRow section={props.section} gridSize={props.gridSize} />;
        }
        return finalJSX;
    };
    
    return (
        finaloutput()
    );
}

export default PhotoRow;