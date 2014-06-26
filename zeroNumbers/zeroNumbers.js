var fs = require('fs');

fs.readFileSync(process.argv[2], 'utf-8').trim().split("\n").forEach(function(line) {
    var binaryStr = "";
    line = line.split(" ");
    for (var i = 0; i < line.length; i += 2) {
        if (line[i] === "0") {
            binaryStr += line[i + 1];
        } else if (line[i] === "00") {
            for (var j = 0; j < line[i + 1].length; j++) {
                binaryStr += "1";
            }
        }
    }

    var num = 0;
    for (var i = binaryStr.length - 1; i >= 0; i--) {
        num += parseInt(binaryStr[i]) * Math.pow(2, binaryStr.length - 1 - i);
    }

    console.log(num);
});