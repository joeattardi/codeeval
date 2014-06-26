var fs = require('fs');

fs.readFileSync(process.argv[2], 'utf-8').trim().split("\n").forEach(function(line) {
    var input = line.split(';');
    var words = input[0].split(' ');
    var indices = input[1].split(' ');
    
    var result = new Array(words.length);

    for (var i = 0; i < words.length; i++) {
        if (indices[i]) {
            result[parseInt(indices[i]) - 1] = words[i];
        } else {
            for (var j = 0; j < result.length; j++) {
                if (!result[j]) {
                    result[j] = words[i];
                }
            }
        }
    }

    console.log(result.join(' ').trim());
});