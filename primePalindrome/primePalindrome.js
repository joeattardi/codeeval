for (var num = 1000; num >= 0; num--) {
    if (isPrime(num) && isPalindrome(num)) {
        console.log(num);
        break;
    }
}

function isPalindrome(num) {
    var numString = new String(num);
    var mid = numString.length / 2;

    for (var i = 0; i < mid; i++) {
        if (numString[i] != numString[numString.length - 1 -i]) {
            return false;
        }
    }

    return true;
}

function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}
