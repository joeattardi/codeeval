fs = require("fs");
var lines = fs.readFileSync(process.argv[2], 'utf-8').trim().split("\n");

lines.forEach(function(line) {   
    var found = [];
    var value = parseInt(line);

    while (value != 1 && found.indexOf(value) < 0) {
        found.push(value);
        value = getSquareDigitSum(value);
    }

    console.log(value === 1 ? "1" : "0");
});

function getSquareDigitSum(num) {
    var value = num;
    var sum = 0;
    while (value > 0) {
        sum += Math.pow(value % 10, 2);
        value = Math.floor(value / 10);
    }

    return sum;
}