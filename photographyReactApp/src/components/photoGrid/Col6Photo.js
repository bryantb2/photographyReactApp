import React from 'react';

function Col6Photo(props) {
    return (
        <div key={props.id} id={props.id} className={" col-lg-6 col-md-6 col-12"}>
            <a href={props.fullImage} className="d-block mb-4 h-100">
                <img customorientation={props.customorientation} className="loadingColor imageAnchor img-thumbnail" src={props.src} alt=""/>
            </a>
        </div>
    );
}

export default Col6Photo;