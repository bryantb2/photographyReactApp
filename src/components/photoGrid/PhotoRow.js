import React from 'react';
import Col6Photo from './Col6Photo';
import Col4Photo from './Col4Photo';

function PhotoRow(props,gridSize) {
    //WORKING ASSUMPTION: row will take in a section of 2-3 photo objects that can then be indexed into
    const ColumnFourRow = (props) =>
    <div className="row">
        <Col4Photo 
            imageNumber={props.section[0].imageNumber}
            custom-orientation= {props.section[0].orientation}
            src={props[0].URL}
        />
        <Col4Photo 
            imageNumber={props.section[1].imageNumber}
            custom-orientation= {props.section[1].orientation}
            src={props.section[1].URL}
        />
        <Col4Photo 
            imageNumber={props.section[2].imageNumber}
            custom-orientation= {props.section[2].orientation}
            src={props.section[2].URL}
        />
    </div>;
    
    const ColumnSixRow = (props) =>
    <div className="row">
        <Col6Photo 
            imageNumber={props.section[0].imageNumber}
            custom-orientation= {props.section[0].orientation}
            src={props.section[0].URL}
        />
        <Col6Photo 
            imageNumber={props.section[1].imageNumber}
            custom-orientation= {props.section[1].orientation}
            src={props.section[1].URL}
        />
    </div>;
    
    /*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
    
    //CONDITIONAL RENDER FUNCTION
    const finaloutput = props => {
        //returnedJSX will store the final output to be returned
        //conditionally render row based on gridSize
        let finalJSX = null;
        if(gridSize === 6) {
            //fill the grid
            //assign it to final output
            finalJSX = <ColumnSixRow section={props.section} gridSize = {gridSize}/>;
        }
        else {
            returnedJSX = <ColumnFourRow section={props.section} gridSize = {gridSize} />;
        }
        return finalJSX;
    };
    
    return (
        <finaloutput section={props.section}/>
    );
}

export default PhotoRow;