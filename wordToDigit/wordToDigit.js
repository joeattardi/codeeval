var fs = require('fs');

var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

fs.readFileSync(process.argv[2], 'utf-8').trim().split("\n").forEach(function(line) {    
    var result = "";
    line.trim().split(";").forEach(function(word) {
        result += numbers.indexOf(word);
    });

    console.log(result);
});