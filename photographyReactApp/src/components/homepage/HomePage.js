import React from 'react';
//file assets
import './HomePage.css';
import '../../App.css';
import PhotoGrid from '../photoGrid/PhotoGrid.js';
import Navbar from '../navbar/Navbar.js';
import ContactInfo from '../footer/ContactInfo.js';

//image assets
import backgroundImage from '../../referenceImages/9DS_0066.JPG';
import backgroundImage2 from '../../referenceImages/DSC_0530.JPG';



//imports for testing API system:
import PhotoAPI from '../../server/PhotoAPIWrapper.js';
import APIDataParser from '../utilityComponents/APIDataParser.js';
import PhotoGridGenerator from '../utilityComponents/PhotoGridGenerator.js';

// imports for UI components
import CoverSection from './CoverSection.js';
import HomeSection from './HomeSection.js';
import AboutSection from './AboutSection.js';
import Divider from '../sharedUIComponents/Divider.js';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        
        // TODO: REPLACE THIS WITH A FETCH TO MONGO
        this.APIDataObject = PhotoAPI.GetAPIData("highlights");
        
        this.state={
            //this essentially parses the data (sets the apidata to actual array of photos and NOT the entire object)
            APIData: APIDataParser.parseAndSection(this.APIDataObject),
            columnSize: 3,
        };
        
        //BINDS
        this.createEventListeners = this.createEventListeners.bind(this);
        this.photoGridResizeHandler = this.photoGridResizeHandler.bind(this);
        this.initializeColmnSize = this.initializeColmnSize.bind(this);
        this.debounce = this.debounce.bind(this);
    }
    
    //LIFECYCLE METHODS
    componentDidMount() {
        this.createEventListeners();
        this.initializeColmnSize();
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
            this.setState({
                columnSize: 6,
            });
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
            
        <CoverSection />

        <div className="page-divider">
          <Navbar />
        </div>

        <HomeSection
            backgroundImage={backgroundImage}
        />

        <Divider
          dividerNumber={1}
          header={"Portfolio Highlights"}
          subHeader={"Click photos for expanded view."}
          />


        <section id="page3">
            <PhotoGridGenerator columnSize={this.state.columnSize} formattedImageObjectArray={this.state.APIData} numberOfSectionsToRender={3}/>
        </section>  


        <Divider
            dividerNumber={2}
            header={"Checkout More Photos"}
            subHeader={"For more of my work, visit the portfolio section of this site."}   
        />
        
        <AboutSection 
            backgroundImage={backgroundImage2}
        />  

        <footer id="contactInfo">
            <ContactInfo />
        </footer>
    </div>
  );
  }  
}

export default HomePage;