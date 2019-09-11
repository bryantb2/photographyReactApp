import React from 'react';

function Col6Photo(props) {
    
    return (
        <div id={props.imageNumber} className="col-lg-6 col-md-6 col-6">
            <a href="#" className="d-block mb-4 h-100">
                <img custom-orientation={props.orientation} className="imageAnchor img-thumbnail" src={props.URL} alt=""/>
            </a>
        </div>
    );
}

export default Col6Photo;