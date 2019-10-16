class SmartScroller {
    //NOTE: I am not the person to have come up with this method for maintaining scrollbar height; I simply translated the code into an ES6 class
    //credit goes to: https://kirbysayshi.com/2013/08/19/maintaining-scroll-position-knockoutjs-list.html
    constructor(node) {
        //CLASS-LEVEL VARIABLES
        this.node = node;
        this.previousScrollHeightMinusTop = 0;
        this.readFor = 'up';
        
        //BINDS
        this.restorePosition = this.restorePosition.bind(this);
        this.prepareFor = this.prepareFor.bind(this);
    }
    
    //METHODS
    restorePosition() {
        if(this.readFor === 'up')
            this.node.scrollTop = this.node.scrollHeight - this.previousScrollHeightMinusTop;
        console.log("inside restorePosition method of smartScroller");
    }
    
    prepareFor(direction) {
        //this is the first method that should be called
        //takes a parameter called direction that corresponds to the places where the content is loaded
        //will then calculate the 
        this.readFor = direction==undefined ? 'up' : direction;
        this.previousScrollHeightMinusTop = this.node.scrollHeight - this.node.scrollTop;
        console.log("inside prepareFor method of smartScroller");
    }
}
export default SmartScroller;