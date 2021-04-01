// Exercise 6
// Write function calculateTotalPrice(allProducts, productName),
// which get massive arrays and name of product (name property name).
// return common price product (price * quantity ).
// Invoke function to check how  works your implementation .

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProducts, productName) {
  let total = 0;
  for (let i of allProducts) {
    if (i.name === productName) {
      total = i.price * i.quantity;
      return total;
    }
  }
};

console.log(calculateTotalPrice(products, "Радар")); // 5200
console.log(calculateTotalPrice(products, "Дроид")); // 2800
