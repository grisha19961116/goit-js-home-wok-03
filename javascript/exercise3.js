// // Задание 3
// // Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку
//  (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
const findLongestWordFirst = function(str) {
    let string = str.split(' ');
    let longestWord = 0;
    for(let i = 0 ;i < string.length; i++){
      if(string[i].length > longestWord){
        longestWord =string[i].length;
      }
    }
      for(let word of string){
        if(word.length === longestWord){
          return `The longest word in this sentanse is ${word} and him lenght is ${longestWord}`;
        }
      }
  };
console.log(findLongestWordFirst('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWordFirst('Google do a roll')); // 'Google'
console.log(findLongestWordFirst('May the force be with you')); // 'force'
console.log(findLongestWordFirst(' George Washington was one of the principal peeopl in USA in him time'));  //'its work'

// second solution of this exercise is below

function findLongestWordSecond(string) {
  const longestWord = string.split(' ').sort(function(firstElement, secondElement) { return secondElement.length - firstElement.length; });
  return `The longest word in this sentanse is "${longestWord[0]}" and him lenght is "${longestWord[0].length}".`;
}
console.log(findLongestWordSecond('if you wish impruve your knoweleg in it industry')); 
console.log(findLongestWordSecond('belive in your action')); // 'Google'
console.log(findLongestWordSecond('and in resalt you will be able')); // 'force'
console.log(findLongestWordSecond('to reach your goal,and get succsses'));  //'its work'

