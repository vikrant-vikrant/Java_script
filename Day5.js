//OOPs

//prototype
let computer = {
  cpu: 12,
};
let lenovo = {
  cpu: 12,
  screen: "HD",
};
let tomHardware = {};
console.log(`computer`, computer.__proto__);
let tom = ["pc", "mac"];
console.log(`computer`, tom.__proto__);

let books = {
  bookmark: "True",
  pages: 215,
  adition: 2026,
  tell: () => {
    console.log(`This book have age group`);
  },
};

let storyBook = {
  age: "5-12",
};
Object.setPrototypeOf(storyBook, books);
console.log(storyBook.pages);
console.log(storyBook.tell());

//contructorFunction
function Book(name, pages, adition) {
  if (!new.target) {
    throw new Error("must be called with new");
  }
  ((this.pages = pages),
    (this.adition = adition),
    (this.name = name),
    (this.explain = function () {
      return `The book name is ${this.name}, and it has ${this.pages} pages, the adition is ${this.adition}`;
    }));
}

let fiction = new Book("Godan", "180", "1975");
let nonFiction = new Book("Atomic Habit", "212", "2018");
console.log(fiction.explain());
console.log(nonFiction.explain());
