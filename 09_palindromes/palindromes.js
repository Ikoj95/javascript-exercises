const palindromes = function (word) {

    const placeholder = word.toLowerCase().replaceAll(/[\s.,?!]/g, ""); //[^a-z0-9] better solution
    const reverse = placeholder.split("").reverse().join("");

    if (placeholder === reverse) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
