import React from 'react';
import Styles from './InfiniteScrollPage.module.css';
import Navbar from '../navbar/Navbar.js';
import PhotoGrid from '../photoGrid/PhotoGrid.js';
import SmartScroller from '../utilityComponents/SmartScroll.js';

//imports for testing API system:
import PhotoAPI from '../../server/PhotoAPIWrapper.js';
import APIDataParser from '../utilityComponents/APIDataParser.js';
import PhotoGridGenerator from '../utilityComponents/PhotoGridGenerator.js';

class InfiniteScrollPage extends React.Component {
    // INPUT: takes in a genre name and makes a fetch call to the server for the photo data
    constructor(props) {
        super(props);
        
        // GLOABAL VARIABLES
        this.rememberScrollPosition = new SmartScroller();
        // loading icon reference is here
        this.loadingIcon = null;
        
        // TODO: REPLACE THIS WITH A FETCH TO MONGO
        this.APIDataObject = PhotoAPI.GetAPIData(this.props.match.params.genre);
    
        this.state={
            genre: props.match.params.genre,
            APIData: APIDataParser.parseAndSection(this.APIDataObject),
            columnSize: 3,
            currentSectionNumber: 1,
            currentDropDownClass: Styles.photoSelectorGroupnoDropDown,
        };
        
        //BINDS
        this.createEventListeners = this.createEventListeners.bind(this);
        this.dropdownLayoutHandler = this.dropdownLayoutHandler.bind(this);
        this.collapseGenreSelector = this.collapseGenreSelector.bind(this);
        this.expandGenreSelector = this.expandGenreSelector.bind(this);
        this.debounce = this.debounce.bind(this);
        this.userScrollHandler = this.userScrollHandler.bind(this);
        this.disablePhotoScrollListener = this.disablePhotoScrollListener.bind(this);
        this.enablePhotoScrollListener = this.enablePhotoScrollListener.bind(this);
        this.isUserAtBottom = this.isUserAtBottom.bind(this);
        this.showLoadingIcon = this.showLoadingIcon.bind(this);
        this.hideLoadingIcon = this.hideLoadingIcon.bind(this);
        this.updateCurrentSectionCounter = this.updateCurrentSectionCounter.bind(this);
        this.getLoadingIcon = this.getLoadingIcon.bind(this);
        this.genreClickHandler = this.genreClickHandler.bind(this);
        this.enableGenreClickListeners = this.enableGenreClickListeners.bind(this);
        this.initializeColmnSize = this.initializeColmnSize.bind(this);
    }
    
    
    // LIFECYCLE METHODS
    componentDidMount() {
        // THIS METHOD IS used to prevent premature collection of non-existent DOM elements
        // preventing runtime crashing or errors by manually setting the first value
        this.getLoadingIcon();
        this.createEventListeners();
        this.initializeColmnSize();
    }
    
    componentWillUnmount() {
        // THIS METHOD will be used to remove event listeners and clear timers
        // prevents runtiume crashing when the page switches
        this.disablePhotoScrollListener();
    }

    
    // EVENT LISTENERS
    createEventListeners() { 
        //this is for non-scrolling event listeners
        document.getElementById("dropdownMenuButton").addEventListener('click', this.dropdownLayoutHandler);
        //initialized an event listener for the userScrollHandler
        this.enablePhotoScrollListener();
        this.enableGenreClickListeners();
    }
    
    enableGenreClickListeners() {
        let anchorNodes = document.getElementsByClassName("dropdown-item");
        for(let i = 0; i < anchorNodes.length; i++) {
            anchorNodes[i].addEventListener('click',this.genreClickHandler);
        }
    }
    
    enablePhotoScrollListener() {
        window.addEventListener('scroll',this.debounce(this.userScrollHandler,1000));
        //this function uses a timed enabling of the photoScroll listener function, prevents spamming
    }
    
    disablePhotoScrollListener() {
       // will help to prevent against a situation where the user is sitting at the bottom of the page making calls to photoScroll before the photos have actually updated on the UI
        window.removeEventListener('scroll',this.debounce(this.userScrollHandler,1000));
    }
    
    
    // EVENT HANDLERS
    userScrollHandler() {
        //this method controls when sections from the API call are rendered
        //if user gets 75% of the way down the page:
            //disable the userScrollHandler (to prevent excessive function calls)
            //display a circlular loading icon
            //push currentSectionCounter value to state counter collection
            //call photoGridGenerator and pass in state counter collection
            //disable loading icon
            //increment section counter
        //this is the safest way to concatenate values to a React state array (doing it any other way would result in errors because the state gets updated asynchronously)
        
        this.disablePhotoScrollListener();
        if(this.isUserAtBottom() === true) {
            if(!((this.state.APIData.length) === this.state.currentSectionNumber)) { 
                this.showLoadingIcon();
                setTimeout(() => {
                    this.hideLoadingIcon();
                }, 1000);
                this.rememberScrollPosition.prepareFor(window.pageYOffset);
                this.updateCurrentSectionCounter();
                setTimeout(() => window.scrollTo(0,this.rememberScrollPosition.restorePosition()), 100)
            }
        }
        this.enablePhotoScrollListener();
    }
    
