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
};

// // DESTRUCTURING ARRAYS
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

// passing objects to a function
restaurant.orderDelivery({mainIndex: 2, time: "7:00", address: "123, Ngo Quyen"});