let number;
let massiv;
let arrayContainer = [];
function getSumOfSequence(number) {
  if (number >= 0) {
    for (let i = 1; i <= number; i++) {
      arrayContainer.push(i);

      // container.pop() = number;
      console.log(arrayContainer);
    }
    number = Number(arrayContainer[1]) + Number(arrayContainer.length - 1);
    return number;

    // console.log(number);
  }
  // return arrayContainer.length;
}

// getSumOfSequence(5);

console.log(getSumOfSequence(10));
// // console.log(getSumOfSequence(10));

// Если честно я понял, как создать такой массив, но я так и не понял, каким образом я получил сумму

// let number;
// let massiv;
// let arrayContainer = [];
// function getSumOfSequence(massiv) {
//   if (number >= 0) {
//     for (let i = 0; i < massiv; i++) {
//       arrayContainer.push(i);

//       // container.pop() = number;
//       // console.log(arrayContainer);
//     }
//     number = arrayContainer;

//     // console.log(number);
//   }
//   return (number = `${massiv} ${
//     Number(arrayContainer[0]) + Number(arrayContainer.length)
//   }`);
// }
// // getSumOfSequence(5);

// console.log(getSumOfSequence(5));
