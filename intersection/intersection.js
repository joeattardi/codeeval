fs = require("fs");
var lines = fs.readFileSync(process.argv[2], 'utf-8').trim().split("\n");

lines.forEach(function(line) {   
    var lists = line.split(";");
    var list1 = lists[0].split(",");
    var list2 = lists[1].split(",");

    var intersection = [];
    list1.forEach(function(item) {
        if (list2.indexOf(item) >= 0) {
            intersection.push(item);
        }
    });

    intersection.sort();
    console.log(intersection.join(","));
});