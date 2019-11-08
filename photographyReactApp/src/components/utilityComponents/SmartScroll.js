class SmartScroller {
    constructor() {
        this.previousScrollPosition = 0;
    }
    //METHODS
    restorePosition() {
        return (SmartScroller.previousScrollPosition);
    }
    
    prepareFor(windowYOffset) {
        this.previousScrollPosition = windowYOffset;
    }
}
export default SmartScroller;