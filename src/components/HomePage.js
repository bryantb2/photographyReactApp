import React from 'react';
import './HomePage.css';
import '../App.css';
import backgroundImage from '../../src/referenceImages/9DS_0066.JPG';
import textBoxVector from '../../src/referenceImages/vectors/mainTitleVector.png';
import highlight1 from '../../src/referenceImages/9DS_0353.JPG';
import backgroundImage2 from '../../src/referenceImages/DSC_0530.JPG';
import emailIcon from '../../src/referenceImages/icons/emailIcon.png';
import locationIcon from '../../src/referenceImages/icons/locationIcon.png';
import phoneIcon from '../../src/referenceImages/icons/phoneIcon.png';
import socialMediaIcon from '../../src/referenceImages/icons/socialMediaIcon.png';

function HomePage() {
    //GLOBAL VARIABLES
    let navBar = null;
    let navBarHeight = null;
    window.onload = function() {
        //assigns values to variables after the page has loaded
        navBar = document.getElementById('navigationBar');
        navBarHeight = navBar.offsetTop;
    }
    
    //EVENT LISTENERS
    window.addEventListener('scroll', afixNavbar);
    
    
    //EVENT HANDLER METHODS
    function afixNavbar() {
        //function will calculate navbar and pageOffset height to make the navbar stick or unstick to the top
        if(window.pageYOffset > navBarHeight) {
            navBar.classList.add("customNavStyles-Fixed");
        }
        else {
            navBar.classList.remove("customNavStyles-Fixed");
        }
        console.log(`this is the navBar offset: ${navBarHeight};    this is the pageYOffset: ${window.scrollY}`);
    }
    
    //presentational components for col 6 photos
    const ColumnSixImage = props =>
    <div id={props.imageNumber} className="col-lg-6 col-md-6 col-6">
        <a href="#" className="d-block mb-4 h-100">
            <img className="imageAnchor img-thumbnail" src={props.URL} alt=""/>
        </a>
    </div>;
    
    
    const ColumnTwelveImage = props =>
    <div className="col-lg-12 col-md-12 col-12">
        <a href="#" className="d-block mb-4 h-100">
            <img className="imageAnchor img-thumbnail" src={highlight1} alt=""/>
        </a>
    </div>;
    
    //presentation compoents for col 4 photos
    const ColumnFourImage = props =>
    <div id={props.imageNumber} className="col-lg-4 col-md-4 col-4">
        <a href="#" className="d-block mb-4 h-100">
            <img className="imageAnchor img-thumbnail" src={props.URL} alt=""/>
        </a>
    </div>;
    
    
  return (
    <div>
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
        <nav id="navigationBar" className="navbar navbar-expand-lg navbar-dark customNavStyles-unFixed">
      
          <a className="navbar-brand" href="#">Bryant Photography</a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#page2">Home<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#page3">Highlights<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Portfolio<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#page4">About<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#contactInfo">Share<span className="sr-only">(current)</span></a>
                </li>
            </ul>
          </div>
    
        </nav>
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

    
    <section id="page3Hidden">
        <div className="row">
        </div>
    
        <div className="row">
        </div>
    
        <div className="row">
        </div>
    
        <div className="row">
        </div>
    
        <div className="row">
        </div>
    </section>

    <section id="page3">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-4">
                <a href="#" className="d-block mb-4 h-100">
                    <img className="imageAnchor img-thumbnail" src={highlight1} alt=""/>
                </a>
            </div>

            <div className="col-lg-4 col-md-4 col-4">
                <a href="#" className="d-block mb-4 h-100">
                    <img className="imageAnchor img-thumbnail" src={highlight1} alt=""/>
                </a>
            </div>
            <div className="col-lg-4 col-md-4 col-4">
                <a href="#" className="d-block mb-4 h-100">
                    <img className="imageAnchor img-thumbnail" src={highlight1} alt=""/>
                </a>
            </div>
        </div>
         <div className="row">
            <div className="col-lg-4 col-md-4 col-4">
                <a href="#" className="d-block mb-4 h-100">
                    <img className="imageAnchor img-thumbnail" src={highlight1} alt=""/>
                </a>
            </div>

            <div className="col-lg-4 col-md-4 col-4">
                <a href="#" className="d-block mb-4 h-100">
                    <img className="imageAnchor img-thumbnail" src={highlight1} alt=""/>
                </a>
            </div>
            <div className="col-lg-4 col-md-4 col-4">
                <a href="#" className="d-block mb-4 h-100">
                    <img className="imageAnchor img-thumbnail" src={highlight1} alt=""/>
                </a>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-4 col-4">
                <a href="#" className="d-block mb-4 h-100">
                    <img className="imageAnchor img-thumbnail" src={highlight1} alt=""/>
                </a>
            </div>

            <div className="col-lg-4 col-md-4 col-4">
                <a href="#" className="d-block mb-4 h-100">
                    <img className="imageAnchor img-thumbnail" src={highlight1} alt=""/>
                </a>
            </div>
            <div className="col-lg-4 col-md-4 col-4">
                <a href="#" className="d-block mb-4 h-100">
                    <img className="imageAnchor img-thumbnail" src={highlight1} alt=""/>
                </a>
            </div>
        </div>
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

export default HomePage;