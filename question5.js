// alert("Hello World");
let clientsEstimations = [];

// prompt("Как вы оцениваете нашу кофейню от 1 до 10?");

function askClientToGiveEstimation() {
  const like = Number(prompt("Как вы оцениваете нашу кофейню от 1 до 10?"));
  if (!isNaN(like) && like >= 1 && like <= 10) {
    console.log(like);
  }
  clientsEstimations.push(like);
}

for (let i = 0; i < 5; i++) {
  askClientToGiveEstimation();
}
// alert("цикл отработал 5 раз");
let goodEstimations = [];
let notGoodEstimations = [];

function ourReviews(clientsEstimations) {
  for (let x = 0; x < clientsEstimations.length; x++) {
    if (clientsEstimations[x] > 5) {
      goodEstimations.push(x);
    } else {
      notGoodEstimations.push(x);
    }
  }
  return {
    goodEstimations,
    notGoodEstimations,
  };
}
const reviewResults = ourReviews(clientsEstimations);

alert(
  `Всего положительных оценок: ${reviewResults.goodEstimations.length} Всего отрицательных оценок: ${reviewResults.notGoodEstimations.length}`
);
