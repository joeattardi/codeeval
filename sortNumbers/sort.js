fs = require("fs");
fs.readFileSync(process.argv[2], 'utf-8').trim().split("\n").forEach(function(line) {
    var numbers = line.split(" ");

    numbers.sort(function(a, b) {
        return parseFloat(a) - parseFloat(b);
    });

    var output = "";
    numbers.forEach(function(val) {
        output += val.trim() + " ";
    });

    console.log(output.trim());
});