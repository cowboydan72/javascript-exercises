const reverseString = function(words) {
    //Make string into reversed array
    let string = "";
    string += words;
    let letters = string.split("");
    letters.reverse();


    const reversedString = letters.join("");
    return reversedString;
}


// Do not edit below this line
module.exports = reverseString;
