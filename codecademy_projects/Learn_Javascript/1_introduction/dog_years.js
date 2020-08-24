let myAge = 32; 
let earlyYears = 2; 
earlyYears *= 10.5; 
//we're already accounted for the first two years
let laterYears = myAge - 2; 
//calculating the number of dog years accounted by later years
laterYears *= 4; 
//Adding in early and later dog years
let myAgeInDogYears = earlyYears + laterYears;
let myName = 'Erin'.toLowerCase()
console.log (`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)