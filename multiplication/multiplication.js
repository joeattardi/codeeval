for (var i = 1; i <= 12; i++) {
    for (var j = 1; j <= 12; j++) {
        var value = (i * j) + "";
        while (value.length < 4) {
            value = " " + value;
        }
        process.stdout.write(value);
    }

    process.stdout.write("\n");
}