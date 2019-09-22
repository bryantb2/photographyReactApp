import React from 'react';
import '../../App.css';
import './PortfolioPage.css';
import Navbar from '../navbar/Navbar.js';

function PortfolioPage() {
    
    
    return (
        <div id="portfolioPage">
            <Navbar />
    
            <article className="contentContainer customPortfolioContainer">
                <div className="d-flex justify-content-center headerStyle">
                    <div className="p-2">Portfolio Gallery</div>
                </div>

                <div className="d-flex justify-content-center infoStyle">
                      <div className="p-2">Select a Genre to Begin.</div>
                </div>

                <div className="d-flex justify-content-center lineStyle customPortfolioLineStyle">
                      <div className="p-2">&nbsp;</div>
                </div>

                <div className="d-flex justify-content-center">
                    <div className="portfolioDropdown dropdown">
                        <button className="genreSelectButton1 btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
            </article>
    
        </div>
    );
}

export default PortfolioPage;