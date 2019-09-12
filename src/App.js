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
    
    
    
    
        
        
render() {
    //props will be passed down into HomePage (will contain )
    //<PortfolioPage />
    //
  return (
      <HomePage />
    );
  }
}

export default App;
