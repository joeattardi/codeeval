fs = require("fs");
var lines = fs.readFileSync(process.argv[2], 'utf-8').trim().split("\n");

lines.forEach(function(line) {   
    var values = line.split(",");

    var num = parseInt(values[0]);
    var mod = parseInt(values[1]);

    while (num >= mod) {
        num -= mod;
    }

    console.log(num);
});