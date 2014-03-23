var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var arr = line.split(",");
        console.log("123" + arr[1] + "456");    
        console.log(arr[0].lastIndexOf(arr[1]));
    }
});