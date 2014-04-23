fs = require("fs");

var board = [];
for (var i = 0; i <= 255; i++) {
    board[i] = [];
    for (var j = 0; j <= 255; j++) {
        board[i][j] = 0;
    }
}

fs.readFileSync(process.argv[2], 'utf-8').trim().split("\n").forEach(function(line) {
    var arr = line.split(" ");
    var cmd = arr[0];
    var arg1 = parseInt(arr[1]);
    var arg2 = parseInt(arr[2]);

    if (cmd === "SetRow") {
        setRow(arg1, arg2);
    } else if (cmd === "SetCol") {
        setCol(arg1, arg2);
    } else if (cmd === "QueryRow") {
        console.log(queryRow(arg1));
    } else if (cmd === "QueryCol") {
        console.log(queryCol(arg1));
    }
});

function setCol(col, value) {
    for (var i = 0; i < board.length; i++) {
        board[i][col] = value;
    }
}

function setRow(row, value) {
    for (var i = 0; i < board.length; i++) {
        board[row][i] = value;
    }
}

function queryCol(col) {
    var sum = 0;
    for (var i = 0; i < board.length; i++) {
        sum += board[i][col];
    }

    return sum;
}

function queryRow(row) {
    var sum = 0;
    for (var i = 0; i < board.length; i++) {
        sum += board[row][i];
    }

    return sum;
}