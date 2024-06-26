// Window prompt
let flavor = prompt(
  "Please enter your flavor choices separated by commas.",
  "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);
/* if (flavor != null) {
  console.table(flavor);
} */

// For loops: vanilla,vanilla,vanilla,strawberry,coffee,coffee
// const flavor = "vanilla, vanilla, vanilla, strawberry, coffee, coffee";
const orders = [
  { name: "vanilla", value: 0 },
  { name: "strawberry", value: 0 },
  { name: "coffee", value: 0 },
];

function makeArray(string) {
  return string.split(", ");
}

function countFlavors(options, array) {
  // for (key of options) {
  for (element of array) {
    orders.map((ele) => {
      if (ele.name === element) {
        ele.value++;
      }
      return ele;
    });
  }
  // }
  return options;
}

let flavorArray = makeArray(flavor);
console.table(countFlavors(orders, flavorArray));
// Console table
