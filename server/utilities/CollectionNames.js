// This will return a class with a static getter for the collection name
// Done this way because it hides the internal collection object that stores the names of the collections
// Requires the server admin to manually go into this file and add, remove, or edit a key-value pair in the collections object
let CollectionNames(()=> {
    // names of collections
    let collections = {
        collection1: "Aerial",
        collection2: "Natural",
        collection3: "Portraits",
        collection4: "Urban"
    };
    
    
    function compileCollectionObject() {
        // this function will package all the collection variables into the colleciton array
        let tempCollectionArray = new Array();
        const collectionVarName = "collection";
        let noMoreCollectionVariables = false;
        let counter = 1;
        while(noMoreCollectionVariables === false) {
            // dynamically get the collection variable
            // test if it is null and increment counter if the variable exists
            let tempVariable = collections[collectionVarName + counter];
            if(tempVariable !== null || tempVariable !== undefined) {
                tempCollectionArray.push(tempVariable)
                counter++
            }
            else {
                noMoreCollectionVariables = true;
            }
        }
        return tempCollectionArray;
    }
    
    return class {
        static get GetCollectionNames() {
            return compileCollectionObject();
        }
    }
});

module.exports = CollectionNames;