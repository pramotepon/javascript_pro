/* 
    Types of Variables
*/
let myInteger = 12; // 32-bit number (from -2,147,483,648 to 2,147,483,647);
console.log(typeof myInteger); // number
let myLong = 1234567891011 // 64-bit number (from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
console.log(typeof myLong); // number

let myFloat = 5.5;  // 32-bit floating-point number (decimal)
console.log(typeof myFloat); // number
let myDouble = 1234567891011.55;  // 64-bit floating-point number
console.log(typeof myDouble); // number

// 1-bit true/false (0 or 1)
let myBoolean = true; 
console.log(typeof myBoolean); // boolean
let myBoolean2 = false;
console.log(typeof myBoolean2); // boolean

let myNotANumber = NaN;
console.log(myNotANumber); // NaN
let NaN_Example = 0/0; // NaN: Division by Zero is not possible
console.log(NaN_Example); // NaN

let notDefined; // undefined: we didn't define it to anything yet
console.log(notDefined); 
console.log(typeof notDefined); 
// console.log(anonymousVariable);  // anonymousVariable is not defined

let myNull = null; // null
console.log(myNull); // null