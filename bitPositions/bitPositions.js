fs = require("fs");
var lines = fs.readFileSync(process.argv[2], 'utf-8').trim().split("\n");

lines.forEach(function(line) {    
    var nums = line.split(",");
    var number = parseInt(nums[0]);
    console.log(bitSet(number, parseInt(nums[1])) === bitSet(number, parseInt(nums[2])));
});

function bitSet(number, position) {    
    return (number & Math.pow(2, position - 1)) === Math.pow(2, position - 1);
}