var fs = require('fs');
fs.readFileSync(process.argv[2], 'utf-8').trim().split("\n").forEach(function(line) {    
    if (line.trim() != "") {        
        var menu = JSON.parse(line);
        console.log(count(menu.menu.items));
    }
});

function count(obj) {
    var total = 0;
    if (Array.isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {
            total += count(obj[i]);            
        }

        return total;
    } else if (obj != null && obj.label) {
        return obj.id;
    } else {
        return 0;
    }
}