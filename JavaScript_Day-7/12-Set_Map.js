"use strict";

//set
/*
const orderSet = new Set([
  "pasta",
  "pizza",
  "pasta",
  "Risotto",
  "pasta",
  "pizza",
]);

console.log(orderSet);

console.log(new Set("swwwwwaaaatttiii"));
console.log(orderSet.size);
console.log(orderSet.has("pizza"));
orderSet.add("Garlic Bread");
console.log(orderSet);
orderSet.delete("Risotto");
console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

//Example

const staff = ["waiter", "chef", "waiter", "manager", "chef"];

const staffUnique = [...new Set(staff)];
console.log(staffUnique); //print the unique elemnts of staff list

console.log(new Set(["waiter", "chef", "waiter", "manager", "chef"]).size);

console.log(new Set("swatiranjan").size);

//MAPS

const rest = new Map();
rest.set("name", "Classico Italliano");
rest.set(1, "Firenze, Itlay");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open: D")
  .set(false, "we are closed : ");

console.log(rest);
console.log(rest.get("name"));
console.log(rest.get("categories"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();
// console.log(rest);

const arr = [1, 2];
rest.set(arr, "Test"); // we can not directly give 2 key for one value we can do it using variable.
console.log(rest);
console.log(rest.get(arr));

*/

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

//Maps Iteration
const question = new Map([
  ["question", "what is the best programming language int the world"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "correct"],
  [false, "Try Again!"],
]);

console.log(question);

//Convert objecyt to map
console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt("your anwer"));
console.log(answer);
console.log(question.get(question.get("correct") === answer));

//convert map into array

console.log(...question);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());
