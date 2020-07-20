// // Завдання 1
// // Напиши функцію logItems(array), яка отримує масив і використовує цикл for, 
// який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

// // Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax']
//  з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

// // const logItems = function (array) {
// //   // твій код
// // };

// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
//  */
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

const names=  ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const logItems = function (array) {
for(let i=0 ;i < array.length ;i +=1){
    console.log(`number element is ${i+1} meaning element is ${array[i]}`);
}
};
(logItems(names));
(logItems(numbers));
