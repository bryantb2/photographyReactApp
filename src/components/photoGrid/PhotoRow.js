import React from 'react';
import Col6Photo from './Col6Photo';
import Col4Photo from './Col4Photo';

function PhotoRow(props,gridSize) {
    
    const ColumnFourRow = (props) =>
    <div className="row">
        <Col4Photo 
            imageNumber={props.sectionNumber[0].imageNumber}
            custom-orientation= {props[0].orientation}
            src={props[0].sectionNumber.URL}
        />
        <Col4Photo 
            imageNumber={props[1].sectionNumber.imageNumber}
            custom-orientation= {props[1].sectionNumber.orientation}
            src={props[1].sectionNumber.URL}
        />
        <Col4Photo 
            imageNumber={props[2].sectionNumber.imageNumber}
            custom-orientation= {props[2].sectionNumber.orientation}
            src={props[2].sectionNumber.URL}
        />
    </div>;
    
    const ColumnSixRow = props =>
    <div className="row">
        <Col6Photo 
            imageNumber={props[0].imageNumber}
            custom-orientation= {props[0].orientation}
            src={props[0].URL}
        />
        <Col6Photo 
            imageNumber={props[1].imageNumber}
            custom-orientation= {props[1].orientation}
            src={props[1].URL}
        />
    </div>;
    
    const finaloutput = () => null;
    
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
        
    );
}

export default PhotoRow;