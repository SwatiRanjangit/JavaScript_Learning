"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

const arr = [2, 3, 5, 6];
const badNewArr = [1, 6, arr[0], arr[1], arr[2], arr[3]];
console.log(badNewArr);

const newArr = [1, 6, ...arr]; //spread operator
console.log(newArr);

console.log(...arr);

const newMenu = [...restaurant.mainMenu, "Gnocchi"];
console.log(newMenu);

//copy array

const mainMenuCopy = [...restaurant.mainMenu];

console.log(mainMenuCopy);

//join two array

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables : array , strings, maps, sets. Not Objects
const str = "swati";
const letters = [...str, " ", "s."];
console.log(letters);
console.log(...str);

//calling orderPasta function using prompt
const ingridients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredients 3"),
];
console.log(ingridients);

restaurant.orderPasta(...ingridients);

//OBJECTS

const newRestaurent = { foundedIn: 1998, ...restaurant, founder: "swati" };
console.log(newRestaurent);

const restaurentCopy = { ...restaurant };
restaurentCopy.name = "Ristorante Roma";
console.log(restaurentCopy.name);
console.log(restaurant.name);
