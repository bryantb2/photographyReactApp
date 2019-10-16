import React from 'react';
import './InfiniteScrollPage.css';
import Navbar from '../navbar/Navbar.js';
import PhotoGrid from '../photoGrid/PhotoGrid.js';
import SmartScoller from '../utilityComponents/SmartScroll.js';

//imports for testing API system:
import PhotoAPI from '../../server/PhotoAPIWrapper.js';

class InfiniteScrollPage extends React.Component {
    //INPUT: takes in a genre name and makes a fetch call to the server for the photo data
    //page is loaded once the API call has completed
    constructor(props) {
        super(props);
        
        //Local Constructor Variables
        let APIDataObject = PhotoAPI.GetAPIData();
        
        //GLOABAL VARIABLES
        //stored the sectioned version of the APIDataObject data
        this.parsedAPIObjectData = this.parseAndSection(APIDataObject);
        //section number set to 0
        this.currentSectionNumber = 0;
        this.canRender = false;
        this.autoScrollControl = null;
    
        this.state={
            //this essentially parses the data (sets the apidata to actual array of photos and NOT the entire object)
            columnSize: 3,
            currentDropDownClass: "photoSelectorGroup-noDropDown",
            sectionNumberArray: new Array(), //stores an array of section indexes
        };
        
        //Global variables
        //these exist because setState cannot be called to update the column size when the page has not fully loaded
        this.initialColumnSize = 3;
        this.renderedOnce = false;
        
        //BINDS
        this.createEventListeners = this.createEventListeners.bind(this);
        this.dropdownLayoutHandler = this.dropdownLayoutHandler.bind(this);
        this.collapseGenreSelectorSpacing = this.collapseGenreSelectorSpacing.bind(this);
        this.expandGenreSelectorSpacing = this.expandGenreSelectorSpacing.bind(this);
        this.parseAndSection = this.parseAndSection.bind(this);
        this.debounce = this.debounce.bind(this);
        this.userScrollHandler = this.userScrollHandler.bind(this);
        this.disablePhotoScrollListener = this.disablePhotoScrollListener.bind(this);
        this.enablePhltoScrollListener = this.enablePhltoScrollListener.bind(this);
        this.photoGridGenerator = this.photoGridGenerator.bind(this);
        this.isUserAtBottom = this.isUserAtBottom.bind(this);
        this.showLoadingIcon = this.showLoadingIcon.bind(this);
        this.hideLoadingIcon = this.hideLoadingIcon.bind(this);
    }
    
    
    //LIFECYCLE METHODS
    componentDidMount() {
        console.log("inside compMount");
        //THIS METHOD IS used to prevent premature collection of non-existent DOM elements
        //preventing runtime crashing or errors by manually setting the first value
        this.canRender = true;
        this.setState(prevState => ({
            sectionNumberArray: [...prevState.sectionNumberArray, this.currentSectionNumber]
        }))
        this.currentSectionNumber = this.currentSectionNumber++;
        this.autoScrollControl = new SmartScoller(document.getElementById("InfiniteScrollPage"));
        this.createEventListeners();
        console.log("logging current section number and autoscrolling controller: ");
        console.log(this.currentSectionNumber);
        console.log(this.autoScrollControl);
    }

    
    //EVENT LISTENERS
    createEventListeners() { 
        //this is for non-scrolling event listeners
        document.getElementById("dropdownMenuButton").addEventListener('click', this.dropdownLayoutHandler);
        this.enablePhltoScrollListener();
    }
    
    enablePhltoScrollListener() {
        //this function uses a timed enabling of the photoScroll listener function, prevents spamming
        let timer = setTimeout(()=> {
                //enable the userScroll listener function
                window.addEventListener('scroll',this.debounce(this.userScrollHandler,500));
            },400);
        console.log("inside enablePhotoScollerevent, logging the event list: ")
        console.log(window.Event);
    }
    
