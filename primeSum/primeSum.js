var primes = getPrimes(1000);

var sum = primes.reduce(function(previousValue, value) {
    return previousValue + value;
});

console.log(sum);

function getPrimes(numPrimes) {
    var upperBound = Math.round(numPrimes * (Math.log(numPrimes) + Math.log(Math.log(numPrimes))));    
    var primes = [];

    var nums = new Array(upperBound);
    var p = 2;

    while (true) {
        for (var i = 2 * p; i < nums.length; i += p) {
            nums[i] = true;
        }

        for (p = p + 1; nums[p] == false && p < nums.length; p++);
        if (p == nums.length) {
            break;
        }
    }

    for (var i = 2; i < nums.length && primes.length < 1000; i++) {
        if (!nums[i]) {
            primes.push(i);
        }
    }

    return primes;
}

