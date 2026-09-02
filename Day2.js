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
//objects
let obj = {
  name: "vikrant",
  email: "vikrant@gmail.com",
  isLoggin: true,
  "is trusted": false,
};

obj.name = "kaka";
obj.lastName = "verma";
console.log(obj);
console.log(obj.name);
console.log(obj.email);
console.log(obj.isLoggin);
console.log(obj["is trusted"]);
// console.log(typeof obj.isLoggin);

let today = new Date();
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());

//Array
let heros = ["a", "b", "asdf", true, "123", 123, ,];
for (let i = 0; i < heros.length; i++) {
  console.log(heros[i], typeof heros[i]);
}

//conditional statements
let num1 = 2;
let num2 = 20;

if (num1 > num2) {
  console.log(num1, ` is grater than `, num2);
} else {
  console.log(num2, ` is grater than `, num1);
}

let name = "vikrant";
let name2 = "vikrant";

console.log(name === name2 ? `they are same` : `they are not same`);

let login = true;
console.log(login == true ? `welcome to site` : `need to login`);

let arr = ["asdf"];
console.log(arr.length ? `Array is not empty` : `Array is empty`);

let teaFlavors = ["green tea", "black tea", "oolong tea"];
let firstTea = teaFlavors[0];
console.log(firstTea);

let cities = ["London", "Tokya", "Paris", "New york"];
let favoriteCity = cities[2];
console.log(favoriteCity);

let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = 'jasmine tea';
console.log(teaTypes[1]);

let citiesVisited = ['mumbai','sydeny'];
citiesVisited.push = 'berlin'
console.log(citiesVisited);

let teaOrdera = ['chai','iced tea','earl grey'];
// teaOrdera.pop = 'earl grey'
console.log(teaOrdera);

let softCopy = teaOrdera;
console.log(softCopy);
// teaOrdera.pop();

let hardCopy = [...teaOrdera]
// hardCopy.pop();
console.log(hardCopy);



let totalOrder = [teaFlavors + teaOrdera];
let newtotalOrder = teaFlavors.concat(teaOrdera);
console.log(typeof totalOrder);
console.log(typeof newtotalOrder);
console.log(totalOrder);
let length = newtotalOrder.length;
console.log(length);

