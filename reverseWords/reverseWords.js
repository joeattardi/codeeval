fs = require("fs");
var lines = fs.readFileSync(process.argv[2], 'utf-8').split("\r\n");

lines.forEach(function(line) {
    var reversed = "";
    line.split(" ").reverse().forEach(function(word) {
        reversed += word + " ";
    });
    console.log(reversed.trim());
});