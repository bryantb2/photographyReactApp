class SmartScroller {
    constructor() {
        this.previousScrollPosition = 0;
    }
    //METHODS
    restorePosition() {
        return (this.previousScrollPosition);
    }
    
    prepareFor(windowYOffset) {
        this.previousScrollPosition = windowYOffset;
    }
}
export default SmartScroller;