//  variable containing current age
const myAge = 35;
// created a variable with a value of 2 assigned to it
let earlyYears = 2;
earlyYears *= 10.5;
//subtracts 2 from the age
let laterYears = myAge - 2;
//Multiplies later years by 4
laterYears *= 4;

console.log(earlyYears, laterYears);
//Adds my age to dog years
let myAgeInDogYears = earlyYears + laterYears;
//Making my name in lower case
let myName = 'Sarah'.toLowerCase();
  
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
