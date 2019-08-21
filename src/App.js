import React from 'react';
import backgroundImage from '../src/referenceImages/9DS_0066.JPG';
import './App.css';

/*
 */

function App() {
    
  return (
    <div>
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
    
    
  
        <div className="parent-container">
            <div className="child-container text-center">
                <h1 className="headerStyle">Bryant Photography</h1>
    
                <p className="infoStyle">Emphasis on drone shots and natural environments.</p>
    
                <button type="button" className="text-center btn btn-lg btn-light ">Portfolio</button>
            </div>
        </div>
                
            

          
    
    
    
    </div>
  );
}

export default App;
