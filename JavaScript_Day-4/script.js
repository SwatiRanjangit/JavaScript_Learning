'use strict'

let hasDrivingLicense= false;
const passTest=true;
if(passTest) hasDrivingLicense=true;
if(hasDrivingLicense) console.log("i can drive");

// const interface='audio'; // they are reserved words so we can't use it as variable.
// const private=534;

/////////////////////////////////////////////
// Functions
// Two types of function  1. function that doen not return anything  2.function with return type.

//1. function that doen not return anything
function myBlog()
{
    console.log("Hello World...welcome to the digital world.");
}
myBlog(); // calling function/invoking function.

//2.function with return type.
function fruitProcessor(apples,oranges)
{
    const juice=`juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const callFruitProcessor=fruitProcessor(5,4);
console.log(callFruitProcessor);

/////////////////////////////////////////////
// Functions Declaration vs Expressions

// using function Declaration. it can be called before function defination.
console.log(`Age is : ${calcAge(2023,2002)}`);

function calcAge(currentYear,yearOfBirth){ //function defination.
    // const age=currentYear-yearOfBirth;
    // return age;
    return currentYear-yearOfBirth;
}

//using function expression
// function without a name is called 'Anonymous Function'; function itself stored in a variable.
//function expression must be called after function defination.
const calcAge2=function(currentYear,yearOfBirth){
    return currentYear-yearOfBirth;
}
console.log(`Age2 is : ${calcAge2(2023,2002)}`);

/////////////////////////////////////////////
//Arrow Functions 

const calYear=birthYear => 2023-birthYear; //when there is one argument then line of code can be written in only is one line.
console.log(`year: ${calYear(1991)}`);

const yearUntilRetirement=(birthYear,firstName) => {
    const age3=2023-birthYear;
    const retirement=65-age3;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearUntilRetirement(2000,"swati"));