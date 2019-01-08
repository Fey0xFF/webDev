var database = [
	{
		username: "anthony",
		password: "badpassword"
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

function signIn(user, pass) {
	if (user === database[0].username) {
		console.log("Verifying password...");
		if (pass === database[0].password) {
			console.log("Password accepted!");
			console.log(newsFeed[0].username + " is saying:" + newsFeed[0].timeline);
			console.log(newsFeed[1].username + " is saying:" + newsFeed[1].timeline);
		} else {
			console.log("Password incorrect!");
		}
	} else {
		console.log("Incorrect user name!");
	}
}

signIn(userNamePrompt, passwordPrompt);