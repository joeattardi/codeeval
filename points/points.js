fs = require("fs");

var pointPattern = /\(([\d\-]+), ([\d\-]+)\) \(([\d\-]+), ([\d\-]+)\)/;

fs.readFileSync(process.argv[2], 'utf-8').trim().split("\n").forEach(function(line) {
    var match = pointPattern.exec(line);
    var x1 = parseInt(match[1]);
    var y1 = parseInt(match[2]);
    var x2 = parseInt(match[3]);
    var y2 = parseInt(match[4]);

    console.log(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
});