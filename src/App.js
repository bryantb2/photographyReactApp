import React from 'react';
import './App.css';
import backgroundImage from '../src/referenceImages/9DS_0066.JPG';
import textBoxVector from '../src/referenceImages/vectors/mainTitleVector.png';
import highlight1 from '../src/referenceImages/9DS_0353.JPG';
import backgroundImage2 from '../src/referenceImages/DSC_0530.JPG';

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

        <div className="d-flex scroll-info justify-content-center">
            <div className="p-2 scroll-text">Scroll Down for Mainpage</div>
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
          <div className="imageContainer">
            <img className="mainImage" src={backgroundImage}/>
          </div>
            <article className="contentContainer">
                <div className="d-flex justify-content-center headerStyle align-self-center">
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
        </section>
    
        
        <div id="highlightsDivider">
            <div className="d-flex justify-content-center align-self-center dividerHeader">
                <div className="p-2">Portfolio Highlights</div>
            </div>
            
            <div className="d-flex justify-content-center align-self-center dividerSubText">
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
            <div className="d-flex justify-content-center align-self-center dividerSubText">
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
        <div className="imageContainer2">
            <img className="mainImage2" src={backgroundImage2}/>
        </div>
          
    </section>



    </div>
    );
  }
}

export default App;
