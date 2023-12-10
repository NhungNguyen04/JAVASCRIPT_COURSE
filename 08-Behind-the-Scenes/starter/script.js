'use strict';

// -------- SCOPING CHAIN -------------
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

// ---------- HOISTING AND TDZ ---------
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

var x = 1;
let y = 2;
const z = 3;