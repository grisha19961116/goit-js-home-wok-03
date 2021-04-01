// Exercise 5
// Write function getAllPropValues(arr, prop), which gets massive arrays and name of property.
// Return values massive exact property 'prop' from each array in massive .
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];
// first solution
const getAllPropVal = function (arr, value) {
  const total = [];
  for (const item of arr) {
    if (item[value]) {
      total.push(item[value]);
    }
  }
  return total;
};
console.log(getAllPropVal(products, "name")); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
console.log(getAllPropVal(products, "price"));
console.log(getAllPropVal(products, "quantity")); // [4, 3, 7, 2]
console.log(getAllPropVal(products, "category")); // []

// second solution
const subjects = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
  { name: "eagl", price: 1800, quantity: 1 },
  { name: "fox", price: 1400, quantity: 6 },
  { name: "biard", price: 2050, quantity: 4 },
];

function getAllPropValues(arr, prop) {
  return arr.map((element) => element[prop]);
}
console.log(getAllPropValues(subjects, "name")); // ["Радар", "Сканер", "Дроїд", "Захоплення", "eagl", "fox", "biard"]
console.log(getAllPropValues(subjects, "price"));
console.log(getAllPropValues(subjects, "quantity")); // [4, 3, 7, 2, 1, 6, 4]
console.log(getAllPropValues(subjects, "category")); // []

// third solution but it is not goog like used two loops
const getAllPropValue = function (arr, prop) {
  let total = [];
  for (const i of arr) {
    for (let j in i) {
      if ((j = prop)) {
        total.push(i[j]);
        break;
      }
    }
  }
  return total;
};
console.log(getAllPropValue(products, "name")); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
console.log(getAllPropValue(products, "price"));
console.log(getAllPropValue(products, "quantity")); // [4, 3, 7, 2]
console.log(getAllPropValue(products, "category")); // []
