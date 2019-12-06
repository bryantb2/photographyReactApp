import React from 'react';
import Styles from './HomeSection.module.css';
import Button from '../sharedUIComponents/Button.js';

function HomeSection(props) {
    return(
        <section id="page2">
            <article className="contentContainer">
                <div className="d-flex justify-content-center headerStyle">
                    <div className="p-2">Bryant Photography</div>
                </div>

                <div className="d-flex justify-content-center infoStyle">
                      <div className="p-2">Emphasis on drone shots and natural environments.</div>
                </div>

                <div className="d-flex justify-content-center lineStyle mb-3">
                      <div className="p-2">&nbsp;</div>
                </div>

                <div className="d-flex justify-content-center">
                    <Button
                        destination={"/selectportfolio"}
                        text={"Portfolio"}
                    />
                </div>
            </article>

            <div className="imageContainer">
                <img className="mainImage" src={props.backgroundImage}/>
            </div>
        </section>
    );
}

export default HomeSection;