fs = require("fs");
fs.readFileSync(process.argv[2], 'utf-8').trim().split("\n").forEach(function(line) {
    var substring = findSubstring(line);
    var count = line.length / substring.length;
    var testString = "";
    for (var i = 0; i < count; i++) {
        testString += substring;
    }

    console.log(testString === line ? substring.length : line.length);
});

function findSubstring(str) {
    for (var i = 1; i < str.length; i++) {
        if (str.substr(0, i) === str.substr(i, i)) {
            return str.substr(0, i);
        }
    }

    return str;
}