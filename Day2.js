//Data types -> primitive & non-primitive

// primitive -> strings,boolean,number,symbol,null,undefined
//non-primitive -> objects(array,function,objects)

//Number
let balance = 120;
// console.log(balance);
console.log(typeof balance);

let score = new Number(120);
// console.log(score);
console.log(typeof score);

//Boolean
let isActive = true;
let isLoggin = new Boolean(false); //not recommended

console.log(isActive);
// console.log(isLoggin);

//Null and undefined

let firstName;
console.log(firstName); //undefined

let secondName = null;
console.log(secondName);

//string
let myString = "vikrant";
let str = "Hola";
let greet = `Hey ${myString} !`;
console.log(greet);

//symbol
let sm1 = Symbol();
let sm2 = Symbol();
console.log(sm1 == sm2);

//non-primitive -> objects(array,function,objects)
