//DOM manipulation by javaScript
//document object model
let btn = document.querySelector("#changeTextButton");
let para = document.querySelector("#myParagraph");
btn.addEventListener("click", function () {
  console.log("you clicked the btn");
  console.log(this);
  para.textContent = "i am back";
});

let btn2 = document.querySelector("#highlightFirstCity");

btn2.addEventListener("click", function () {
  let btn = document.querySelector("#citiesList .chai");
  btn.classList.add("highlight");
  console.log(btn.classList);
});

//example 3
document.querySelector("#changeOrder").addEventListener("click", function () {
  let btn = document.querySelector("#coffeeType");
  btn.textContent = "Expresso";
  btn.style.color = "red";
  btn.style.color = "red";
  btn.style.backgroundColor = "green";
  console.log(btn);
});

//example 4
document.querySelector("#addNewItem").addEventListener("click", function () {
  let list = document.querySelector("#taskList");
  let shopinglist = document.querySelector("#shoppingList");
  let product = prompt("Enter the item");
  let newItem = document.createElement("li");
  newItem.textContent = product;
  shopinglist.appendChild(newItem);
});
//example 5
function deleteItem() {
  document
    .querySelector("#taskList")
    .removeChild(document.querySelector("#taskList").lastChild);
}
document.querySelector("#removeLastTask").addEventListener("click", deleteItem);

//example 6
document
  .querySelector("#clickMeButton")
  .addEventListener("mouseover", function () {
    // .addEventListener("dblclick", function () {
    console.log("hey");
  });
//example 7
document.querySelector("#teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem"))
    console.log(`You selected : ${event.target.textContent}`);
});
//example 8
document
  .querySelector("#feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.querySelector("#feedbackDisplay").textContent =
      document.querySelector("#feedbackInput").value;
  });
//example 9
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#domStatus").textContent = "DOM Content fully loaded";
  // console.log(document);
});

///example 10
document
  .querySelector("#toggleHighlight")
  .addEventListener("click", function () {
    document.querySelector("#descriptionText").classList.toggle("highlight");
  });
