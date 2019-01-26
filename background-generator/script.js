var _ = require('lodash');
var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("randomize");
body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
css.textContent = body.style.background + ";";

function updateColors() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";
		css.textContent = body.style.background + ";";	
}

function randomHex() {
	return (~~(Math.random()*16)).toString(16);
}

function randomColors() {
	color1.value = "#000000".replace(/0/g,randomHex);
	color2.value = "#000000".replace(/0/g,randomHex);
	updateColors();	
}

color1.addEventListener("input", updateColors);
color2.addEventListener("input", updateColors);
randomButton.addEventListener("click", randomColors);

