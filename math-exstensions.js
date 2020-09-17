// Math Exstensions Library

Math.randomInt = function (low, high) {
    //return a random interger between low (inclusive) and high (exclusive)
    return Math.floor(Math.random() * (high - low) + low);
}

 Math.randomDec = function(low, high) {
        // Return a random decimal between low (inclusive) and high (exclusive)
        return Math.random() * (high - low) + low;
}
