var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var list = document.querySelector("ul");
var removeButton = document.getElementById("remove");

function addItem() {
		var li = document.createElement("li");
		if (input.value.length < 1) {
			alert("Nothing entered!");
		} else {
			li.appendChild(document.createTextNode(input.value));
			list.appendChild(li);	
		}
		input.value = "";
};

button.addEventListener("click", function() {
	// var li = document.createElement("li");
	// if (input.value.length < 1) {
	// 	alert("Nothing entered!");
	// } else {
	// 	li.appendChild(document.createTextNode(input.value));
	// 	list.appendChild(li);	
	// }
	// input.value = "";
	addItem();
});

input.addEventListener("keypress", function(e) {
	if (e.keyCode === 13) {
		// var li = document.createElement("li");
		// if (input.value.length < 1) {
		// 	alert("Nothing entered!");
		// } else {
		// 	li.appendChild(document.createTextNode(input.value));
		// 	list.appendChild(li);	
		// }
		// input.value = "";
		addItem();		
	};
});

remove.addEventListener("click", function() {
	var itemToRemove = input.value;
	list.removeChild(list.lastChild);
});
