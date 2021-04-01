// Exercise 4
// Write function countTotalSalary(employees) which accept salary array.
// Function is able to count general salary amount into employee and back  her.
// Each field array passed into function has look like  "name":"salary".
const countTotalSalary = function (employees) {
  const values = Object.values(employees);
  let totalSalary = 0;
  for (const value of values) {
    totalSalary += value;
  }
  return totalSalary;
};
// Invoke function to check how  works your implementation .
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
