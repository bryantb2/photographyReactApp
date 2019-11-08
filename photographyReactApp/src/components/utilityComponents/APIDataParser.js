class APIDataParser {
    // METHODS
    
    // parser method takes in an array of image objects
    // will return a sectioned 2-D array of image objects with, each element containing 3 image objects
    static parseAndSection(APIDataArray) {
        //method will loop through the entire array of API objects
        //create a 2-D array
        //sub-elements will be arrays contains 9 image objects
        let imageObjectArray = APIDataArray.images;
        let mainDataArray = new Array();
        for(let i=0; i<imageObjectArray.length; (i=i+9)) {
            let subArray = new Array();
            for(let j=i; j<(i+9); j++) {
                //grabs image object from main array and pushes it to subarray
                subArray.push(imageObjectArray[j]);
            }
            mainDataArray.push(subArray);
        }
        console.log("logging sectioned image object array inside APIDataParser: ");
        console.log(mainDataArray);
        return mainDataArray;
    }
}
export default APIDataParser;