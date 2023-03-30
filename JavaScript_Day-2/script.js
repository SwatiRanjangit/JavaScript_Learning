'use strict'

/////////////////////////////////
// String and Template Literals

const firstName="Swati";
const job="Tech Student";
const yearOfBirth=2002;
const year=2023;

const details = "I'm " + firstName + ', a ' + (year - yearOfBirth) + ' years old ' + job + '!';
console.log(details); // this is not good practice because using + freaquently looks bad

//Alternatively you could use Template Literals.
let message=`Myself ${firstName}, a (${year-yearOfBirth}) years old ${job} ! Nice to meet you people....!!`;
console.log(message);

//You can also use template strings to write multi line Strings
console.log(`Hey people..I'm doing Btech CSE,
from Banasthali Vidyapith,
currently learning JavaScript.

it's interesting...!!`);


////////////////////////////////////////
// Taking Decisions: if / else statement

const age=13;
if(age>18)
{
    console.log('You are eligible for voting......proceed further.');
}else{
    const yearLeft=18-age;
    console.log(`you younger enough for voting....come after ${yearLeft} years, when  you become 18+.`);
}

//////////////////////////////
// Type Conversion and Coercion
// Type Conversion

// This won't work obviously
let currentYear=2023;
console.log("After 10 years, it will be "+ currentYear+10); //prints:  202310  because whatever type we use at first all will be converted in that type.
console.log(currentYear + 10); //prints: 202310

// Hence for removing that type of problem we  do type conversion(converting type).
console.log("In 10 Years, it will be "+ Number(currentYear)+10);
console.log(10+ Number(currentYear)+10+"Swati");
// what if we try to convert something to number that is not really a number
console.log(Number("RGBK21")); // prints: NaN (not a number) js gives us a NaN value when an operation is involving numbers fails to generate a value that is a number.

console.log(typeof NaN);//prints: number it's strange.
// similarly we can covert Number to Strings
console.log(String(23),23);// you can see that the values are different because they will be differently colored in console   


////////////////////////
//Type Coercion

// Type coercion happens when a operator is dealing with two value that have different types. In this case, JS will - behind the scenes - convert one value to another type
// For eg. when the '+' operator is given a number and a string, it will be convert number to String.
console.log("In 10 years it will be "+ currentYear +10); // print: In 10 Years, It will be 202310.
console.log('23'-'10'-3);
console.log('20'+'10'+3);
console.log('23'*'2');
console.log('25'/'5');
console.log('56'>'43');


// so the anomaly is the '+' operator that converts number to strings. all other convert, String to numbers
console.log('23' + '10' - 3); //prints: 2307
console.log('23' - '10' + 3); //prints : 16
console.log('23' - '10' + '3'); // prints : 133
console.log(2 + 3 + 4 + '5'); // prints: 95