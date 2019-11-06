import React from 'react';
import '../../App.css';
import styles from './PortfolioPage.module.css';
import Navbar from '../navbar/Navbar.js';
import { Link } from 'react-router-dom';

function PortfolioPageSelection() {
    
    
    return (
        <div id={styles.portfolioPage}>
            <Navbar />
    
            <article className={styles.customPortfolioContainer + " contentContainer "}>
                <div className={styles.headerStyleGenrePage + " d-flex justify-content-center"}>
                    <div className="p-2">Portfolio Gallery</div>
                </div>

                <div className={styles.infoStyleGenrePage + " d-flex justify-content-center "}>
                      <div className="p-2">Select a Genre to Begin.</div>
                </div>

                <div className={styles.customPortfolioLineStyle + " d-flex justify-content-center lineStyle "}>
                      <div className="p-2">&nbsp;</div>
                </div>

                <div className="d-flex justify-content-center">
                    <div className="portfolioDropdown dropdown">
                        <button className={styles.genreSelectButton + " btn btn-secondary dropdown-toggle"} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Genre
                        </button>
                        <div className={styles.customPortfolioDropdownMenu + " dropdown-menu"} aria-labelledby="dropdownMenuButton">
                            <Link className={styles.customPortfolioDropdownItem + " dropdown-item"} to="/gallery/urban">Urban</Link>
                            <Link className={styles.customPortfolioDropdownItem + " dropdown-item"} to="/gallery/natural">Natural</Link>
                            <Link className={styles.customPortfolioDropdownItem + " dropdown-item"} to="/gallery/aerial">Aerial</Link>
                            <Link className={styles.customPortfolioDropdownItem + " dropdown-item"} to="/gallery/portraits">Portraits</Link>
                        </div>
                    </div>
                </div>
            </article>
    
        </div>
    );
}

export default PortfolioPageSelection;