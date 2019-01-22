// padstart and padend

console.log('Turtle'.padStart(10));
// '    Turtle' (4 spaces)
console.log('Turtle'.padEnd(10));
// 'Turtle    ' (4 spaces)


// Trailing commas
const fun = (
			 a,
			 b,
			 c,
			 d,
			 e,
			 ) => {
	console.log(a);
}

fun(1,2,3,4); // or fun(1,2,3,4,);


Object.values
Object.entries
Object.keys

let obj = {
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Mr.Grinch',
}

Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key]);
})

Object.values(obj).forEach(value => {
	console.log(value);
})

Object.entries(obj).forEach(value => {
	console.log(value);
})

Object.entries(obj).map(value => {
	return value[1] + value[0].replace('username', '');
})

// Async Await