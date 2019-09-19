import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            navBar: null, //gets the navbar once page has loaded (preventing any DOM errors)
            navBarHeight: null,
            navBarSticking: false,
        }
        
        //CLASS VARIABLES
        
        //BINDS
        this.navbarScrollEventHandler = this.navbarScrollEventHandler.bind(this);
        this.updateNavbarHeight = this.updateNavbarHeight.bind(this);
        this.updateNavbarData = this.updateNavbarData.bind(this);
        this.eventListeners = this.eventListeners.bind(this);
        
        //METHOD CALLS
        
    }
    
    /*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
    
    //LIFECYCLE METHODS
    componentDidMount() {
        //fill state navBar THEN navBar height
        //proceed to assign event handlers
        this.updateNavbarData();
        this.updateNavbarHeight();
        this.eventListeners();
    }
    
    //EVENT LISTENERS
    eventListeners() {
        //EVENT LISTENERS
        window.addEventListener('scroll', this.navbarScrollEventHandler);
    }
    
    //EVENT HANDLERS AND METHODS
    navbarScrollEventHandler() {
        //function will calculate navbar and pageOffset height to make the navbar stick or unstick to the top
        this.updateNavbarHeight(); //accounts for resizing of the window and the element being removed from the viewport
        if(window.pageYOffset > this.state.navBarHeight) {
            this.setState({
                navBarSticking: true,
            });
        }
        else {
            this.setState({
                navBarSticking: false,
            });
        }
        console.log('SCROLL EVENT, navbar height is:');
        console.log(this.state.navBarHeight);
    }
    
    updateNavbarData() {
        //loads navbar element into the navbar property of state
        this.state.navBar = document.getElementById("navigationBar");
    }
    
    updateNavbarHeight() {
        //loads height data into the height property of the state
        this.state.navBarHeight = this.getOffsetTop(this.state.navBar);
    }
    
    getOffsetTop(element){
        //gets the offset height of the navbar by iterating through parent elements until it's null
        let offsetTop = 0;
        while(element) {
            offsetTop += element.offsetTop;
            element = element.parentElement;
        }
        return offsetTop;
    }
    
    
    render() {
        
        return (
        <nav id="navigationBar" className={(this.state.navBarSticking===true ? "customNavStyles-Fixed" : "customNavStyles-unFixed" )+ " navbar navbar-expand-lg navbar-dark customNavStyles-unFixed"}>
          <a className="navbar-brand" href="#">Bryant Photography</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#page2">Home<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#page3">Highlights<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Portfolio<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#page4">About<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#contactInfo">Share<span className="sr-only">(current)</span></a>
                </li>
            </ul>
          </div>
        </nav>
        );
    }
}

export default Navbar;