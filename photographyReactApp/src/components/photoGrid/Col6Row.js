import React from 'react';
import Col6Photo from './Col6Photo';

function Col6Row(props) {
    return(
        <div className="row">
            {(props.section[0] !== undefined)? 
                <Col6Photo
                    customClass={props.customClassLeft}
                    key={"photo0"}
                    id={props.section[0].imageNumber}
                    customorientation= {props.section[0].orientation}
                    src={props.section[0].thumbnail}
                    fullImage={props.section[0].URL}
                /> : null
            }
            {(props.section[1] !== undefined)? 
                <Col6Photo 
                    customClass={props.customClassRight}
                    key={"photo1"}
                    id={props.section[1].imageNumber}
                    customorientation= {props.section[1].orientation}
                    src={props.section[1].thumbnail}
                    fullImage={props.section[1].URL}
                /> : null
            }
        </div>
    );
}

export default Col6Row;