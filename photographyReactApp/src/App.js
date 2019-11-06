import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import History from './History.js';

// Importing componenets and stylesheets
import HomePage from '../src/components/homepage/HomePage.js';
import PortfolioSelection from '../src/components/infiniteScrollPage/PortfolioPageSelection.js';
import InfiniteScrollPage from './components/infiniteScrollPage/InfiniteScrollPage.js';
import './App.css';

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
        return (
            <Router history={History}>
                <div>
                    <Switch>
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/portfolioselection" exact component={PortfolioSelection} />
                        <Route path="/gallery" exact component={InfiniteScrollPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
