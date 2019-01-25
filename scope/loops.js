const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
	console.log(basket[i]);
}

//2
basket.forEach(item => {
	console.log(item);
})

//3 for of
// arrays and strings are iterable
for (item of basket) {
	console.log(item);
}

//4 for in - objects and properties
// enumerating - objects
for (item in detailedBasket) {
	console.log(item);
}