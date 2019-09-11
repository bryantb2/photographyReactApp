import React from 'react';
import '././App.css';
import './PhotoGrid.css';
import Col12Photo from './Col12Photo';
import Col6Photo from './Col6Photo';
import Col4Photo from './Col4Photo';

function PhotoGrid(props,gridSize) {
    //INPUT: will take in props (from API call) and grid size
    //WORKING ASSUMPTION: gridSize is an integer that is either 4 or 6
    //WORKING ASSUMPTION: props is an array of NINE image objects
    //WORKING ASSUMPTION: each object will, AT LEAST, contain an imageNumber, URL, and orientation key:value pair

    
    //SUB-FUNCTIONS
    //photo grid with 4 colmn photos
    const ColumnFourGrid = props =>
        <div className="gridSection">
            <div className="row">
                <Col4Photo 
                    imageNumber={props.imageNumber}
                    custom-orientation= {props.orientation}
                    src={props.URL}
                />
                <Col4Photo 
                    imageNumber={props.imageNumber}
                    custom-orientation= {props.orientation}
                    src={props.URL}
                />
                <Col4Photo 
                    imageNumber={props.imageNumber}
                    custom-orientation= {props.orientation}
                    src={props.URL}
                />
            </div>
             <div className="row">
                <Col4Photo 
                    imageNumber={props.imageNumber}
                    custom-orientation= {props.orientation}
                    src={props.URL}
                />
                <Col4Photo 
                    imageNumber={props.imageNumber}
                    custom-orientation= {props.orientation}
                    src={props.URL}
                />
                <Col4Photo 
                    imageNumber={props.imageNumber}
                    custom-orientation= {props.orientation}
                    src={props.URL}
                />
            </div>
            <div className="row">
                <Col4Photo 
                    imageNumber={props.imageNumber}
                    custom-orientation= {props.orientation}
                    src={props.URL}
                />
                <Col4Photo 
                    imageNumber={props.imageNumber}
                    custom-orientation= {props.orientation}
                    src={props.URL}
                />
                <Col4Photo 
                    imageNumber={props.imageNumber}
                    custom-orientation= {props.orientation}
                    src={props.URL}
                />
            </div>
        </div>;
    
    //photo grid with 6 colmn photos
    const ColumnSixGrid = props =>
        <div className="gridSection">
            <div className="row">
                <Col12Photo />
            </div>
            <div className="row">
                <Col4Photo />
                <Col6Photo />
            </div>
             <div className="row">
                <Col6Photo />
                <Col6Photo />
            </div>
            <div className="row">
                <Col6Photo />
                <Col6Photo />
            </div>
            <div className="row">
                <Col6Photo />
                <Col6Photo />
            </div>
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
        <finaloutput />
    );
}

export default PhotoGrid;