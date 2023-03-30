'use strict'

/////////////////////////////////////////////
// Arrays= it can store different type of variable at the same time.

//Arrays can be created in two ways:
const friends=['swati','ranjan','sita'];
const years=new Array(2000,2002,2003);
console.log(friends);
console.log(years);
console.log(friends[1]); // value at index 1 of friends array.
console.log(friends.length);

//mutate(change) the value of the array.
years[1]=2004;
friends[2]='riya';
friends[3]='siya'; // we can add element to the array.
console.log(friends);
console.log(years); //although we define array type as const we are able to change the value of array which is not possible in the change in case of const variable because it is immutable.
                    //and this is because only primitive values(int,char,Boolean) can not change they are immutable in case of const but array is not primitive datatype so we can change it. 
friends[5]='rohit';// we skipped the index 4. so at index 4 there will be empty.
console.log(friends);
console.log(typeof friends[4]);// type is : undefined

//NOTE: we can change the variable of the friend and years array as it is of const type, but if we try to point the variable friend or years to a different array. then it will generate error.

// friends=[];  attempt to assign to const or read variable

//diffrent type of variables stored in array:
const friendOfSwati=['tiya','tony','rishav'];
const swati=['Swati','Ranjan','20',friendOfSwati];
console.log(swati);

/////////////////////////////////////////////
// Basic Arrays Operations
//ADD element at the end of array.
friendOfSwati.push("riya");
console.log(friendOfSwati);

//Add element at beginning of the array
friendOfSwati.unshift("Arun");
console.log(friendOfSwati);

//Remove last element of the array and return removed element
let removedEle=friendOfSwati.pop();
console.log(`removed element is: ${removedEle}`);
console.log(friendOfSwati);


//Find index at which perticular element is at
const list=[200,400,500];
let index=list.indexOf(400);
console.log(index);

//find if an element exist in array or not.
let elementExist=friendOfSwati.includes("tony");
console.log(elementExist);

elementExist=friendOfSwati.includes("Arun");
console.log(elementExist);
elementExist=friendOfSwati.includes("Arpit");
console.log(elementExist);

//NOTE: 'includes' method use strict method to check the element present in the array.

const arr=[200,300,400];
console.log(arr.includes(200));
console.log(arr.includes("200"));