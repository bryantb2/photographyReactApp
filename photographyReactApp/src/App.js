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

        this.state = {}
    }
    render() {
        return (
            <Router history={History}>
                <div>
                    <Switch>
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/selectportfolio" exact component={PortfolioSelection} />
                        <Route path="/selectportfolio/:genre" render={props => <InfiniteScrollPage key={Date.now()} {...props} />} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
