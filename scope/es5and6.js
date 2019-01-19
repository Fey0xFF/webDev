
const name = "John Snow";
const obj = {
	[name]: "hello",
	['ray' + 'smith']: 'hihi',
	player: "bobby",
	experience: 100,
	wizardLevel: false
}

// old way before destructuring
const player = obj.player
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;
// destructuring
const { player, experience } = obj;


// template strings
const name = "Sally";
const age = 34;
const pet = "horse";
const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have!`;

// default arguments
function greet(name='', age=30, pet='cat') {

}

// Symbol
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

// Arrow functions
function add(a, b) {
	return a + b;
}

add = () => a + b;