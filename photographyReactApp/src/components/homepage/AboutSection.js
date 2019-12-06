import React from 'react';
import Styles from './AboutSection.module.css';

function AboutSection(props) {
    return(
        <section id="page4">
            <article className="contentContainer contentBoxRestricted">
                <div className="d-flex justify-content-left dividerHeader bioInfo-customMargin">
                    <div className="p-2">Bio Information</div>
                </div>
                <br/>
                <div className="d-flex justify-content-center bioInfo-subText bioInfo-customParaMargin">
                      <p className="p-2">My name is Blake Bryant, and, as you have probably already discovered, I have a love for photography. More specifically, I seek to capture “the asthetic”. This is the satisfying sensation a viewer gets from, one, finding an image visually pleasing and, two, feeling a connection to the subject.</p>
                </div>

                <div className="d-flex justify-content-center bioInfo-subText">
                      <p className="p-2">My favorite types of photography usually involve a drone and forested enviroment rich in detail, as you will see. I personally find aerial photos to be the most effective way of capturing landscape photos due to the unique perspective and scope of the scenery that can be shown. However, I am comfortable with snapping a host of photograph types consisting of, but not limited to, action shots, portraits, landscapes, and light painting. I have experience in a variety of settings ranging from highly urbanized cities to beaches.</p>
                </div>
            </article>

            <div className="imageContainer2">
                <img className="mainImage2" src={props.backgroundImage}/>
            </div>
        </section>
    );
}

export default AboutSection;