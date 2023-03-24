/* 
    Testing for NaN using isNaN()
    typeof NaN is a Number
*/
console.log(isNaN(NaN)); // true
console.log(isNaN(1)); // false => 1 is a number
console.log(isNaN(-2e-4)); // false => -2e-4 is a number (-0.0002) in scientific notation
console.log(isNaN(Infinity)); // false =>  Infinity is a number
console.log(isNaN(true)); // false => converted to 1, which is a number
console.log(isNaN(false)); // false => converted to 0, which is a number
console.log(isNaN(null)); // false =>  converted to 0, which is a number
console.log(isNaN('')); // false =>  converted to 0, which is a number
console.log(isNaN(' ')); // false =>  converted to 0, which is a number
console.log(isNaN('45.3')); //  false => string representing a number, converted to 45.3
console.log(isNaN("1.2e3")); // false => string representing a number, converted to 1.2e3
console.log(isNaN('Infinity')); // false => string representing a number, converted to Infinity
console.log(isNaN(new Date)); // false => Date object, converted to milliseconds since epoch
console.log(isNaN("10$")); // true => conversion fails, the dollar sign is not a digit
console.log(isNaN("hello")); // true => conversion fails, no digits at all
console.log(isNaN(undefined)); // true => converted to NaN
console.log(isNaN()); // true => converted to NaN (implicitly undefined)
console.log(isNaN(function(){})); // true => conversion fails
console.log(isNaN({})); // true => conversion fails
console.log(isNaN([1, 2])); // true => converted to "1, 2", which can't be converted to a number

// convert the value to a number before testing
let nanIsANumber = Number.isNaN("10$");
console.log(nanIsANumber); // false

console.log(NaN === NaN); // false
console.log(NaN == NaN); // false