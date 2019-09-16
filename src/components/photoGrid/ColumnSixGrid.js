import React from 'react';
import Col12Photo from './Col12Photo';
import PhotoRow from './PhotoGrid';


//PHOTOGRID COLUMN SIX (per image)
    //map sectioned image collection to TWO photoRow
            //takes a sectioned portion of the array and maps it to a photo component
function ColumnSixGrid(props) {
        return (
            <div className="gridSection">
                <div className="row">
                    <Col12Photo />
                </div>
                {props.sectionedArray.map(section =>
                    <PhotoRow section={section} gridSize={props.gridSize}/>)}
            </div>
        );
    }
export default ColumnSixGrid;