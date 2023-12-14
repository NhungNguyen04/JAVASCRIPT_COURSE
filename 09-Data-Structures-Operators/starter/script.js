'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({starterIndex = 1, mainIndex = 1, time = "6:00", address}) {
    console.log(`Order received: ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]} at ${time} to ${address}`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here's your pasta made with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza: function(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  }
};

// // ---------------------------------- DESTRUCTURING ARRAYS ---------------------------------------------------
// // skip value
// const [first, , second] = restaurant.categories;
// console.log(first, second);

// // Destructuring values returned from a function
// const [starter, main] = restaurant.order(2, 1);
// console.log(starter, main);

// // Nested destructuring
// const nested = [1, 2, [4, 5]];
// const [i, j, [h, k]] = nested;
// console.log(i, j, h, k);

// // Default values
// const [a=1, b=0, [c=8, d=12, g=10], e=3, f=22] = nested;
// console.log(a, b, c, d, e, f, g);

// // DESTRUCTURING OBJECTS
// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const {
//   menu = [], starterMenu: starters = [],
// } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};
// ({a, b} = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: {open: o, close: c},
// } = openingHours;
// console.log(o, c);

// // passing objects to a function
// restaurant.orderDelivery({mainIndex: 2, time: "7:00", address: "123, Ngo Quyen"});

// // ------------------------------- THE SPREAD OPERATOR (...) ------------------------------------------------
// const arr = [6, 7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2], arr[3]];
// console.log(badNewArr);

// const goodNewArr = [1, 2, ...arr];
// console.log(goodNewArr);
// console.log(...goodNewArr);

// const newMenu = [...restaurant.mainMenu, 'Pho'];
// console.log(newMenu);

// // Copy array
// const newMainMenu = [...restaurant.mainMenu];
// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// // Iterables: arrays, sets, strings, maps, NOT objects
// const str = 'Nhung'
// const letters = [...str, ' ', 'N.'];
// console.log(letters);
// console.log(...str)
// // console.log(`${...str} Nguyen`);

// // Real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1: "),
//   prompt("Ingredient 2: "),
//   prompt("Ingredient 3: "),
// ];
// console.log( ingredients);
// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = {foundedIn: 1981, ...restaurant, owner: "Nhung"};
// console.log(newRestaurant);
// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Homie';
// console.log(restaurantCopy);
// console.log(restaurant);

//----------------------------------------- REST PATTERNS AND PARAMETERS -------------------------------------------------------
// SPREAD, because on right side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on left side of =
const [a, b, ...others] = [1, 2, 4, 5, 6];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// Functions
const add = function (...numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++)
    sum += numbers[i];
  console.log(sum);
}
add(2, 3);
add(2, 3, 4);
const x = [6, 9, 10, 12, 345];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives');