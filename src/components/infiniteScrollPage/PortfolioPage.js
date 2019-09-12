import React from 'react';
import '../../App.css';
import './PortfolioPage.css';

function PortfolioPage() {
    
    
    return (
        <div id="portfolioPage">
            <nav className="navbar navbar-expand-lg navbar-dark customNavStyles-unFixed">

              <a className="navbar-brand" href="#">Bryant Photography</a>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
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
            </nav>
    
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