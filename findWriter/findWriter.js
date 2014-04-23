fs = require("fs");
fs.readFileSync(process.argv[2], 'utf-8').trim().split("\n").forEach(function(line) {
    var letters = line.substring(0, line.indexOf("|"));
    var key = line.substring(line.indexOf("|") + 1);
    var arr = key.trim().split(" ");
    var name = "";
    arr.forEach(function(index) {
        name += letters[index - 1];
    });  

    console.log(name);
});