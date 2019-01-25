
// Question 1: Clean the room function: given an input 
// of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that 
// organizes these into individual array that is ordered. For 
// example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 
// 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings 
// differently from number types. i.e. [1, "2", "3", 2] should 
// return [[1,2], ["2", "3"]]

const arrayFeed = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const arrayFeedExtra = [1,2,4,591,392,391,"2",5,10,2,"1",1,1,20,20];

// sort the array
// store array data into a nested object i.e [1,1,2,3,4,4]
// // {{item:1, length:2}, {item:2, length:1}...}
// spawn a new array from the object properties

function arrayOrganizer(array) {
    array = array.sort((a, b) => a - b);
    let arrayData = {};
    let spawnedArray = [];
    let chunkCounter = 0;

    // write to object the item and occurences
    array.forEach(item => {
        debugger;
        if (typeof item === "string") {
            arrayData[`s${item}`] = (arrayData[Number(item)] || 0) + 1; 
        } else {
            arrayData[item] = (arrayData[item] || 0) + 1; 
        }
    })

    // spawn a chunked array from array data
    Object.entries(arrayData).forEach(([item, occurences]) => {
        console.log(`${item}: ${occurences}`)
        spawnedArray.push([]); // start a new []
        for (let i = 0; i < occurences; i++) {
            if (item[0] === "s") {
                spawnedArray[chunkCounter].push(item.slice(1));
            } else {
                spawnedArray[chunkCounter].push(Number(item)); // fill array with item the number of items it occurs
            }
        }
        chunkCounter++; // prepare array to start from new []
    })

    return spawnedArray;
}

//console.log(arrayOrganizer(arrayFeed));
console.log(arrayOrganizer(arrayFeedExtra));