var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var list = document.querySelector("ul");
var removeButton = document.getElementById("remove");
var listItem = document.querySelectorAll("li");

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
		li.classList.add("toDoItem");
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
	if (list.children.length > 0) {
		list.lastElementChild.remove();
	} else {
		alert("List is empty!");
	}
}

function strikeItem(e) {
	this.classList.toggle("itemDone");
}

function interactItem(e) {
	if (e.target.tagName === "LI") {
		var clickedItem = e.target;
		clickedItem.classList.toggle("itemDone");
	} else if (e.target.tagName == "BUTTON") {
		e.path[1].remove();
	}
}

list.addEventListener("click", interactItem);
button.addEventListener("click", addItem);
input.addEventListener("keypress", addItemAfterPress);
remove.addEventListener("click", removeLastItem);
