"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23 , Firenze, Itlay",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  staterMenu: ["Focaccia", "Bruschetta", "Gralic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thr: {
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
  },

  order: function (staterIndex, mainIndex) {
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

// console.log(restaurant.openingHours.mon.open); //throws error.

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// with optional chaining
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours?.thr?.open);

const weekDays = ["mon", "tue", "wed", "thr", "fri", "sat", "sun"];

for (const day of weekDays) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");

//Arrays
const users = [{ name: "swati", email: "swati@gmail.com" }];
// console.log(users);
// const users = [];
console.log(users[0]?.name ?? "user array empty");

if (users.length > 0) console.log(users[0].name);
else console.log("user array empty");
