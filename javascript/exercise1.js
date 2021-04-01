// Exercise 1
// Write script which for array user flow:
// adding field mood with value 'happy'
// patch value hobby on 'skydiving'
// patch value premium на 'false'
// Show  contents user array in format like 'key : value'  by using  Object.keys() and for...of
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};
console.log(user);
// before changes
user.mood = "happy";
user.hobby = "skydiving";
user.premium = "false";
console.log(user);
// after changes
const keys = Object.keys(user);
for (const keyValue of keys) {
  console.log(`${keyValue} : ${user[keyValue]}`);
}
// shows key and him value
