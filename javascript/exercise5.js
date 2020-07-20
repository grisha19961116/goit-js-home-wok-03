// Задание 5
// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
//  Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true,
//   если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.
// Задание 5
// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
// твоя принемает массив?
const checkForSpam = function(message) {
    const input = message.split(' ');
    const elemSpam = 'spam';
    const elemSpamUpperCase ='[SPAM]';
    const elemSale = 'sale';
    for (let i = 0; i < input.length; i++) {
        if (input[i] === elemSpam || input[i] === elemSale || input[i] === elemSpamUpperCase) {
            return true;
        }
    }
    return false;
}
console.log(checkForSpam('Latest technology news ')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now sale')); // true
console.log(checkForSpam('[SPAM] How to earn fast money ?')); // true



