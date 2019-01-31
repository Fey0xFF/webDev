// Question 2: Write a javascript function that takes an 
// array of numbers and a target number. The function should 
// find two different numbers in the array that, when added 
// together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

const arrayFeed = [0,1,2,3,4,6,5,7,8,9,10];

// takes a number
// sifts through array until it can find two numbers that equal it
function numbersFinder(arr, num) {
    arr = arr.sort((a, b) => a - b);
    let firstNum = arr[0]
    for (let i = 0; i < arr.length; i++) {
        arr.filter((firstNum, secondNum)
    }
}

numbersFinder(arrayFeed);