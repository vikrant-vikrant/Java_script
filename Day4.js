//functions
function makeTea(typeOfTea) {
  let tesOrder = `Making ${typeOfTea}`;
  return tesOrder;
}
console.log(makeTea("Green tea"));

function orderTea(teaType) {
  function confirmOrder() {
    let order = `Order confirmed for ${teaType}`;
    return order;
  }
  return confirmOrder();
}
console.log(orderTea("chai"));

let calculateTotal = (price, quantity) => {
  return `Total cost ${price * quantity}`;
};
let totalCost = calculateTotal(800, 150000);
console.log(totalCost);

function makeTea(teaType) {
  return teaType;
}
function processTeaOrder(fun) {
  return fun;
}
console.log(processTeaOrder(makeTea("earl grey")));

function makingtea(teatype) {
  return teatype;
}
function createTeaMaker(fun) {
  return `Making ${fun}`;
}
console.log(createTeaMaker(makingtea("green tea")));
