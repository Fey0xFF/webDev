var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var list = document.querySelector("ul");
var removeButton = document.getElementById("remove");

function checkInputToAdd() {
	if (input.value.length > 0) {
		return true;
	} else {
		return alert("Nothing entered!");
	}
}

function addItem() {
	if (checkInputToAdd()) {
		var li = document.createElement("li");
		var bt = document.createElement("button");
		bt.appendChild(document.createTextNode("x"));
		bt.classList.add("deleteButton");
		li.appendChild(document.createTextNode(input.value));
		list.appendChild(li);
		li.appendChild(bt);
		input.value = "";
	}
}

function addItemAfterPress(e) {
	if (e.keyCode === 13) {
		if (checkInputToAdd()) {
			addItem();	
		}
	}
}

function removeLastItem() {
	var itemToRemove = input.value;
	list.removeChild(list.lastChild);
}

button.addEventListener("click", addItem);
input.addEventListener("keypress", addItemAfterPress);
remove.addEventListener("click", removeLastItem);