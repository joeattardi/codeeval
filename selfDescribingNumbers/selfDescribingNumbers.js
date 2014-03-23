fs = require("fs");
var lines = fs.readFileSync(process.argv[2], 'utf-8').trim().split("\n");

lines.forEach(function(line) {   
    var digitCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    var digits = [];

    var value = parseInt(line);
    while (value > 0) {
        digits.splice(0, 0, value % 10);
        digitCounts[value % 10]++;
        value = Math.floor(value / 10);
    }

    var selfDescribing = true;
    for (var i = 0; i < digits.length; i++) {
        if (digitCounts[i] !== digits[i]) {
            selfDescribing = false;
            break;
        }
    }

    console.log(selfDescribing ? "1" : "0");

});