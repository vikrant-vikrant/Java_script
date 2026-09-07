const { extend } = require("dayjs");

//clouser -> inner function remembers and has access to variables from its outer (parent) function's scope, even after the outer function has finished executing
function outer() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}
let increment = outer();
// console.log(increment());
// console.log(increment());
// console.log(increment());

//promises
// function fetchDate() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let success = false;
//       if (success) {
//         resolve("Data fetched successfully");
//       } else {
//         reject("Error faced during Data fetched");
//       }
//     }, 3000);
//   });
// }
// fetchDate()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

//protoypes
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};
let mark = new Person("Mark");
console.log(mark.greet());
// console.log(mark.prototype);

let person = {
  name: "vikrant",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};
person.greet();
//bind, call and apply
let greetFun = person.greet.bind({ name: "kaka" });
greetFun();
// let heyFun = person.greet.call('manoj');
// heyFun();
fetch("https://github.com")
  .then((response) => response) // .json() also returns a promise
  .then((data) => console.log(data))
  .catch((error) => console.error("Network error:", error));

async function fetchDt() {
  try {
    let res = await fetch;
    console.log(res);
  } catch (error) {
    console.log(console.log(error));
  } finally {
    console.log("task completed");
  }
}
