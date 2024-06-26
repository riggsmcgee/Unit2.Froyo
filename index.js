// Window prompt
let order = prompt(`What would you like to order?
Please separate orders with a comma ' , '`);

/* let order =
  'VaNiLla,  StrawBerry, coffEe,vanilla,coffee, strawberry,   vanilla'; */

let orderString = formatOrder(order);
let orderArray = orderToArray(orderString);
let finalOrder = processOrder(orderArray);

// Converts the order to a universal format
function formatOrder(str) {
  let correctedString = str.replace(/, +/g, ', ');
  correctedString = correctedString.replace(/,(?! )/g, ', ');
  correctedString = correctedString.toLowerCase();
  return correctedString;
}

// Converts strings into objects
function orderToArray(order) {
  return order.split(', ');
}

// Counts the occurences of list item and organizes it into objects.
function processOrder(order) {
  let countOccurrences = order.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  let tableData = Object.keys(countOccurrences).map((key) => {
    return { Name: key, Count: countOccurrences[key] };
  });
  return tableData;
}

console.table(finalOrder);
