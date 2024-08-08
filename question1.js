let peopleWaiting = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "Артем",
  "Глеб",
];

let kickWaiting = function kickWaiting(peopleWaiting) {
  if (peopleWaiting.shift) {
    // alert(peopleWaiting.shift());
    alert(`Посылку получил(а): ${peopleWaiting.shift()}`);
  }
  return peopleWaiting;
};
console.log(kickWaiting(peopleWaiting));
console.log(kickWaiting(peopleWaiting));

let kickWaitingForDinner = function kickWaitingForDinner(peopleWaiting) {
  if (peopleWaiting.pop) {
    alert(`Не дождался(сь) очереди: ${peopleWaiting.pop()}`);
  }
  return peopleWaiting;
};

console.log(kickWaitingForDinner(peopleWaiting));
console.log(kickWaitingForDinner(peopleWaiting));
console.log(kickWaitingForDinner(peopleWaiting));
console.log(kickWaitingForDinner(peopleWaiting));
