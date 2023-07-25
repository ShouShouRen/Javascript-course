'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 324;

// function logger(){
// console.log('My name is Jonas');
// }

// logger();

// function fruitProcessor(apples ,oranges){
//   console.log(apples,oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} and oranges.`;
//   return juice;
// }

// let juicereturn = fruitProcessor(3,45);
// console.log(juicereturn);

// function calcAge1(birthDay) {
//   const age = 2023 - birthDay;
//   return console.log(age);
// }

// const calcAge2 = function(birthDay) {
//   const age = 2023 - birthDay;
//   return console.log(age);
// }

// calcAge1(2004);
// calcAge2(2004);

// Arrow function
// const calcAge3 = birthday => 2023 - birthday;
// const age3 = calcAge3(2004);
// console.log(age3)

// const yearsUntilRetirement = (birthday, firstName) => { const age = 2023 - birthday; const retirement = 65 - age; return `${firstName} retires in ${retirement} years` };
// console.log(yearsUntilRetirement(1991, 'Peter'));
// console.log(yearsUntilRetirement(2004, 'Peter'));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangesPieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apples pieces and ${orangesPieces} and oranges pieces.`;
//   return juice;
// }

// let now = fruitProcessor(2,3);
// console.log(now); 

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(2, 3, 4));

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(12, 43, 21);
// console.log(scoreDolphins);
// console.log(scoreKoalas);
// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log('Koalas win');
//   } else {
//     console.log('No team wins');
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas)
// checkWinner(324,123)

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(123, 324, 4536);