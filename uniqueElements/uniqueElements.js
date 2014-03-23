fs = require("fs");
var lines = fs.readFileSync(process.argv[2], 'utf-8').trim().split("\n");

lines.forEach(function(line) {   
    var arr = line.split(",");
    var unique = [];

    arr.forEach(function(item) {
        var num = parseInt(item);
        if (unique.indexOf(num) < 0) {
            unique.push(num);
        }
    });
});