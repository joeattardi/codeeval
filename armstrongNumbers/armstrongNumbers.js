fs = require("fs");
var lines = fs.readFileSync(process.argv[2], 'utf-8').trim().split("\n");

lines.forEach(function(line) {   
    var sum = 0;
    var num = parseInt(line);

    var val = num;
    while (val > 0) {
        sum += Math.pow(val % 10, line.length);
        val = Math.floor(val / 10);
    }

    console.log(sum === num ? "True" : "False");
});