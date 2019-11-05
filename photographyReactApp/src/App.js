import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './History.js';
import './App.css';
import HomePage from '../src/components/homepage/HomePage.js';
import PortfolioSelection from '../src/components/infiniteScrollPage/PortfolioPageSelection.js';
import InfiniteScrollPage from './components/infiniteScrollPage/InfiniteScrollPage.js';

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
            <div className="ui container">
            <Router history={History}>
                <div>
                    <Switch>
                        <Route path="/" component={HomePage} />
                        <Route path="/portfolioselection" exact component={PortfolioSelection} />
                        <Route path="/gallery" exact component={InfiniteScrollPage} />
                    </Switch>
                </div>
            </Router>
            </div>
        );
    }
}

export default App;
