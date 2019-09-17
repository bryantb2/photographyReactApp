import React from 'react';
import PhotoRow from './PhotoGrid';


//PHOTOGRID COLUMN FOUR (per image)
    //map sectioned image collection to THREE photoRow(s)
            //takes a sectioned portion of the array and maps it to a photo component
function ColumnFourGrid(props) {
    console.log("inside colmnfourgrid, logging sectionedArray");
    console.log(props.sectionedArray);
    const row = "row";
    return (
        <div className="gridSection">
            {
            props.sectionedArray.map((section,index) =>
                <PhotoRow 
                    key={row.toString() + index} 
                    sectionIndex={index} section={section} 
                    gridSize={props.gridSize}
                />)
            }
        </div>
    );
}
export default ColumnFourGrid;