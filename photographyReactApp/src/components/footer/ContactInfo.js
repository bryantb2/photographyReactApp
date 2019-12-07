import React from 'react';
import Styles from './ContactInfo.module.css';
//importing images for layout
import highlight1 from '../../referenceImages/9DS_0353.JPG';
import emailIcon from '../../referenceImages/icons/emailIcon.png';
import locationIcon from '../../referenceImages/icons/locationIcon.png';
import phoneIcon from '../../referenceImages/icons/phoneIcon.png';
import socialMediaIcon from '../../referenceImages/icons/socialMediaIcon.png';

// UI component imports
import Button from '../sharedUIComponents/Button.js';

class ContactInfo extends React.Component {
    //WORKING ASSUMPTIONS: will recieve a prop.layoutSize string argument that containing either a "small" or "large"
    constructor(props) {
        super(props);
        this.state={
            //determines which JSX layout is used for footer
            layoutSize: this.largeLayout,
        }
        
        //BINDS
        this.createEventListeners = this.createEventListeners.bind(this);
        this.footerResizeHandler = this.footerResizeHandler.bind(this);
        this.initializeLayoutSize = this.initializeLayoutSize.bind(this);
        this.layoutBuilder = this.layoutBuilder.bind(this);
        
        // global variables
        this.smallLayout = "small";
        this.largeLayout = "large";
    }
    
    //EVENT LISTENERS
    createEventListeners() {
        window.addEventListener('resize', this.debounce(this.footerResizeHandler,500));
    }
    
    // LIFECYCLE METHODS
    componentDidMount() {
        this.initializeLayoutSize();
        this.createEventListeners();
    }
    
    //EVENT HANDLERS
    footerResizeHandler() {
        let windowWidth = window.innerWidth;
        //setState of layoutSize to "small" if below 575px
        if(windowWidth < 575) {
            this.setState({
                layoutSize: this.smallLayout,
            });
        }
        //setState of layout to "large" if the size is above 575 but hasn't switched
        else {
            this.setState({
                layoutSize: this.largeLayout,
            });
        }
    }
    
