import React from 'react';
import Col6Photo from './Col6Photo';

function PhotoRow(props) {
    return(
        <div className="row">
            {props.children}
        </div>
    );
}

export default PhotoRow;