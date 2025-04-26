const sumAll = function(start, end) {
    let sum = 0;
    if (start > end) {
        for (let i = end; i <= start; i++) {
            sum = sum + i;
        };  
    }
    else if ((start <= 0) || (end <= 0) || (start % 1 != 0) || (end % 1 != 0) ||
    (typeof start !== 'number') || (typeof end !== 'number')) {
        sum = "ERROR";
    }
    else {
        for (let i = start; i <= end; i++) {
            sum = sum + i;
        };
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
