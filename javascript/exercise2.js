// // Завдання 2
// // Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію
//  calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини)
//   і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

const calculateEngravingPrice = function (message, pricePerWord) {
    const result = message.split(' ').length*pricePerWord;
    return `Our result after calculate is ${result}`;
};
const message = 'Welcome to Bahamas!';
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); 
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
);
console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); 
console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); 