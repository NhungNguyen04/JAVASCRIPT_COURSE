'use strict';

// ------------------------------ SCOPING CHAIN ---------------------------
// function calcAge(birthYear) {
//     const age = 2037 -birthYear;
//     console.log(firstName);
//     function printAge() {
//         const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);
//     }

//     if (birthYear >= 1981 && birthYear <= 1996) {
//         var millenial = true;
//         const str = `Oh, and your're a millenial, ${firstName}`;
//         console.log(str);

//         function add (a, b) {
//             return a + b;
//         }
//     }
//     // console.log(millenial); undefined
//     // console.log(add(3, 7)); error: add is not defined in calcAge
// }

// const firstName = 'Nhung';
// calcAge(2004);

// --------------------------------- HOISTING AND TDZ -----------------------
// VARIABLES
// console.log(name);
// console.log(job);
// console.log(age);

// var name = 'Nhung';
// let job = 'student';
// const age = 19;

// FUNCTIONS
// console.log(add(5, 8));
// console.log(addExpr(5, 8));
// console.log(addArr(5, 8));

// function add(a, b) {
//     return a + b;
// }

// const addExpr = function(a, b) {
//     return a + b;
// }

// const addArr = (a, b) => {a+b;}

// Example
// if(!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log ('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// ---------------------------------- THIS KEYWORD -----------------------

// console.log(this);

// const calcAgeArr = (birthYear) => {
//     console.log(2024-birthYear);
//     console.log(this);
// };
// calcAgeArr(2004);

// const Nhung = {
//     name: 'Nhung',
//     year: 2004,
//     calcAge : function () {
//         console.log(this.year);
//     }
// };

// const Pi = {
//     year: 2022
// };

// Nhung.calcAge();
// Pi.calcAge = Nhung.calcAge;

// Pi.calcAge();

// const f = Nhung.calcAge;
// f();

// ---------------------- REGULAR FUNCTIONS VS ARROW FUNCTIONS --------------------

// var name = "Pi";

// const Nhung = {
//     name: 'Nhung',
//     year: 2004,
//     // Solution 1
//     // calcAge : function () {
//     //     console.log(this.year);
//     //     const self = this;
//     //     const isMillenial = function () {
//     //         console.log(self);
//     //         console.log(self.year >= 1991 && self.year <= 1996);
//     //     }
//     //     isMillenial();
//     // },
//     // Solution 2
//     calcAge :  function() {
//         console.log(this.year);
//         const isMillenial = () => {
//             console.log(this);
//             console.log(this.year >= 1991 && this.year <= 1996);
//         }
//         isMillenial();
//     },
//     greet: () => {console.log(`Hey, ${this.name}`);}
// };

// Nhung.greet();
// console.log(Nhung);
// Nhung.calcAge();

// arguments keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a+b;
};
addExpr(3, 8, 7, 8, 9);

var addArrow = (a, b) => {
    console.log(arguments);
    return a+b;
};

addArrow(1, 2);