import React from 'react';
import Styles from './CoverPage.module.css';
import textBoxVector from '../../referenceImages/vectors/mainTitleVector.png';

function CoverPage(props) {
    return(
        <section id="page1">
            <img className="titleImage d-block img-fluid mx-auto" src={textBoxVector}/>

            <div className="d-flex justify-content-center">
                  <div className="p-2 titleOblique-text">So it would be a shame to not share a good story, right?</div>
            </div>

            <div className="d-flex justify-content-center">
                  <div className="p-2 title-lineStyle"></div>
            </div>

            <div className="d-flex scroll-info justify-content-center scroll-text">
                <div className="p-2">Scroll Down for Mainpage</div>
            </div>
        </section>
    );
}

export default CoverPage;