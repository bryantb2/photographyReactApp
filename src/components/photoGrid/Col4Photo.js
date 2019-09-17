import React from 'react';

function Col4Photo(props) {
    return (
        <div key={props.key} id={props.id} className="col-lg-4 col-md-4 col-4">
            <a href={props.fullImage} className="d-block mb-4 h-100">
                <img customorientation={props.customorientation} className="imageAnchor img-thumbnail" src={props.src} alt=""/>
            </a>
        </div>
    );
}

export default Col4Photo;