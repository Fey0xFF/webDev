// Advanced Arrays

const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
	double.push(num * 2);
})

console.log(double);

// map, filter, reduce

const mapArray = array.map(num => num * 2);


// filter

const filterArray = array.filter(num => num > 5);

// reduce

const reducedArray = array.reduce((accumulator, num) => {
	return accumulator + num
}, 0);

