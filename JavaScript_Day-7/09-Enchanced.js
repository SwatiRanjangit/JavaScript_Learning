"use strict";

//Enhanced object litreals
const weekDays = ["mon", "tue", "wed", "thr", "fri", "sat", "sun"];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 20,
  },
  fri: {
    open: 11,
    close: 21,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const resturant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23 , Firenze, Itlay",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  staterMenu: ["Focaccia", "Bruschetta", "Gralic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  //   openingHours: openingHours,

  // ES6 enhanced object litreals
  openingHours,

  order(staterIndex, mainIndex) {
    return [this.staterMenu[staterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

console.log(resturant);
