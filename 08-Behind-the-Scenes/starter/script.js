'use strict';

function calcAge(birthYear) {
    const age = 2037 -birthYear;
    console.log(firstName);
    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);
    }

    if (birthYear >= 1981 && birthYear <= 1996) {
        var millenial = true;
        const str = `Oh, and your're a millenial, ${firstName}`;
        console.log(str);

        function add (a, b) {
            return a + b;
        }
    }
    // console.log(millenial); undefined
    console.log(add(3, 7));
}

const firstName = 'Nhung';
calcAge(2004);