    //METHODS
    initializeLayoutSize() {
        //fills the state's layoutSize property with data (setState not used because this is a pre-render function)
        let windowWidth = window.innerWidth;
        //setState of layoutSize to "small" if below 575px
        if(windowWidth < 575) {
            this.setState({
                layoutSize: this.smallLayout,
            });
        }
        //no need for else statement to switch to large because layoutSize is already set to large by default
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
    
    layoutBuilder(layoutSize) {
        console.log("layout builder for footer has fired!");
        // rebuilds layout depending on the passed in size
        
        // recurring content components
        const Container = (props) => (
            <footer id="contactInfo" className={Styles.containerStyles}>
                <div className="container">
                    {props.children}
                </div>
            </footer>
        );
        
        const UniversalHeader = (props) => (
            <div className={"row justify-content-center " + Styles.customHeaderAlignText}>
                <div className={"col-lg-8 col-md-8 col-8 " + Styles.contactInfoHeader}>
                    Contact Information
                </div>
            </div>
        );
        
        // specific structure components
        const LargeSubHeader = (props) => (
            <div className={"row justify-content-center"}>
                <div className={"col-lg-8 col-md-8 col-8 " + Styles.subHeaderText}>
                    For business inquires, comments, or questions about my work:
                </div>
            </div>
        );
        
        const SmallSubHeader = (props) => (
            <div className="row">
                <div className={"col-lg-8 col-md-8 col-8 " + Styles.subHeaderText}>
                    For business inquires, comments, or questions about my work:
                </div>
            </div>
        );
        
        const LargeMainContent = (props) => (
            <div className="row">
                <div className={"col-lg-4 col-md-4 col-4 " + Styles.footerLeftSection + " " + Styles.footerSubText}>
                    <div className="d-flex justify-content-left">
                        <div className="p-2">
                            <img className={"icon " + Styles.specialMaxIconWidth} width="15" src={locationIcon}/>
                        </div>
                        <div className="p-2">Eugene, Oregon, USA</div>
                    </div>
                    <div className="d-flex justify-content-left">
                        <div className="p-2">
                            <img className={"icon " + Styles.maxIconWidth} width="20" src={emailIcon}/>
                        </div>
                        <div className="p-2">bryantb2@my.lanecc.edu</div>
                    </div>
                    <div className="d-flex justify-content-left">
                        <div className="p-2">
                            <img className={"icon " + Styles.maxIconWidth} width="20" src={phoneIcon}/>
                        </div>
                        <div className="p-2">541-505-0520</div>
                    </div>
                    <div className="d-flex justify-content-left">
                        <div className="p-2">
                            <img className={"icon " + Styles.maxIconWidth} width="20" src={socialMediaIcon}/>
                        </div>
                        <div className="p-2">bryantb2</div>
                    </div>
                </div>
                <div className="col-lg-1 col-md-1 col-1 m-1">
                </div>
                <div className={"col-lg-1 col-md-1 col-1 m-1 " + Styles.verticalLineStyle}>
                </div>
                <div className={"col-lg-5 col-md-5 col-5 " + Styles.footerRightSection}>
                    <div className="d-flex justify-content-end">
                        <div className={"p-2 " + Styles.footerSubText}>Please consider sharing this site:</div>
                    </div>
                    <div className={"d-flex justify-content-end " + Styles.customPadding}>
                        <Button 
                            text={"Share"}
                            destination={"/"}
                        />
                    </div>
                </div>
            </div>
        );
        
        const SmallMainContent = (props) => (
            <div>
                <div className="row justify-content-center">
                    <div className={"col-lg-4 col-md-4 col-4 " + Styles.footerSubText}>
                        <div className="d-flex justify-content-left">
                            <div className="p-1">
                                <img className={"icon " + Styles.specialMaxIconWidth} width="11" src={locationIcon}/>
                            </div>
                            <div className="p-1">Eugene, Oregon, USA</div>
                        </div>
                    </div>
                    <div className={"col-lg-4 col-md-4 col-4 pl-0 " + Styles.footerSubText}>
                        <div className="d-flex justify-content-left">
                            <div className="p-1">
                                <img className={"icon " + Styles.maxIconWidth} width="15" src={emailIcon}/>
                            </div>
                            <div className="p-1">bryantb2@my.lanecc.edu</div>
                        </div>
                    </div>
                </div>
                
                <div className="row justify-content-center">
                    <div className={"col-lg-4 col-md-4 col-4 " + Styles.footerSubText}>
                        <div className="d-flex ">
                            <div className="p-1">
                                <img className={"icon " + Styles.maxIconWidth} width="15" src={phoneIcon}/>
                            </div>
                            <div className="p-1">541-505-0520</div>
                        </div>
                    </div>
                    <div className={"col-lg-4 col-md-4 col-4 pl-0 " + Styles.footerSubText}>
                        <div className="d-flex ">
                            <div className="p-1">
                                <img className={"icon " + Styles.maxIconWidth} width="16" src={socialMediaIcon}/>
                            </div>
                            <div className="p-1">bryantb2</div>
                        </div>
                    </div>
                </div>
            
                <div className="row justify-content-center">
                    <div className={"col-lg-4 col-md-4 col-4 " + Styles.footerRightSection}>
                        <div className="d-flex justify-content-end">
                            <div className={"p-2 " + Styles.shareTextCustom}>Please consider sharing this site:</div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                        <div className="d-flex pt-1">
                              <Button 
                                    text={"Share"}
                                    destination={"/"}
                                />
                        </div>
                    </div>
                </div>
            </div>
        );
        
        if(layoutSize === this.smallLayout) {
            console.log("small layout is in use");
            return (
                <Container>
                    <UniversalHeader />
                    <SmallSubHeader />
                    <SmallMainContent />
                </Container>
            );
        }
        else {
            console.log("large layout is in use");
            return (
                <Container>
                    <UniversalHeader />
                    <LargeSubHeader />
                    <LargeMainContent />
                </Container>
            );
        }
    }
    
    render() {
        return (
            this.layoutBuilder(this.state.layoutSize)
        );
    }
}

export default ContactInfo