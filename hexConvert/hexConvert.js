fs = require("fs");
var lines = fs.readFileSync(process.argv[2], 'utf-8').trim().split("\n");

lines.forEach(function(line) {   
    var conversion = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    var num = 0;

    for (var i = 0; i < line.length; i++) {
        num += (conversion.indexOf(line[line.length - 1 - i]) * Math.pow(16, i));
    }

    console.log(num);

});