import React from 'react';
import Styles from './HomeSection.module.css';
import Button from '../sharedUIComponents/Button.js';

function HomeSection(props) {
    return(
        <section id="section2">
            <article className={Styles.contentContainer}>
                <div className={Styles.headerStyle + " d-flex justify-content-center"}>
                    <div className="p-2">Bryant Photography</div>
                </div>

                <div className={"d-flex justify-content-center " + Styles.infoStyle}>
                      <div className="p-2">Emphasis on drone shots and natural environments.</div>
                </div>

                <div className={Styles.lineStyle + " d-flex justify-content-center mb-3"}>
                      <div className="p-2">&nbsp;</div>
                </div>

                <div className="d-flex justify-content-center">
                    <Button
                        destination={"/selectportfolio"}
                        text={"Portfolio"}
                    />
                </div>
            </article>

            <div className={Styles.imageContainer}>
                <img className={Styles.mainImage} src={props.backgroundImage}/>
            </div>
        </section>
    );
}

export default HomeSection;