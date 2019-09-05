import React from 'react';
import './App.css';
import backgroundImage from '../src/referenceImages/9DS_0066.JPG';
import textBoxVector from '../src/referenceImages/vectors/mainTitleVector.png';
import highlight1 from '../src/referenceImages/9DS_0353.JPG';
import backgroundImage2 from '../src/referenceImages/DSC_0530.JPG';
import emailIcon from '../src/referenceImages/icons/emailIcon.png';
import locationIcon from '../src/referenceImages/icons/locationIcon.png';
import phoneIcon from '../src/referenceImages/icons/phoneIcon.png';
import socialMediaIcon from '../src/referenceImages/icons/socialMediaIcon.png';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
        }
        
        //BINDS 
        //this.navBarStateSwitch = this.navBarStateSwitch.bind(this);
    }
    
    /* Test function
    function widthHeightCalc() {
        let height = window.innerHeight;
        let width = window.innerWidth;
        console.log(`height: ${height}     ` + `width: ${width}`);
    */
    
    //METHODS
    /*
    navBarStateSwitch() {
        //get element from DOM
        let navBar = document.getElementById("navbar");
        //check if the current height on the page is higher than the navbar height
        if(window.scrollY > navBar.height()) {
            document.classList.remove('nav.customNavStyles-unFixed');
            document.classList.add('nav.customNavStyles-Fixed');
        }
            
        else if(window.scrollY < navBar.height()) {
            document.classList.remove('nav.customNavStyles-Fixed');
            document.classList.add('nav.customNavStyles-unFixed');
        }
        console.log("hey dude, inside the navBar styling function!");
    }*/
    
        
        
render() {
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
        <nav className="navbar navbar-expand-lg navbar-dark customNavStyles-unFixed">
      
          <a className="navbar-brand" href="#">Bryant Photography</a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Highlights<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Portfolio<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">About<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Share<span className="sr-only">(current)</span></a>
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
                  <button type="button" className="text-center btn btn-lg btn-light ">Portfolio</button>
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
            <div className="p-2">Click photos for expanded view.</div>
        </div>
    </div>


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
            <div className="p-2">For more of my work, visit the portfolio section of this site</div>
        </div>

        <div className="d-flex justify-content-center infoDivider-lineStyle">
            <div className="p-2">&nbsp;</div>
        </div>


        <div className="d-flex justify-content-center">
              <button type="button" className="text-center btn btn-lg btn-light ">Portfolio</button>
        </div>
    </div>
        
    
    <section id="page4">
        <article className="contentContainer flexboxRestricted">
            <div className="d-flex justify-content-left dividerHeader">
                <div className="p-2">Bio Information</div>
            </div>
            <br/>
            <div className="d-flex justify-content-center infoStyle">
                  <p className="p-2">My name is Blake Bryant, and, as you have probably already discovered, I have a love for photography. More specifically, I seek to capture “the asthetic”. This is the satisfying sensation a viewer gets from, one, finding an image visually pleasing and, two, feeling a connection to the subject.</p>
            </div>
    
            <div className="d-flex justify-content-center infoStyle">
                  <p className="p-2">My favorite types of photography usually involve a drone and forested enviroment rich in detail, as you will see. I personally find aerial photos to be the most effective way of capturing landscape photos due to the unique perspective and scope of the scenery that can be shown. However, I am comfortable with snapping a host of photograph types consisting of, but not limited to, action shots, portraits, landscapes, and light painting. I have experience in a variety of settings ranging from highly urbanized cities to beaches.</p>
            </div>
        </article>
        
        <div className="imageContainer2">
            <img className="mainImage2" src={backgroundImage2}/>
        </div>
    </section>
    
    
    <footer id="contactInfo">
        
        <div className="d-flex justify-content-center">
            <div className="p-2 dividerHeader">Contact Information</div>
        </div>
        <div className="d-flex justify-content-center">
            <div className="p-2 dividerSubText">For business inquires, comments, or questions about my work:</div>
        </div>
        
        <div className="container footer-contentContainer">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-4">
                    
                    <div className="footerLeftSection footer-subText">
                        <div className="d-flex justify-content-left">
                            <div className="p-2">
                                <img className="icon" width="16" src={locationIcon}/>
                            </div>
                            <div className="p-2">Eugene, Oregon, USA</div>
                        </div>
                        <div className="d-flex justify-content-left">
                            <div className="p-2">
                                <img className="icon" width="20" src={emailIcon}/>
                            </div>
                            <div className="p-2">bryantb2@my.lanecc.edu</div>
                        </div>
                        <div className="d-flex justify-content-left">
                            <div className="p-2">
                                <img className="icon" width="20" src={phoneIcon}/>
                            </div>
                            <div className="p-2">541-505-0520</div>
                        </div>
                        <div className="d-flex justify-content-left">
                            <div className="p-2">
                                <img className="icon" width="20" src={socialMediaIcon}/>
                            </div>
                            <div className="p-2">bryantb2</div>
                        </div>
                    </div>
    
                </div>

                <div className="col-lg-4 col-md-4 col-4 verticalLineStyle">
                    <div className="footerRightSection">
                        <div className="d-flex customContentJustify-right">
                            <div className="p-2 footer-subText">Please consider sharing this site:</div>
                        </div>
                        <div className="d-flex customContentJustify-right customPadding">
                              <button type="button" className="text-center btn btn-lg btn-light ">Share</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </footer>



    </div>
    );
  }
}

export default App;
