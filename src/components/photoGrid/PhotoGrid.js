import React from 'react';
import '././App.css';
import './PhotoGrid.css';
import Col12Photo from './Col12Photo';
import Col6Photo from './Col6Photo';
import Col4Photo from './Col4Photo';

function PhotoGrid(props,gridSize) {
    //grid size will accept 
    //will take in props (from API call) and grid size
    
    const ColumnFourGrid = props =>
        <div className="gridSection">
            <div className="row">
                <Col4Photo />
                <Col4Photo />
                <Col4Photo />
            </div>
             <div className="row">
                <Col4Photo />
                <Col4Photo />
                <Col4Photo />
            </div>
            <div className="row">
                <Col4Photo />
                <Col4Photo />
                <Col4Photo />
            </div>
        </div>;
    
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