fs = require("fs");
fs.readFileSync(process.argv[2], 'utf-8').trim().split("\n").forEach(function(line) {
    var result = "";
    for (var i = 0; i < line.length; i++) {
        var code = line.charCodeAt(i);
        var ch = line.charAt(i);
        if (code >= 65 && code <= 90) {
            result += ch.toLowerCase();
        } else if (code >= 97 && code <= 122) {
            result += ch.toUpperCase();
        } else {
            result += ch;
        }
    }

    console.log(result);
});