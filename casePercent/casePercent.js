var fs = require('fs');

fs.readFileSync(process.argv[2], 'utf-8').trim().split("\n").forEach(function(line) {
    var upper = 0, lower = 0;

    for (var i = 0; i < line.length; i++) {
        var charCode = line.charCodeAt(i);
        (charCode >= 97 && charCode <= 122) ? lower++ : upper++;
    }

    var lowerPercent = (lower / line.length) * 100;
    console.log('lowercase: ' + lowerPercent.toFixed(2) + ' uppercase: ' + (100 - lowerPercent).toFixed(2));
});