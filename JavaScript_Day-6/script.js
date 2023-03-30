"use strict";
//////////////////////////////////////////////////////////
// Introduction to Objects

let intro = {
  firstName: "Swati",
  lastName: "Ranjan",
  birthYear: 2001,
  friends: ["Rashmi", "kanika", "sherya"],
  hasDriverLicense: true,
};

// Dot vs Bracket Notation (to access any value from the object).
console.log(intro);

console.log(intro.firstName);
console.log(intro["lastName"]);

const nameKey = "Name";
console.log(intro["first" + nameKey]);
console.log(intro["last" + nameKey]);

const intrestedIn = prompt(
  "what do you know about swati? choose between firstName, lastName, birthYear, friends, hasDriverLicense"
);
if (intro[intrestedIn]) {
  console.log(intro[intrestedIn]);
} else {
  console.log(
    "wrong request! choose between  firstName, lastName, birthYear, friends, hasDriverLicense"
  );
}

intro.location = "Rajsthan";
intro["instagram"] = "sam@ra";
console.log(intro);

console.log(
  `${intro.firstName} has ${intro.friends.length} friends, and his best friend is ${intro.friends[1]} `
);

//////////////////////////////////////////////////////////
// Object Methods

const intro1 = {
  firstName: "Michel",
  lastName: "simen",
  birthYear: 1999,
  job: "Student",
  friends: ["john", "jimmy", "jiya"],
  hasDriverLicense: true,

  calcAge: function (birthYear) {
    return 2023 - this.birthYear;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(intro1.calcAge());
console.log(intro1.getSummary());

//////////////////////////////////////////////////////////
// LOOPING

for (let i = 0; i < 10; i++) {
  console.log(`day ${i}`);
}

//////////////////////////////////////////////////////////
// Looping Array Break and Continue.

const name = ["swati", "ranjan", "riya", ["tushar", "tiya", "sita"], "divya"];
const types = [];

for (let i = 0; i < name.length; i++) {
  console.log(name[i], typeof name[i]);
  //   types[i] = typeof name[i];
  types.push(name[i]);
}
console.log(types);

const years = [1991, 1990, 1900, 2000];
const age = [];
for (let i = 0; i < years.length; i++) {
  age.push(2023 - years[i]);
}
console.log(age);

//////////////////////////////////////////////////////////
//  Break and Continue.

console.log("-------ONLY STRINGS--------");
const name1 = [
  "swati",
  "ranjan",
  123,
  453,
  "riya",
  ["tushar", "tiya", "sita"],
  "divya",
];
for (let i = 0; i < name1.length; i++) {
  if (typeof name1[i] !== "number") continue;
  console.log(name1[i], typeof name1[i]);
}

console.log("-------ONLY NUMBERS--------");
for (let i = 0; i < name1.length; i++) {
  if (typeof name1[i] === "number") {
    break;
  }
  console.log(name1[i], typeof name1[i]);
}

//////////////////////////////////////////////////////////
//  Loop Backwards and Loop in Loop.

const swati = [
  "swati",
  "ranjan",
  2023 - 2002,
  "student",
  ["michel", "john", "peter"],
  true,
];

for (let i = swati.length - 1; i >= 0; i--) {
  console.log(i, swati[i]);
}

for (let day = 1; day < 5; day++) {
  console.log(`--------Start Exercise ${day}--------`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${day}: Lifting weight repetation ${rep} `);
  }
}

//////////////////////////////////////////////////////////
// The While Loop
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weight repetation ${rep} `);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`you rolled a dice ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`loop is about to end....`);
}
