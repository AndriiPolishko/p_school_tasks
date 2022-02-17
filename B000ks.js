const zeroCounter = function(N) {
    let counter = 0
    let n = 5
    let m = 100;
    while(Math.floor(N/n)) {
        counter += Math.floor(N/n)
        n*=5;
    }
    return counter
}
console.log(zeroCounter(100));
