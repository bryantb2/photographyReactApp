import React from 'react';
import PhotoRow from './PhotoGrid';


//PHOTOGRID COLUMN FOUR (per image)
    //map sectioned image collection to THREE photoRow
            //takes a sectioned portion of the array and maps it to a photo component
function ColumnFourGrid(props) {
        return (
            <div className="gridSection">
                {props.sectionedArray.map(section =>
                    <PhotoRow section={section} gridSize={props.gridSize} />)}
            </div>
        );
    }
export default ColumnFourGrid;