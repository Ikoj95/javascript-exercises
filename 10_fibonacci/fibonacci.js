const fibonacci = function (n) {

    if (Math.sign(n) == -1) {
        return 'OOPS';
    }

    let fiboArr = [1, 1];
    for (let i = 0; i < n; i++) {
        let sum = 0;
        sum = fiboArr[i] + fiboArr[i + 1];
        fiboArr.push(sum);
    }
    return fiboArr[n-1];
};

// Do not edit below this line
module.exports = fibonacci;
