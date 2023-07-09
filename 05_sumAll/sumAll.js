const sumAll = function (min, max) {
    let sum = 0;
    if(Math.sign(min) === -1 || Math.sign(max) === -1 || !Number.isInteger(min) || !Number.isInteger(max)){
        return 'ERROR';
    }
    else if (max < min) {
        for (let i = max; i <= min; i++) {
            sum = sum + i;
        }
    }
    else {
        for (let i = min; i <= max; i++) {
            sum = sum + i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
