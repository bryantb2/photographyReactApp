import React from 'react';
//file assets
import './HomePage.css';
import '../../App.css';
import PhotoGrid from '../photoGrid/PhotoGrid.js';
import Navbar from '../navbar/Navbar.js';
import ContactInfo from '../footer/ContactInfo.js';
//image assets
import textBoxVector from '../../referenceImages/vectors/mainTitleVector.png';
import backgroundImage from '../../referenceImages/9DS_0066.JPG';
import backgroundImage2 from '../../referenceImages/DSC_0530.JPG';

//imports for testing API system:
import PhotoAPI from '../../server/PhotoAPIWrapper.js';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        
        //Local Constructor Variables
        let APIDataObject = PhotoAPI.GetAPIData("highlights");
        
        this.state={
            //this essentially parses the data (sets the apidata to actual array of photos and NOT the entire object)
            APIData: APIDataObject.genreType,
            columnSize: 3,
        };
        
        //Global variables
        //these exist because setState cannot be called to update the column size when the page has not fully loaded
        this.initialColumnSize = 3;
        this.renderedOnce = false;
        
        //BINDS
        this.createEventListeners = this.createEventListeners.bind(this);
        this.photoGridResizeHandler = this.photoGridResizeHandler.bind(this);
        this.initializeColmnSize = this.initializeColmnSize.bind(this);
        this.debounce = this.debounce.bind(this);
        
        //METHOD CALLS
        this.initializeColmnSize();
    }
    
    //LIFECYCLE METHODS
    componentDidMount() {
        this.renderedOnce = true; //this controls which column variable is used in the returned JSX
        //true for renderedOnce means that the state variable will dictate how big the photogrid needs to be
        this.createEventListeners();
    }
    
    //EVENT LISTENERS
    createEventListeners() {
        window.addEventListener('resize', this.debounce(this.photoGridResizeHandler,1000));
    }
    
    
    //EVENT HANDLERS
    photoGridResizeHandler() {
        let windowWidth = window.innerWidth;
        //setState of colSize to 6 if below 800px
        if(windowWidth < 1050) {
            this.setState({
                columnSize: 6,
            });
        }
        //setState of colSize to 3 if not below but still set to 6
        else if(this.state.columnSize !== 3) {
            this.setState({
                columnSize: 3,
            });
        }
    }
    
    
    
    //METHODS
    initializeColmnSize() {
        //fills the state's columnSize property with data (setState not used because this is a pre-render function)
        let windowWidth = window.innerWidth;
        //setState of layoutSize to "small" if below 575px
        if(windowWidth < 1050) {
            this.initialColumnSize = 6;
            //this.state.columnSize = 6;
        }
        //no need for else statement to switch to 3 because layoutSize is already set to 3 by default
    }
    
    debounce(func, wait, immediate) {
        //debounce function prevents overloaded client
        //function borrowed from https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086
        let timeout;
        return function executedFunction() {
            let context = this;
            let args = arguments;
            
            let later = function() {
              timeout = null;
              if (!immediate) func.apply(context, args);
            };

            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
    
    
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
            <PhotoGrid photoArray={this.state.APIData} gridSize={this.renderedOnce==true?this.state.columnSize : this.initialColumnSize}/>
            <PhotoGrid photoArray={this.renderedOnce==true?this.state.columnSize : this.initialColumnSize}/>
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
            <ContactInfo />
        </footer>
    </div>
  );
  }  
}

export default HomePage;