import React from 'react';
import Col6Photo from './Col6Photo';
import Col4Photo from './Col4Photo';

function PhotoRow(props, gridSize) {
    
    //WORKING ASSUMPTION: row will take in a section of 2-3 photo objects that can then be indexed into
    const ColumnFourRow = (props) =>
    <div className="row">
        <Col4Photo
            key={props.key + ":" + 0}
            imageNumber={props.section[props.sectionIndex][0].imageNumber}
            custom-orientation= {props.section[props.sectionIndex][0].orientation}
            src={props.section[props.sectionIndex][0].URL}
        />
        <Col4Photo
            key={props.key + ":" + 1}
            imageNumber={props.section[props.sectionIndex][1].imageNumber}
            custom-orientation= {props.section[props.sectionIndex][1].orientation}
            src={props.section[props.sectionIndex][1].URL}
        />
        <Col4Photo 
            key={props.key + ":" + 2}
            imageNumber={props.section[props.sectionIndex][2].imageNumber}
            custom-orientation= {props.section[props.sectionIndex][2].orientation}
            src={props.section[props.sectionIndex][2].URL}
        />
    </div>;
    
    const ColumnSixRow = (props) =>
    <div className="row">
        <Col6Photo 
            key={props.key + ":" + 0}
            imageNumber={props.section[props.sectionIndex][0].imageNumber}
            custom-orientation= {props.section[props.sectionIndex][0].orientation}
            src={props.section[props.sectionIndex][0].URL}
        />
        <Col6Photo 
            key={props.key + ":" + 1}
            imageNumber={props.section[props.sectionIndex][1].imageNumber}
            custom-orientation= {props.section[props.sectionIndex][1].orientation}
            src={props.section[props.sectionIndex][1].URL}
        />
    </div>;
    
    /*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
    
    //CONDITIONAL RENDER FUNCTION
    const finaloutput = props => {
        //returnedJSX will store the final output to be returned
        //conditionally render row based on gridSize
        let finalJSX = null;
        if(props.gridSize === 6) {
            //fill the grid
            //assign it to final output
            finalJSX = <ColumnSixRow key={props.key} section={props.section} gridSize={props.gridSize} />;
        }
        else {
            finalJSX = <ColumnFourRow key={props.key} section={props.section} gridSize={props.gridSize} />;
        }
        return finalJSX;
    };
    
    return (
        <finaloutput props={props}/>
    );
}

export default PhotoRow;