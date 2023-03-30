"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23 , Firenze, Itlay",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  staterMenu: ["Focaccia", "Bruschetta", "Gralic Bread", "Caprese Salad"],
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
      open: 0,
      close: 24,
    },
  },

  order: function (staterIndex, mainIndex) {
    return [this.staterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    staterIndex = 1,
    mainIndex = 0,
    time = "20.00",
    address,
  }) {
    console.log(
      `order recieved! ${this.staterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  // passing object to the function orderDelivery. without giving time so it will take the default value of time as mentioned in the function that is : 20.00
  staterIndex: 2,
  mainIndex: 1,
  address: " Banasthali Vidyapith",
});

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default Values

const { menu = [], staterMenu: staters = [] } = restaurant;
console.log(menu, staters);

// mutating variables

let a = 10;
let b = 22;
const obj = {
  a: 21,
  b: 14,
  c: 78,
};

console.log(a, b);
({ a, b } = obj);
console.log(a, b);

//nested objects

const {
  fri: { open: o, close: c },
} = hours;
console.log(o, c);
