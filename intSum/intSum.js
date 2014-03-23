fs = require("fs");
var lines = fs.readFileSync(process.argv[2], 'utf-8').trim().split("\n");

console.log(lines.reduce(function(prev, val) { 
    return prev + parseInt(val);
}, 0));