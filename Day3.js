const { prepare_files } = require("@gradio/client");

//introduction to loops
let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i;
  i++;
}
// console.log(sum);

let j = 5;
let countdown = [];
while (j > 0) {
  countdown.push(j);
  j--;
}
console.log(countdown);

// let tea;
// let teaCollection = [];
// do {
//   tea = prompt("Enter your favourite tea (type 'stop' to finish ");
//   if(tea !== "stoop"){
//     teaCollection.push(tea);

//   }
// } while (tea !== "stop");
// console.log(teaCollection);

let total = 0;
let k = 1;
do {
  total += k;
  k++;
} while (k <= 3);
console.log(total);

let arr = [2, 4, 6];
let multipliedNumbers = [];
for (let i = 0; i < arr.length; i++) {
  multipliedNumbers.push(arr[i] * 2);
}
console.log(multipliedNumbers);

let cities = ["Pairs", "New York", "Tokyo", "London"];
let cityList = [];
for (let i = 0; i < cities.length; i++) {
  // console.log(cities[i]);
  cityList.push(cities[i]);
}
console.log(cityList);

let selectedTeas = [];
let tea = ["green tea", "black tea", "oolong tea", "chai"];
for (let i = 0; i < tea.length; i++) {
  if (tea[i] === "chai") {
    break;
  }
  selectedTeas.push(tea[i]);
}
console.log(tea);
console.log(selectedTeas);

let city = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];
for (let i = 0; i < city.length; i++) {
  if (city[i] === "Paris") {
    continue;
  }
  visitedCities.push(city[i]);
}
console.log(visitedCities);

let ar = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const x of ar) {
  if (x == 4) {
    break;
  }
  smallNumbers.push(x);
}
console.log(smallNumbers);

let preferredTeas = [];
let teaOpt = ["chai", "green tea", "herbal tea", "black tea"];
for (const tea of teaOpt) {
  if (tea == "herbal tea") {
    continue;
  }
  preferredTeas.push(tea);
}
console.log(teaOpt);

console.log(preferredTeas);

