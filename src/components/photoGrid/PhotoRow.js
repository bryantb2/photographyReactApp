import React from 'react';
import Col6Photo from './Col6Photo';
import Col4Photo from './Col4Photo';
import Col12Photo from './Col12Photo';

function PhotoRow(props) {
    //WORKING ASSUMPTION: row will take in a section of 2-3 photo objects that can then be indexed into
    const ColumnFourRow = () =>
    <div className="row">
        <Col4Photo
            key={"photo0"}
            id={props.section[0].imageNumber}
            customorientation= {props.section[0].orientation}
            src={props.section[0].thumbnail}
            fullImage={props.section[0].URL}
        />
        <Col4Photo
            key={"photo1"}
            id={props.section[1].imageNumber}
            customorientation= {props.section[1].orientation}
            src={props.section[1].thumbnail}
            fullImage={props.section[1].URL}
        />
        <Col4Photo 
            key={"photo2"}
            id={props.section[2].imageNumber}
            customorientation= {props.section[2].orientation}
            src={props.section[2].thumbnail}
            fullImage={props.section[2].URL}
        />
    </div>;
    
    const ColumnTwelveRow = () =>
    <div className="row customCol12Style">
        <Col12Photo 
            key={"photo0"}
            id={props.section[0].imageNumber}
            customorientation= {props.section[0].orientation}
            src={props.section[0].thumbnail}
            fullImage={props.section[0].URL}
        />
    </div>;
    
    const ColumnSixRow = () =>
    <div className="row">
        <Col6Photo
            customClass={props.customClassLeft}
            key={"photo0"}
            id={props.section[0].imageNumber}
            customorientation= {props.section[0].orientation}
            src={props.section[0].thumbnail}
            fullImage={props.section[0].URL}
        />
        <Col6Photo 
            customClass={props.customClassRight}
            key={"photo1"}
            id={props.section[1].imageNumber}
            customorientation= {props.section[1].orientation}
            src={props.section[1].thumbnail}
            fullImage={props.section[1].URL}
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
        else if(props.gridSize === 12) {
            finalJSX = <ColumnTwelveRow section={props.section} gridSize={props.gridSize} />;
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