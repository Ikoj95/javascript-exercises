const removeFromArray = function (myArr, ...args) {
    
    return myArr.filter(x => !args.includes(x));
    
    //let index = myArr.indexOf(myArr, ...args);
    //myArr.splice(index,1);
    //return myArr
};

// Do not edit below this line
module.exports = removeFromArray;
