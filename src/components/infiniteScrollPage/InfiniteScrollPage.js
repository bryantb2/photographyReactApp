import React from 'react';
import './InfiniteScrollPage.css';
import Navbar from '../navbar/Navbar.js';

class InfiniteScrollPage extends React.Component {
    //INPUT: takes in a genre name and makes a fetch call to the server for the photo data
    //page is loaded once the API call has completed
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div id="InfiniteScrollPage">
            <Navbar />
            
            <div className="d-flex justify-content-left">
                <div className="p-2 infoStyle-GenrePage">
                    {this.props.genre}
                </div>
                <div className="p-2">
                    <div className="portfolioDropdown dropdown">
                        <button className="genreSelectButton2 btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Genre
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Urban</a>
                            <a className="dropdown-item" href="#">Natural</a>
                            <a className="dropdown-item" href="#">Aerial</a>
                            <a className="dropdown-item" href="#">Portraits</a>
                        </div>
                    </div>
                </div>
            </div>    
         </div>
        );
    }
}

export default InfiniteScrollPage;