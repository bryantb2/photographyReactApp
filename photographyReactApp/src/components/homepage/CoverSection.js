import React from 'react';
import Styles from './CoverPage.module.css';
import textBoxVector from '../../referenceImages/vectors/mainTitleVector.png';

function CoverSection(props) {
    return(
        <section id="section1" className={Styles.pageContainer}>
            <img className={Styles.titleImage + " d-block img-fluid mx-auto"} src={textBoxVector}/>

            <div className="d-flex justify-content-center">
                  <div className={"p-2 " + Styles.titleObliqueText}>So it would be a shame to not share a good story, right?</div>
            </div>

            <div className="d-flex justify-content-center">
                  <div className={"p-2 " + Styles.lineStyle}></div>
            </div>

            <div className={"d-flex justify-content-center " + Styles.scrollText + " " + Styles.scrollInfo}>
                <div className="p-2">Scroll Down for Mainpage</div>
            </div>
        </section>
    );
}

export default CoverSection;