    genreClickHandler(e) {
        // get the target element that triggered the event
        // store the element's id property
        // manually modify the component history and add a path to the genre
        // fetch new set of images
        // call setState, genre and APIData properties
        let target = e.target;
        let genreProperty = target.id;
        // TODO: replace this with a fetch to mongoDB
        let APIDataObject = PhotoAPI.GetAPIData(this.props.match.params.genre);
        this.setState({
            genre: genreProperty,
            APIData: APIDataParser.parseAndSection(APIDataObject),
        });
    }
    
    
    // METHODS
    updateCurrentSectionCounter() {
        let newNumber = (this.state.currentSectionNumber)+1;
        this.setState({
            currentSectionNumber: newNumber,
        });
    }
    
    getLoadingIcon() {
        this.loadingIcon = document.getElementById("photoPageLoadingIcon");
    }
    
    isUserAtBottom() {
        //RETURNS TRUE OR FALSE
        //this function checks how close the user is the bottom of the page
        //an additional 300px has been added to the calculation to ensure that there is enough room for the photos to get fetched and rendered without the usering knowing
        if ((window.innerHeight + window.scrollY)+300 >= (document.getElementById("InfiniteScrollPage").offsetHeight)) {
            return true;
        }
        else {
            return false;
        }
    }
    
    initializeColmnSize() {
        //fills the state's columnSize property with data (setState not used because this is a pre-render function)
        let windowWidth = window.innerWidth;
        //setState of layoutSize to "small" if below 575px
        if(windowWidth < 1050) {
            this.setState({
                columnSize: 6,
            });
        }
        //no need for else statement to switch to 3 because layoutSize is already set to 3 by default
    }
    
    debounce(func, wait, immediate) {
        //debounce function prevents overloaded client
        //function borrowed from https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086
        let timeout;
        return function executedFunction() {
            let context = this;
            let args = arguments;
            
            let later = function() {
              timeout = null;
              if (!immediate) func.apply(context, args);
            };
            
            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
    
    
    // UI METHODS
    dropdownLayoutHandler(e) {
        // this method changes the padding of the photoSelectorContainer when the genre dropdown button is clicked
        let button = e.target;
        let timer;
        if(this.state.currentDropDownClass === Styles.photoSelectorGroupnoDropDown) {
            // adds the expanded styles if the current styling is not expanded
            this.expandGenreSelector();
            // then run a timer that checks every second if the button still has the user's focus
                // if focus is lost, clear the timer (prevent performance bugs) and then collapse the selector UI container
            timer = setInterval(()=> {
                if(document.activeElement !== button) {
                    clearInterval(timer);
                    this.collapseGenreSelector();
                }
            },200);
        }
        else if(this.state.currentDropDownClass === Styles.photoSelectorGroupdropDown) {
            // removes the expanded styles if the current styling is expanded
            this.collapseGenreSelector();
        }
    }
    
    expandGenreSelector() {
        this.setState({
                currentDropDownClass: Styles.photoSelectorGroupdropDown,
            });
    }
    
    collapseGenreSelector() {
        // special case: force the dropdown menu to close if it is actived by the bootstrap JS library
        let dropDown = document.getElementById("dropdown-menuID").classList;
        let isBootstrapDropdownActivated = false;
        dropDown.forEach((pageClass)=>{
            // these are the custom bootstrap classes that are auto-applied to the dropdown menu when it is clicked
            if(pageClass=="show") {
                isBootstrapDropdownActivated = true;
            }
        });
        setTimeout(() => {
            if(isBootstrapDropdownActivated == true)
                document.getElementById("dropdown-menuID").classList.remove("show");
            this.setState({
                currentDropDownClass: Styles.photoSelectorGroupnoDropDown,
            });
        }, 500);
    }
    
    showLoadingIcon() {
        this.loadingIcon.style.display = "flex";
    }
    
    hideLoadingIcon() {
        this.loadingIcon.style.display = "none";
    }
    
     /*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
    
    render() {
        return (
        <div id="InfiniteScrollPage">
            <Navbar alwaysFixed={true} />
            
            <div className={"d-flex justify-content-left " + this.state.currentDropDownClass}>
                <div className={Styles.infoStyleGenrePage + " p-2 " + Styles.customGenreStyle}>
                    {this.state.genre}
                </div>
            
                <div className={Styles.verticalLine + " p-2"}></div>
            
                <div className="p-2">
                    <div className="portfolioDropdown dropdown">
                        <button className={Styles.genreSelectButton + " btn btn-secondary dropdown-toggle"} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Genre</button>
                        <div id="dropdown-menuID" className={Styles.customDropdownMenu + " dropdown-menu"} aria-labelledby="dropdownMenuButton">
                            <button id="urban" className={Styles.customDropdownItem + " dropdown-item"}>Urban</button>
                            <button id="natural" className={Styles.customDropdownItem + " dropdown-item"} >Natural</button>
                            <button id="aerial" className={Styles.customDropdownItem + " dropdown-item"} >Aerial</button>
                            <button id="portraits" className={Styles.customDropdownItem + " dropdown-item"} >Portraits</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <section id="photos">
                <PhotoGridGenerator 
                    columnSize={this.state.columnSize} 
                    formattedImageObjectArray={this.state.APIData} 
                    numberOfSectionsToRender={this.state.currentSectionNumber} 
                />
            </section>
            
            <div id="photoPageLoadingIcon" className={Styles.loadingIconDisplay + " justify-content-center p-4"} >
                <div className="p-4 spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            
         </div>
        );
    }
}

export default InfiniteScrollPage;