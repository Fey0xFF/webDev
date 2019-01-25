
// Question 1: Clean the room function: given an input 
// of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that 
// organizes these into individual array that is ordered. For 
// example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 
// 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings 
// differently from number types. i.e. [1, "2", "3", 2] should 
// return [[1,2], ["2", "3"]]

const arrayFeed = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const arrayFeedExtra = [1,2,4,591,392,391,"2",5,10,2,"1",1,1,20,20];

function arrayOrganizer(array) {
    array = array.sort((a, b) => a - b);
    console.log(array);
    // let workingArray = array.map(function(item, index) {
    //     return [index, item];
    // });
    //let workingObject = {};
    // array.forEach((item) => {
    //     if (typeof item === "string") {
    //         workingObject[`${item}string`] += 1;
    //     } else { 
    //         workingObject[item] = (workingObject[item] || 0)+1;
    //     }
    // })
    let workingObject = {};
    array.forEach(item => {
        workingObject[item] = (workingObject[item] || 0) + 1;
    });

    workingObject.forEach(item => {
        item.forEach((key, value) => {
            console.log(key, value);
        })
    })
}

console.log(arrayOrganizer(arrayFeed));
//console.log(arrayOrganizer(arrayFeedExtra));