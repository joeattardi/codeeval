fs = require("fs");
var lines = fs.readFileSync(process.argv[2], 'utf-8').trim().split("\n");

lines.forEach(function(line) {   
    var number = parseInt(line);
    var sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }

    console.log(sum);
});