var fs = require('fs');

var conversions = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
]

fs.readFileSync(process.argv[2], 'utf-8').trim().split("\n").forEach(function(line) {    
    var num = parseInt(line);
    var roman = "";

    while (num > 0) {
        if (num > conversions[0][0]) {
            roman += conversions[0][1];
            num -= conversions[0][0];
        } else {
            var i = 0;
            for (i = 0; i < conversions.length && num < conversions[i][0]; i++);
            roman += conversions[i][1];
            num -= conversions[i][0];
        }            
    }

    console.log(roman);
});