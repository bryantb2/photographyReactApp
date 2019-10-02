import React from 'react';
import './InfiniteScrollPage.css';
import Navbar from '../navbar/Navbar.js';
import PhotoGrid from '../photoGrid/PhotoGrid.js';

//imports for testing API system:
import PhotoAPI from '../../server/PhotoAPIWrapper.js';

class InfiniteScrollPage extends React.Component {
    //INPUT: takes in a genre name and makes a fetch call to the server for the photo data
    //page is loaded once the API call has completed
    constructor(props) {
        super(props);
        
        //Local Constructor Variables
        let APIDataObject = PhotoAPI.GetAPIData();
    
        this.state={
            //this essentially parses the data (sets the apidata to actual array of photos and NOT the entire object)
            APIData: APIDataObject.genreType,
            columnSize: 3,
            currentDropDownClass: "photoSelectorGroup-noDropDown",
        };
        
        //BINDS
        this.createEventListeners = this.createEventListeners.bind(this);
        this.handleDropdownLayout = this.handleDropdownLayout.bind(this);
        this.collapseGenreSelectorSpacing = this.collapseGenreSelectorSpacing.bind(this);
        this.expandGenreSelectorSpacing = this.expandGenreSelectorSpacing.bind(this);
        
        //METHOD CALLS
        
    }
    
    
    //LIFECYCLE METHODS
    componentDidMount() {
       //used to prevent premature collection of non-existent DOM elements
        this.createEventListeners();
    }

    
    //EVENT LISTENERS
    createEventListeners() {
        document.getElementById("dropdownMenuButton").addEventListener('click', this.handleDropdownLayout);
    }
    
    
    //EVENT HANDLERS
    handleDropdownLayout(e) {
        //this method changes the padding of the photoSelectorContainer when the genre dropdown button is clicked
        let button = e.target;
        let timer;
        if(this.state.currentDropDownClass === "photoSelectorGroup-noDropDown") {
            //adds the expanded styles if the current styling is not expanded
            this.expandGenreSelectorSpacing();
            //then run a timer that checks every second if the button still has the user's focus
                //if focus is lost, clear the timer (prevent performance bugs) and then collapse the selector UI container
            timer = setInterval(()=> {
                if(document.activeElement !== button) {
                    clearInterval(timer);
                    this.collapseGenreSelectorSpacing();
                }
            },200);
        }
        else if(this.state.currentDropDownClass === "photoSelectorGroup-dropDown") {
            //removes the expanded styles if the current styling is expanded
            clearInterval(timer);
            this.collapseGenreSelectorSpacing();
        }
    }
    
    //METHODS
    expandGenreSelectorSpacing() {
        this.setState({
                currentDropDownClass: "photoSelectorGroup-dropDown",
            });
    }
    
    collapseGenreSelectorSpacing() {
        this.setState({
                currentDropDownClass: "photoSelectorGroup-noDropDown",
            });
    }
    
    render() {
        return (
        <div id="InfiniteScrollPage">
            <Navbar alwaysFixed={true} />
            
            <div className={"d-flex justify-content-left " + this.state.currentDropDownClass}>
                <div className="p-2 infoStyle-GenrePage customGenreStyle-InfiniteScrollPage">
                    {this.props.genre}
                </div>
            
                <div className="p-2 verticalLineStyle-InfiniteScrollPage"></div>
            
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
            
            <section id="photos">
                <PhotoGrid photoArray={this.state.APIData} gridSize={this.state.columnSize}/>
            </section>
            
         </div>
        );
    }
}

export default InfiniteScrollPage;