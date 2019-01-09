var todoList = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy",
];

// for (var i=0; i < todoList.length; i++) {
// 	console.log(todoList[i]);
// } 

// var counterOne = 10;
// while (counterOne > 0) {
// 	console.log(counterOne);
// 	counterOne--;
// }

// var counterTwo = 10
// do {
// 	console.log(counterTwo);
// 	counterTwo--;
// } while (counterTwo > 0);

function logToDos (item, i) {
	console.log(i);
}

todoList.forEach(logToDos);