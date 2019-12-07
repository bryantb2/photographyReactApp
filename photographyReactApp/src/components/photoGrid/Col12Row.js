import React from 'react';
import Col12Photo from './Col12Photo';

function Col12Row(props) {
    return(
        <div className="row customCol12Style">
            <Col12Photo 
                key={"photo0"}
                id={props.section[0].imageNumber}
                customorientation= {props.section[0].orientation}
                src={props.section[0].thumbnail}
                fullImage={props.section[0].URL}
            />
        </div>
    );
}

export default Col12Row;