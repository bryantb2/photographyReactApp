import React from 'react';
import './HomePage.css';
import '../../App.css';
import PhotoGrid from '../photoGrid/PhotoGrid.js';
import Navbar from '../navbar/Navbar.js';
import backgroundImage from '../../referenceImages/9DS_0066.JPG';
import textBoxVector from '../../referenceImages/vectors/mainTitleVector.png';
import highlight1 from '../../referenceImages/9DS_0353.JPG';
import backgroundImage2 from '../../referenceImages/DSC_0530.JPG';
import emailIcon from '../../referenceImages/icons/emailIcon.png';
import locationIcon from '../../referenceImages/icons/locationIcon.png';
import phoneIcon from '../../referenceImages/icons/phoneIcon.png';
import socialMediaIcon from '../../referenceImages/icons/socialMediaIcon.png';

//imports for testing:
import TestAPI from '../../server/TestAPI.js';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        
        //Local Constructor Variables
        let APIDataObject = TestAPI();
    
        this.state={
            //this essentially parses the data (sets the apidata to actual array of photos and NOT the entire object)
            APIData: APIDataObject.apiArray.genreType,
            columnSize: 3,
        };
        
        //GLOBAL VARIABLES
        
        //BINDS
        
        //METHOD CALLS AND EVENT ASSIGNMENT
    }

    //EVENT HANDLER METHODS
    /*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
    
    /*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
    
  render() {
      return (
    <div id="homepage-wrapper">
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
      

      <div className="page-divider">
          <Navbar />
      </div>
    

    <section id="page2">
        <article className="contentContainer">
            <div className="d-flex justify-content-center headerStyle">
                <div className="p-2">Bryant Photography</div>
            </div>

            <div className="d-flex justify-content-center infoStyle">
                  <div className="p-2">Emphasis on drone shots and natural environments.</div>
            </div>

            <div className="d-flex justify-content-center lineStyle">
                  <div className="p-2">&nbsp;</div>
            </div>

            <div className="d-flex justify-content-center">
                  <button type="button" className="text-center btn btn-lg btn-light portfolioButton">Portfolio</button>
            </div>
        </article>

        <div className="imageContainer">
            <img className="mainImage" src={backgroundImage}/>
        </div>
    </section>


    <div id="highlightsDivider">
        <div className="d-flex justify-content-center dividerHeader">
            <div className="p-2">Portfolio Highlights</div>
        </div>

        <div className="d-flex justify-content-center dividerSubText">
            <div className="p-2 highlightsDivider-subText">Click photos for expanded view.</div>
        </div>
    </div>

      
    <section id="page3">
        <PhotoGrid photoArray={this.state.APIData} gridSize={3}/>
    </section>  


    <div id="moreInfoDivider">
        <div className="d-flex justify-content-center dividerSubText">
            <div className="p-2 moreInfoDivider-subText">For more of my work, visit the portfolio section of this site.</div>
        </div>
        <div className="d-flex justify-content-center infoDivider-lineStyle">
            <div className="p-2">&nbsp;</div>
        </div>
        <div className="d-flex justify-content-center">
              <button type="button" className="portfolioButton text-center btn btn-lg btn-light ">Portfolio</button>
        </div>
    </div>
        
    
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
            <img className="mainImage2" src={backgroundImage2}/>
        </div>
    </section>
    
    
    <footer id="contactInfo">
        <div className="container footer-contentContainer">
            <div className="row customContentJustify-center customHeaderAlignText">
                <div className="col-lg-8 col-md-8 col-8 contactInfoHeader">
                    Contact Information
                </div>
            </div>
            <div className="row customContentJustify-center">
                <div className="col-lg-8 col-md-8 col-8 dividerSubText contactInfo-subHeaderText">
                    For business inquires, comments, or questions about my work:
                </div>
            </div>
        
            <div className="row">
                <div className="col-lg-4 col-md-4 col-4 footerLeftSection footer-subText">
                    <div className="d-flex justify-content-left">
                        <div className="p-2">
                            <img className="icon specialMaxIconWidth" width="16" src={locationIcon}/>
                        </div>
                        <div className="p-2">Eugene, Oregon, USA</div>
                    </div>
                    <div className="d-flex justify-content-left">
                        <div className="p-2">
                            <img className="icon maxIconWidth" width="20" src={emailIcon}/>
                        </div>
                        <div className="p-2">bryantb2@my.lanecc.edu</div>
                    </div>
                    <div className="d-flex justify-content-left">
                        <div className="p-2">
                            <img className="icon maxIconWidth" width="20" src={phoneIcon}/>
                        </div>
                        <div className="p-2">541-505-0520</div>
                    </div>
                    <div className="d-flex justify-content-left">
                        <div className="p-2">
                            <img className="icon maxIconWidth" width="20" src={socialMediaIcon}/>
                        </div>
                        <div className="p-2">bryantb2</div>
                    </div>
                </div>
                
                <div className="col-lg-1 col-md-1 col-1 m-1">
                </div>
                <div className="col-lg-1 col-md-1 col-1 m-1 verticalLineStyle">
                </div>

                <div className="col-lg-4 col-md-4 col-4 footerRightSection">
                    <div className="d-flex customContentJustify-right">
                        <div className="p-2 footer-subText">Please consider sharing this site:</div>
                    </div>
                    <div className="d-flex customContentJustify-right customPadding">
                          <button type="button" className="shareButton text-center btn btn-lg btn-light ">Share</button>
                    </div>
                </div>

            </div>
        </div>
    </footer>
    </div>
  );
  }  
}

export default HomePage;