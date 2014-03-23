fs = require("fs");
var lines = fs.readFileSync(process.argv[2], 'utf-8').trim().split("\n").forEach(function(line) {
    var counts = [];
    var regexp = /[A-Za-z]/;

    for (var i = 0; i < 26; i++) {
        counts[i] = 0;
    }

    for (var i = 0; i < line.length; i++) {
        var ch = line.charAt(i).toLowerCase();
        if (regexp.test(ch)) {
            counts[ch.charCodeAt(0) - 97]++;
        }        
    }
    counts.sort(function(a, b) {
        return a - b;
    });
    
    var sum = 0;
    for (var i = counts.length - 1; i >= 0; i--) {
        var score = counts[i] * (i + 1);
        sum = sum + score;
    }

    console.log(sum);
});