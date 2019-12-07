import React from 'react';
import Styles from './AboutSection.module.css';

function AboutSection(props) {
    return(
        <section id="aboutSection" className={Styles.topLevelContainer}>
            <article className={Styles.contentContainer + " row d-flex justify-content-center"}>
                <div className="col-9">
                    <div className={"d-flex justify-content-left " + Styles.infoHeader + " " + Styles.customMargin}>
                        <div className="p-2">Bio Information</div>
                    </div>
                </div>
                
                <div className="col-9">
                    <div className={"d-flex justify-content-center " + Styles.bioInfoSubText + " " + Styles.customParaMargin}>
                      <p className="p-2">My name is Blake Bryant, and, as you have probably already discovered, I have a love for photography. More specifically, I seek to capture “the asthetic”. This is the satisfying sensation a viewer gets from, one, finding an image visually pleasing and, two, feeling a connection to the subject.</p>
                    </div>
                </div>
                
                <div className="col-9">
                    <div className={"d-flex justify-content-center " + Styles.bioInfoSubText}>
                          <p className="p-2">My favorite types of photography usually involve a drone and forested enviroment rich in detail, as you will see. I personally find aerial photos to be the most effective way of capturing landscape photos due to the unique perspective and scope of the scenery that can be shown. However, I am comfortable with snapping a host of photograph types consisting of, but not limited to, action shots, portraits, landscapes, and light painting. I have experience in a variety of settings ranging from highly urbanized cities to beaches.</p>
                    </div>
                </div>
            </article>

            <div className={Styles.imageContainer2}>
                <img className={Styles.mainImage2} src={props.backgroundImage}/>
            </div>
        </section>
    );
}

export default AboutSection;