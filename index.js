var proc = require('child_process');

var childStat = 0;

function ls() {
	proc.exec('ls', function(error, data) {
		setTimeout(function() {
			console.log(data);
			childStat = 1;
			throw new Error("sdf")
		}, 1000);
	});
	console.log(childStat);
}

function main() {
	ls();
}

main();
