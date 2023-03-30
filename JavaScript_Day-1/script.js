'Use strict'


////Linking JsFile
let js="hello world";
console.log(js);

console.log(40+45*3);

/////////////////////////////////
// Values and Variables

let firstName="Swati";
console.log(firstName);
let $fun=24;
console.log($fun);

let myCurrentJob="Tech Student";
console.log("Hello myself "+firstName+" a "+myCurrentJob);
console.log(`Hello myself ${firstName} a ${myCurrentJob}`); //Template Literals........
/////////////////////////////////
// Data Types
let truth=true;
console.log(truth);
console.log(typeof truth);
let name1="Swati";
console.log(name1);
console.log(typeof name1);
console.log(typeof null);
let none;
console.log(none);
console.log(typeof none);  // when a variable is first declared in js, it is 'undefined' ans it's type is also 'undefined';

//Note the following though : 'null' is again both a type as well as a value, just like 'undefined'
// so the type of undefined return undefined, but typeof null return the object;
// so the following make no sense. so there is normally considered as a bug in js(?);


///////////////////////////////////////
// let, const, var

let FirstName1="Swati";  // mutuable (it can be changed......)
console.log(FirstName1);
firstName1="Ranjan";

console.log(FirstName1);
const yearOfBirth=2002;  //immutable (can't change value of const)
// yearOfBirth=2003;  // For the same reason, creating a const variable without assigning a value to it is invalid;
// console.log(yearOfBirth); 

//we don't even need to define variable at all, we can directly write the name of variable and be done with it;
// but this is a very bad idea, because in that case js will create a property on the global object (?);

middleName='kumar';
console.log(middleName);

var job='programmer';
console.log(job);

////////////////////////////////
// Basic operators
// Math operators

const year=2023;
const ageSwati= year-2002;
const ageRanjan= year-2001;
console.log(ageSwati, ageRanjan);

console.log(ageSwati*2, ageRanjan/10, 2 ** 3); // **(exponential operator)

//Assignment Operator
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25;
x *= 4; // x = x * 4 = 100;
x++; // x = x + 1;
x--;
 console.log(x);

// comparison operator

console.log(ageSwati > ageRanjan); // >,<,>=,<=;

let z, y;
z = y = 25 - 10 - 5; // z = y = 10, z = 10 , y = 10;
