const coffees = ["Latte", "Cappuccino", "Americano"];
const coffeesSort = coffees.map((item, index) => {
  return { YourCoffee: item.toLowerCase(), Number: index + 1 };
});

console.log(coffeesSort);

const coffeeName = prompt("Поиск кофе по названию:");
const lowerCoffeeName = coffeeName.toLowerCase();

const foundCoffee = coffeesSort.find(
  (item) => item.YourCoffee === lowerCoffeeName
);

if (foundCoffee) {
  const indexCoffees = foundCoffee.Number;
  alert(
    `Держите ваш любимый кофе ${coffeeName}. Он ${indexCoffees}-й по популярности в нашей кофейне.`
  );
} else {
  alert("К сожалению, такого вида кофе нет в наличии");
}
