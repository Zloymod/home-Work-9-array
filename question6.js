const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;
/////////////////////////////////     FOR       ////////////////////////////////////////////
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i] ** 3;
// }
// console.log(sum);
////////////////////////////////     FOR OF     /////////////////////////////////////////
// for (const item of numbers) {
//   //   console.log(item);
//   sum += [item] ** 3;
// }
// console.log(sum);
/////////////////////////////////////   ForEach     ////////////////////////////////////

// numbers.forEach((item) => {
//   sum += item ** 3;
// });
// console.log(sum);

/////////////////////////////////////   Reduce  //////////////////////////////////////////
const summ = numbers.reduce((acc, item) => {
  (acc += item ** 3), console.log(acc, item);
  return acc;
}, 0);
console.log(summ);
