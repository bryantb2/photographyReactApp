class SmartScroller {
    constructor() {
        this.previousScrollPosition = 0;
    }
    //METHODS
    static restorePosition() {
        return (SmartScroller.previousScrollPosition);
    }
    
    static prepareFor(windowYOffset) {
        this.previousScrollPosition = windowYOffset;
    }
}
export default SmartScroller;