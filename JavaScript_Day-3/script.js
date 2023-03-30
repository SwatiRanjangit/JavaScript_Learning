'use strict'

/////////////////////////////////
// Truth ans Falsy Values in JS.
//in JS there are only 5 falsy values:
// 0, ''(empty string), undefined , null, NaN
//What this mean is that any value that is not one of the above values is going to converted in 'true' if we convert it into Boolean type variable.
// only these 5 values will be false if we convert it into Boolean type.


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean({})); //empty object returns true.
console.log(Boolean('sweet'));

const money=null;// null is falsy

if(money) // so here condition became false and else part will be printed as a outout.
{
    console.log('you are a bikhari...go and get a job and earn money.');
}else{
    console.log('keep growing and earn lots of money.');
}

/////////////////////////////////
// Equality Operator: == vs. ===
// '===' is known as strict quality operator. This operator does not do any type corecion(type conversion).
// '==' is known as loose equality. type corecion will be done with this.

console.log("swati" == 21);
console.log("swati" === 21);
console.log('18'===18);
console.log('18'== 18);

// Similiary '!==' is strict version of not equal to and '!=' is loose not equal to.
console.log('21'!=21);
console.log('21'!==21);
// always use strict vesrion so that these type of problem not faced.

const luckyNo=Number(prompt("Choose your number..??"));
console.log(luckyNo);
console.log(typeof luckyNo);

if(luckyNo=== 4)
{
    console.log("Wow you are lucky....you got a lucky number. please collect your prize.");
}else if(luckyNo===6){
    console.log("Nice choice...but have a better luck next.")
}else if(luckyNo===7){
    console.log("better luck next....");

}else{
    console.log("number is not same as given in list.");
}

if(luckyNo!==4) console.log("you are not a lucky man.");

/////////////////////////////////
// Logical Operators. (&&, ||, !..etc)

const hasVisa=true;
const lostOfMoney=true;

console.log(hasVisa && lostOfMoney);
if(hasVisa && lostOfMoney){
    console.log("You are ready for travelling Abroad..go get your bag pack.");
}else{
    console.log("firstly take your visa and money..");
}

console.log(hasVisa || lostOfMoney);
console.log(!hasVisa);

/////////////////////////////////
// Switch Statement.
const day=String(prompt("enter day.to know your daily routine."));

switch(day)
{
    case 'monday': //day===monday.
        console.log("Watering Plants.");
    case 'tuesday':
        console.log("clean your room.");
    case 'wednesday':
        console.log("do DSA practice.");
        break;  // this will break your case if this condition does'nt met. 
    case 'thursday':
        console.log("Take a Chill Pill..");
        break;
    case 'friday':
        console.log("visit your near temple.");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy it's Weekend Time.");
        break;
    default:
        console.log("not a valid day...please choose right day.");
}


/////////////////////////////////
// Switch Expressions.
// 3+4
// 1991
// true && false && !false

if(5>3)
{
    console.log("5 is bigger");
}


/////////////////////////////////
// Conditional Operator(Ternary Operator)

const age=25;
age>=18 ? console.log("eligible for vote") : console.log("not eligible for vote.");
console.log(`i like to drink ${age>=18 ? 'wine': 'water'}`);