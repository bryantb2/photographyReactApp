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
import Button from '../sharedUIComponents/Button.js';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        
        // TODO: REPLACE THIS WITH A FETCH TO MONGO
        this.APIDataObject = PhotoAPI.GetAPIData("highlights");
        
        this.state={
            //this essentially parses the data (sets the apidata to actual array of photos and NOT the entire object)
            APIData: APIDataParser.parseAndSection(this.APIDataObject),
        };
    }
    
    
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


        <section id="highlights">
            <PhotoGridGenerator formattedImageObjectArray={this.state.APIData} numberOfSectionsToRender={3}/>
        </section>  


        <Divider
            dividerNumber={2}
            header={"Checkout More Photos"}
            subHeader={"For more of my work, visit the portfolio section of this site."}   
        />
        
        <AboutSection 
            backgroundImage={backgroundImage2}
        />  

        
        <ContactInfo />
    </div>
  );
  }  
}

export default HomePage;