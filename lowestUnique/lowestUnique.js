var fs = require('fs');
fs.readFileSync(process.argv[2], 'utf-8').trim().split("\n").forEach(function(line) {    
    if (line.trim() !== "") {
        var results = [];
        var numbers = line.trim().split(" ");
        numbers.forEach(function(str) {
            if (countOccurrences(numbers, str) === 1) {
                results.push(parseInt(str));
            }
        });

        console.log(results.length > 0 ? numbers.indexOf(Math.min.apply(this, results) + "") + 1 : 0);
    }
});

function countOccurrences(arr, value) {
    var count = 0;

    var index = arr.indexOf(value);

    while (index >= 0) {
        count++;
        index = arr.indexOf(value, index + 1);
    }

    return count;
}