class APIDataParser {
    // parser method takes in an array of image objects
    // will return a sectioned 2-D array of image objects 
    // each sub-element containing 10 image objects
    static parseAndSection(APIDataArray) {
        // method will loop through the entire array of API objects
        // create a 2-D array
        // sub-elements will be arrays contains 10 image objects
        let imageObjectArray = APIDataArray.images;
        let mainDataArray = new Array();
        for(let i=0; i<imageObjectArray.length; i+=10) {
            let subArray = new Array();
            for(let j=i; j<(i+10); j++) {
                // grabs image object from main array and pushes it to subarray
                subArray.push(imageObjectArray[j]);
            }
            mainDataArray.push(subArray);
        }
        return mainDataArray;
    }
}
export default APIDataParser;