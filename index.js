// Window prompt
/* let flavor = prompt("Please enter your flavor choices separated by commas.", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");
if (flavor != null) {
  console.table(flavor);
} */


// For loops: vanilla,vanilla,vanilla,strawberry,coffee,coffee
const flavor = 'vanilla, vanilla, vanilla, strawberry, coffee, coffee'
const orders = [
    { name: 'vanilla', value: 0},
    { name: 'strawberry', value: 0},
    { name: 'coffee', value: 0}
]

function makeArray(string) {
    return string.split(', ')
}

function countFlavors(options, array) {
    for (key of options) {
        for (element of array) {
            if (options.name === element) {
                options[0].value += 1;
            }
        }
    }
    return options;
}

for (const flavor in orders) {

}


let flavorArray = makeArray(flavor)
console.log(countFlavors(orders, flavorArray))
console.log(flavorArray)
// Console table