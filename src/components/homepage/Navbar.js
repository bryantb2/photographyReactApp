import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            navBar: window.onload = () => document.getElementById("navigationBar"), //gets the navbar once page has loaded (preventing any DOM errors)
            navBarHeight: window.onload = () => this.initializeNavbarHeight(),
            navBarSticking: false,
        }
        
        //BINDS
        this.navbarScrollEventHandler = this.navbarScrollEventHandler.bind(this);
        this.initializeNavbarHeight = this.initializeNavbarHeight.bind(this);
        this.resizeEventHandler = this.resizeEventHandler.bind(this);
        this.eventListeners = this.eventListeners.bind(this);
        
        //METHOD CALLS
        window.addEventListener('load',this.eventListeners); //load handler used to prevent DOM loading errors
    }
    
    //EVENT LISTENERS
    eventListeners() {
        //EVENT LISTENERS
        window.addEventListener('scroll', this.navbarScrollEventHandler);
        window.addEventListener('resize', this.resizeEventHandler);
    }
    
    
    /*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
    
    //EVENT HANDLERS AND METHODS
    navbarScrollEventHandler() {
        //function will calculate navbar and pageOffset height to make the navbar stick or unstick to the top
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
        console.log("TEST: INSIDE NAVBAR SCROLL EVENT HANDLER");
        console.log(this.state);
    }
    
    resizeEventHandler() {
        //function accomodates for the fact that navBarHeight value CHANGES when window is RESIZED
        this.setState({
                navBarHeight: this.getOffsetTop(this.state.navBar),
        });
    }
    
    initializeNavbarHeight() {
        //loads height data into the height property of the state
        this.setState({
                navBarHeight: this.getOffsetTop(this.state.navBar),
        });
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