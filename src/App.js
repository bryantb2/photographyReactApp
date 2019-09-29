import React from 'react';
import './App.css';
import HomePage from '../src/components/homepage/HomePage.js';
import PortfolioPage from '../src/components/infiniteScrollPage/PortfolioPage.js';



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
    //
    //<HomePage />
  return (
      <PortfolioPage />
    );
  }
}

export default App;
