import React from 'react';
import backgroundImage from '../src/referenceImages/9DS_0066.JPG';
import textBoxVector from '../src/referenceImages/vectors/mainTitleVector.png';
import './App.css';

  /*
        <div className="parent-container">
            <div className="child-container text-center">
                <h1 className="headerStyle">Bryant Photography</h1>
    
                <p className="infoStyle">Emphasis on drone shots and natural environments.</p>
    
                <button type="button" className="text-center btn btn-lg btn-light ">Portfolio</button>
            </div>
        </div>   
               
      */
/*
    <div id="page1">
      <div id="imageContainer">
        <img className="mainImage" src={backgroundImage}/>
      </div>
      
      <nav className="navbar navbar-expand-lg navbar-dark  customNavStyles">
      <div className="container-fluid">
          <a className="navbar-brand" href="#">Bryant Photography</a>
        
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto centeringStyle">
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
        </div>
        </nav>
    
        
        <article className="contentContainer">
        <div className="d-flex justify-content-center headerStyle align-self-center">
            <div className="p-2 X">Bryant Photography</div>
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
    
    </div>
*/

class App extends React.Component() {
    constructor() {
        super(props);
        
        this.state = {
            
        }
    }
    
    /* Test function
    function widthHeightCalc() {
        let height = window.innerHeight;
        let width = window.innerWidth;
        console.log(`height: ${height}     ` + `width: ${width}`);
    */
    
    function navBarStateSwitch() {
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
    }
    
        
        /*
        <div id="title-imageContainer">
        <img className="titleImage" src={textBoxVector}/>
      </div>
      
      
      <img className="titleImage d-block img-fluid mx-auto" src={textBoxVector}/>
      
      
      
      
      
      
      ----------------------------------------
      <div className='titleImage'>
          <div className="title-contentContainer d-flex ">
                
            <div className="d-flex justify-content-start">
                  <div className="p-2 titleOblique-text">So it would be a shame to not share a good story, right?</div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="p-2">&nbsp</div>
                <div className="p-2">Scroll Down for Mainpage</div>
                <div className="p-2">&nbsp</div>
            </div>
        </div>
      </div>
      <div className="d-flex justify-content-start">
                    <div className="p-2">High quality</div>
                </div>

                <div className="d-flex justify-content-start">
                      <div className="p-2"><span className="titleBold">photographs</span></div>
                </div>

                <div className="d-flex justify-content-start">
                    <div className="p-2">always tell a</div>
                </div>

                <div className="d-flex justify-content-start">
                    <div className="p-2"><span className="titleBold">story</span> or capture the</div>
                </div>

                <div className="d-flex justify-content-start">
                    <div className="p-2"><span className="titleBold">essence</span> of the subject...</div>
                </div>
            </div>
    }*/
render() {
  return (
      <div onScroll={navBarStateSwitch}>
        <div id="page1">
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
          </div>

          <div className="page-divider">
            <nav className="navbar navbar-expand-lg navbar-dark  customNavStyles-unFixed">
          <div className="container-fluid">
              <a className="navbar-brand" href="#">Bryant Photography</a>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto centeringStyle">
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
            </div>
            </nav>
          </div>

          <div id="page2">
          <div id="imageContainer">
            <img className="mainImage" src={backgroundImage}/>
          </div>
            <article className="contentContainer">
            <div className="d-flex justify-content-center headerStyle align-self-center">
                <div className="p-2 X">Bryant Photography</div>
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

        </div>
    </div>
    );
  }
}

export default App;
