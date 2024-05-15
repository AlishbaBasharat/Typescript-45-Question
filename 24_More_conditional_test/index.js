// Tests for equality and inequality with strings
console.log("Testing equality:", "a" === "a");
console.log("Testing inequality:", "a" != "b");
// Tests using the lower case function
console.log("Testing lower case:", "A".toLowerCase() === "a");
// Numerical tests involving equality and inequality
console.log("Testing equality:", 1 === 1);
console.log("Testing inequality:", 1 !== 2);
// Numerical tests involving greater than and less than
console.log("Testing greater than:", 5 > 4);
console.log("Testing less than:", 4 < 5);
// Numerical tests involving greater than or equal to and less than or equal to
console.log("Testing greater than or equal to:", 10 >= 10);
console.log("Testing less than or equal to:", 5 <= 10);
// Tests using "and" and "or" operators
console.log("Testing and:", 10 === 10 && 5 <= 10);
console.log("Testing or:", 10 === 10 || 5 >= 10);
// Test whether an item is in an array
const food = ["Apple", "Orange", "Mango"];
console.log("Testing 'Apple' in array:", food.includes("Apple"));
// Test whether an item is not in an array
console.log("Testing 'Grapes' is not in array;", !food.includes("Grapes"));
export {};
