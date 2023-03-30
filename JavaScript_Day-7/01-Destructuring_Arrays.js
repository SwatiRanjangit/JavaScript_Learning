"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23 , Firenze, Itlay",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  staterMenu: ["Focaccia", "Bruschetta", "Gralic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (staterIndex, mainIndex) {
    return [this.staterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// console.log(arr);
console.log(a, b, c);

const [x, y, z, q] = arr;
console.log(x, y, z, q);
console.log(arr);

const [x1, y1, z1, q1 = 1] = arr; // using default parameter
console.log(x1, y1, z1, q1);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Swapping two array using traditional method
// const temp = main
// main = secondary
// secondary = temp

//swapping of two array
console.log("before swapping: ", main, secondary);
[main, secondary] = [secondary, main];
console.log("after swapping: ", main, secondary);

// recieve 2 return value from a function

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, ",", mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, j, k] = nested;
console.log(i, j, k);

const [p, , [m, n]] = nested;
console.log(m, n);

//Defalut vaues
const [u = 1, v = 1, r = 1] = [8, 9];
console.log(u, v, r);
