// Завдання 2
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число - кількість властивостей.
function countProps (object) {
  let total = 0 ;
for(const i in object){
  if(typeof object[i] !== undefined ) total += 1;
    }
   return total;
};
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
