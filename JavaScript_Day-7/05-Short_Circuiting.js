/////////////////////////////////////////////////////////////////
// Short Circuiting

// Normally we have used the && and || operators with only boolean operands
// But we can also use these operator with non-boolean value.
// This shows that the short-circuiting operator can accepts non-boolean values as arguments
// and at the same time also return non-boolean values.

// "use strict";

console.log(3 || "Alice");

// 1) The OR Operator

// In case of the || operator, it will return the first truthy value that it encounters.
// If all the value are falsy, then it will return the last value, even if the last value is false

console.log(" " || "Alice");
console.log(undefined || null);

// A practical application of this behavior is as follows:

const swati = {
  name: "swati",
  dob: "1/1/2002",
  birthPlace: "India",
  job: "Teacher",
  hobbies: ["rock climbing", "Travelling"],
};

// Suppose we want to check if a property is present on the object, and we want to use that:

let swatiFriends = swati.friends ? swati.friends : [];
console.log(swatiFriends); //prints: [] since there is no  property called friends defined on the swati friends

// Instead we could have done just this:
// If the property 'friends' does not exist on the friends object, then we assign 'swatiFriends' to be [], else the actual value is assigned

swatiFriends = swati.friends || [];
console.log(swatiFriends); // Prints: []

// But now if we added a property
swati.friends = ["Ranjan", "Saif"];

// And tried fetching the value again

swatiFriends = swati.friends || [];
console.log(swatiFriends);

// 2) The AND Operator

// In case of the && operator, it will return the first falsy value that it encounters.
console.log("and operator");
console.log(0 && "swati");
console.log("swati" && "alice");
console.log(23 && "swati" && true && null && "alice");

// A practical application of this behavior is as follows:
// Suppose we are trying to call a method on the swati object. but we are not sure of the method exists.
// We can wrap the method inside an if-block.

if (swati.printFriendList) {
  swati.printFriendList();
}

// But now, with the AND operator we can do this:
// If the printFriendList property is falsy, the method is never called

swati.printFriendList && swati.printFriendList();

// But now if we add the property

swati.printFriendList = function () {
  console.log(this.friends);
};

swati.printFriendList && swati.printFriendList();
