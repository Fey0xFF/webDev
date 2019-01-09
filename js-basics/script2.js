var database = [
	{
		username: "anthony",
		password: "badpassword"
	},
	{
		username: "jill",
		password: "777"
	},
	{
		username: "george",
		password: "pretzel"
	}
];

var newsFeed = [
	{
		username: "Bob",
		timeline: "So tired from all that learning"
	},
	{
		username: "Sally",
		timeline: "Javascript is the bomb!"
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if(database[i].username === username && database[i].password === password) {
			return true;
		} 
	}
	return false;
}

function signIn(user, pass) {
	console.log(isUserValid(user, pass));

	if (isUserValid(user, pass)) {
		newsFeed.forEach(function(item) {
			console.log(item.username + " says: " + item.timeline);
		})
	} else {
		alert("Sorry, wrong username and password!");
	}
}

signIn(userNamePrompt, passwordPrompt);