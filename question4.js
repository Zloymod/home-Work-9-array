const coffees = ["Latte", "Cappuccino", "Americano"];
const prices = [1.5, 1, 2];
const updatedPrices = prices.map((item) => {
  return item * 2;
});
// console.log(updatedPrices);
let message = "";
for (let i = 0; i < coffees.length; i++) {
  message += `Кофе ${coffees[i]} сейчас стоит ${updatedPrices[i]} евро\n`;
}

alert(message);
