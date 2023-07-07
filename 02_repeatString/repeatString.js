const repeatString = function(word,num) {
    let str = '';
    if(Math.sign(num) === -1){
        return 'ERROR';
    }
    for(let i = 1;i <= num;i++){
        str = str + word;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
