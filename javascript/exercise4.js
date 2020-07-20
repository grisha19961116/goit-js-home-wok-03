// Задание 4
// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...',
//  после чего возвращает укороченную версию.
// const names=  ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
// const logItems = function (array) {
//     const emptyValue = ['empty'];
//     const counterForMassive = emptyValue.concat(array);
// for(let i=1 ;i < counterForMassive.length ;i +=1){
//     console.log(`${i} - ${counterForMassive[i]}`);
// }
// };
// (logItems(names));
const formatString = function(string) {
  if(string.length < 40){
    return string;
  } else {
    const border =`${string.slice(0, 41)} ...`
      return border ;
  }
};
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique this sentens for check how it will be work.'));
