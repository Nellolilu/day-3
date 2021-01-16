// functions and arrays

// 3 parts of a function
// 1 -> function keyword
// 2 -> function name
// 3 -> function arguments / parameters
// 4 -> function body

/**
 * function -> function keyowrd
 * sayHi -> function name
 * () -> function arguments / parameters -> empty
 * {} everything insde -> function body
 */
function sayHi() {
  console.log("Hi");
  //   return `Hello there`;
}

// sayHi();
console.log(sayHi());
console.log(1);

// const myVar = sayHi();
// console.log("myVar:", myVar);
const name = "nelly";
console.log(name.toUpperCase());

/**
 * function -> function keyowrd
 * age -> function name
 * (birthYear) -> function arguments / parameters -> birthYear Argument
 * {} everything inside -> function body
 */
function age(birthYear) {
  const age = 2021 - birthYear;
  return age;
}

const myAge = age(1994);
const filipeAge = age(1996);

function canDrink(age) {
  if (typeof age !== "number") {
    return;
  }
  if (age >= 18) {
    console.log("Theoretically, you can drink");
  } else if (age === 17) {
    console.log(
      "If you pass by it, you can maybe drink, and no one will be mad"
    );
  } else {
    console.log("Gandalf would yell, YOU SHALL NOT DRINK");
  }
}

canDrink(24);
canDrink(12);
canDrink("OF COURSE I CAN");

function haveYouMet(wingman, person) {
  console.log(`Hello ${person}, haaaaaave you met ${wingman}`);
}
haveYouMet("weronika", "gizem");
haveYouMet("Hugo", "Ola");

console.clear();
console.log("LIKE A LOT");
console.error("OOPSIE");
console.warn("BE CAREFUL");
console.clear();

const log = console.log;
const clear = console.clear;
clear();

// ARRAY

const shoppingList = [
  "milk",
  "eggs",
  "wataaa",
  "veggies",
  ["other stuff"],
  false,
  null,
  undefined,
  {},
  function doSomething() {},
];

log(shoppingList);
shoppingList[0] = "almond milk";
log(shoppingList);
shoppingList.push("ADDED TO END");
log(shoppingList);
shoppingList.pop();
shoppingList.pop();
shoppingList.pop();
log(shoppingList);
shoppingList.unshift("Adds to begining");
log(shoppingList);
shoppingList.shift();
shoppingList.shift();
shoppingList.shift();

clear();

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("arr:", arr);
// arr.splice(0, 0, 0);
// log(arr);
// arr.splice(3, 4);
log(arr);
// const newArr = arr.slice(5);
// log(newArr);

for (let i = 0; i < arr.length; i++) {
  //   if (i === 2) {
  //     arr[i] = Infinity;
  //   }
  console.log(arr[i]);
}
log(arr);
let sum = 0;
for (let number of arr) {
  sum += number;
  //   console.log(`The ${number} is the inside the array`);
}

log(`You have to pay ${sum} to acquire these items`);
clear();
function forEach(arr, callBackFunction) {
  for (let i = 0; i < arr.length; i++) {
    callBackFunction(arr[i], i, arr);
  }
}

// forEach(arr, function (element, index, array) {
//   log("|elementt", element, "indx", index, "array", array);
// });

let sumOfCart = 0;

arr.forEach(function (element) {
  sumOfCart += element;
  //   log("|elementt", element);
});
log(`You have to pay ${sumOfCart} to acquire these items`);

// arr.forEach(function () {

// })
