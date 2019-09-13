import React from 'react';

function Col4Photo(props) {
    return (
        <div id={props.imageNumber} className="col-lg-4 col-md-4 col-4">
            <a href="#" className="d-block mb-4 h-100">
                <img custom-orientation={props.orientation} className="imageAnchor img-thumbnail" src={props.URL} alt=""/>
            </a>
        </div>
    );
}

export default Col4Photo;