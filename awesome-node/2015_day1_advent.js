const fs = require("fs");


fs.readFile('./puzzleInput.txt', 'utf8', (err, data) => {
	let room = 0;
	let i = 0;
	let basementNum = 0;
	let basementCheck = true;

	console.time("time");
	while (i < data.length.toString()) {
		if (data[i] === "(") {
			room += 1;
		} else if (data[i] === ")") {
			room -= 1;
			if (room === -1 && basementCheck) {
				basementNum = i + 1;
				basementCheck = false;
			}
		}
		i++;
	}
	console.log('final room:', room);
	console.log('first basement:', basementNum);
	console.timeEnd("time");
})

