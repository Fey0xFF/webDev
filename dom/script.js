var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var list = document.querySelector("ul");

button.addEventListener("click", function() {
	var li = document.createElement("li");
	if (input.value.length < 1) {
		alert("Nothing entered!");
	} else {
		li.appendChild(document.createTextNode(input.value));
		list.appendChild(li);	
	}
	input.value = "";
});

