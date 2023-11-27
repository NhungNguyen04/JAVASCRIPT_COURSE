// Remember, we're gonna use strict mode in all scripts now!
'use strict';
const printForecast = function(arr) {
    let str = '...';
    for(let i = 0; i < arr.length; i++) {
        str += `${arr[i]} ºC in ${i+1} days...`;
    }
    return str;
}

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));