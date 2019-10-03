import React from 'react';
import './App.css';
import HomePage from '../src/components/homepage/HomePage.js';
import PortfolioPageSelection from '../src/components/infiniteScrollPage/PortfolioPageSelection.js';

//TESTING INFINITE SCROLL
import PhotoPage from './components/infiniteScrollPage/InfiniteScrollPage.js';



class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            greeting: "hello there",
        }
        
        
        //BINDS
    }
    
    
    //METHODS
    
    
    
    //API CALL TEST
    //1. call and store api
    //2. pass api info into
    
        
render() {
    //props will be passed down into HomePage (will contain )
      //<PortfolioPageSelection />
      //
    //
  return (
      <PhotoPage genre="Natural"/>
    );
  }
}

export default App;
