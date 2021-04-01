// Exercise 3
// Write function findBestEmployee(employees), which accept array employees and back name
// The best (who has done more exercise than other). Employees and amount were done exercise
// includes how a array property into format  "name":"amount exercise".
const findBestEmployee = function (employees) {
  const amount = Object.values(employees);
  const best = Math.max(...amount);
  const worst = Math.min(...amount);
  for (const i in employees) {
    if (employees[i] === best) {
      return `Best worker this months is "${i}" and him result ${best},compare with the worst result ${worst}.`;
    }
  }
};
// Invoke function to check how  works your implementation .
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
