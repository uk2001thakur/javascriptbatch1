let a = prompt('Enter the 1st variable: ');
let b = prompt('Enter the 2nd variable: ');

let temp;

temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);