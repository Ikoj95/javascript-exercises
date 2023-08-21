const findTheOldest = function (e) {
    const date = new Date();
    e.forEach(object => {
        if (!object['yearOfDeath']) {
            object['yearOfDeath'] = date.getFullYear();
        }
    })
    const res = e.sort((a, b) => {
        const old = a.yearOfDeath - a.yearOfBirth;
        const young = b.yearOfDeath - b.yearOfBirth;
        if (old > young) {
            return -1;
        }
        else {
            return 1;
        }
    });
    return res[0];
};

// Do not edit below this line
module.exports = findTheOldest;