    disablePhotoScrollListener() {
       //will help to prevent against a situation where the user is sitting at the bottom of the page making calls to photoScroll before the photos have actually updated on the UI
        window.removeEventListener('scroll',this.debounce(this.userScrollHandler,500));
        console.log("inside disablePhotoScollerEvent, logging the event list: ")
        console.log(window.Event);
    }
    
    
    //EVENT HANDLERS
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
        if(this.isUserAtBottom() === true) {
            let timout;
            this.disablePhotoScrollListener();
            this.showLoadingIcon();
            this.autoScrollControl.prepareFor("down");
            timout = setTimeout(()=>{
                this.hideLoadingIcon();
                this.setState(prevState => ({
                    sectionNumberArray: [...prevState.sectionNumberArray, this.currentSectionNumber]
                }))
                this.currentSectionNumber = this.currentSectionNumber+1;
                this.autoScrollControl.restorePosition();
                this.enablePhltoScrollListener();
            }, 1000);
        }
    }
    
    //METHODS
    isUserAtBottom() {
        //RETURNS TRUE OR FALSE
        //this function checks how close the user is the bottom of the page
        //an additional 300px has been added to the calculation to ensure that there is enough room for the photos to get fetched and rendered without the usering knowing
        if ((window.innerHeight + window.scrollY)+300 >= (document.getElementById("InfiniteScrollPage").offsetHeight)) {
            /*console.log("scrolled: " + (window.innerHeight + window.scrollY))
            console.log("total height: " + document.getElementById("InfiniteScrollPage").offsetHeight)
            console.log("bottom");*/
            return true;
        }
        else {
            return false;
        }
    }
        
    photoGridGenerator(counterArray) {
        console.log("GRID WAS GENERATED!");
        console.log("logging sectionCounterArray: ")
        console.log(counterArray);
        console.log("logging state: ")
        console.log(this.state);
        console.log("canRender= " + this.canRender);
        //in the case of the sectionNumberArray, the element values themselves are the indexes
        return (
            counterArray.map((sectionNumber,index) =>
                <PhotoGrid key={index} photoArray={this.parsedAPIObjectData[sectionNumber]} gridSize={this.state.columnSize}/>
            )
            /*
            <PhotoGrid key={this.currentSectionNumber} photoArray={this.parsedAPIObjectData[this.currentSectionNumber   ]} gridSize={this.state.columnSize}/>*/
        )    
    }
    
    initializeColmnSize() {
        //fills the state's columnSize property with data (setState not used because this is a pre-render function)
        let windowWidth = window.innerWidth;
        //setState of layoutSize to "small" if below 575px
        if(windowWidth < 1050) {
            this.initialColumnSize = 6;
            //this.state.columnSize = 6;
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
    
    parseAndSection(apiData) {
        //method will loop through the entire array of API objects
        //create a 2-D array
        //sub-elements will be arrays contains 9 image objects
        apiData = apiData.genreType;
        let mainDataArray = new Array();
        for(let i=0; i<apiData.length; (i=i+9)) {
            let subArray = new Array();
            for(let j=i; j<(i+9); j++) {
                //grabs image object from main array and pushes it to subarray
                subArray.push(apiData[j]);
            }
            mainDataArray.push(subArray);
        }
        return mainDataArray;
    }
    
    
    //UI METHODS
    dropdownLayoutHandler(e) {
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
                    //special case: force the dropdown menu to close
                    let dropDown = document.getElementById("dropdown-menuID").classList;
                    dropDown.forEach((pageClass)=>{
                        if(pageClass=="show")
                            document.getElementById("dropdown-menuID").classList.remove("show");
                    });
                }
            },200);
        }
        else if(this.state.currentDropDownClass === "photoSelectorGroup-dropDown") {
            //removes the expanded styles if the current styling is expanded
            clearInterval(timer);
            this.collapseGenreSelectorSpacing();
        }
    }
    
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
    
    showLoadingIcon() {
        document.getElementById("photoPageLoadingIcon").style.display = "flex";
    }
    
    hideLoadingIcon() {
        document.getElementById("photoPageLoadingIcon").style.display = "none";
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
                        <div id="dropdown-menuID" className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Urban</a>
                            <a className="dropdown-item" href="#">Natural</a>
                            <a className="dropdown-item" href="#">Aerial</a>
                            <a className="dropdown-item" href="#">Portraits</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <section id="photos">
                {this.canRender==true?this.photoGridGenerator(this.state.sectionNumberArray) : null}
            </section>
            
            <div id="photoPageLoadingIcon" className="justify-content-center p-4" >
                <div className="p-4 spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            
         </div>
        );
    }
}

export default InfiniteScrollPage;