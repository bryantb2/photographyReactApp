import React from 'react';

function Col12Photo(props) {
    
    
    return (
        <div className="col-lg-12 col-md-12 col-12">
            <a href="#" className="d-block mb-4 h-100">
                <img custom-orientation={props.orientation} className="imageAnchor img-thumbnail" src={props.URL} alt=""/>
            </a>
        </div>
    );
}
export default Col12Photo;