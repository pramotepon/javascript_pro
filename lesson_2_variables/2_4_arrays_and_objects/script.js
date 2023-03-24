/* 
    Arrays and Objects
*/
/* 
    Array

    Array have index and value
    The first Index start 0
    [ 0 => "apple", 1 => "orange", 2 => "strawberry"] // 0 is a index // apple is a value
*/
let myArray = []; // empty array

let favoriteFruits = ["apple", "orange", "strawberry"];
let carsInParkingLot = ["Toyota", "Ferrari", "Lexus"];
let employees = ["Billy", "Bob", "Joe"];
let primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
let randomVariables = [2, "any type works", undefined, null, true, 2.51];

// Call Array value
// Resign value ['zero', 'one', 'two'] into myArray variable
myArray = ["zero", "one", "two"];
console.log(myArray[0]); // 'zero'
console.log(myArray[1]); // 'one'
console.log(myArray[2]); // 'two'

// Resign value ["John Doe", "Billy"] into myArray variable
myArray = ["John Doe", "Billy"];
// Variable elementNumber assign value = 1
let elementNumber = 1;
// myArray[1]
console.log(myArray[elementNumber]); // Billy

/* 
    Object
    An object is a group of values; unlike arrays, we can do something better than them
    Object Structure
    let billy = { // billy is a Object name
        firstname: "Billy", // firstname: "Billy" is a properties // firstname is a key // "Billy" is a value
        lastname: undefined, // lastname: undefined is a properties // lastname is a key // undefined is a value
        fullname: "Billy" // fullname: "Billy" is a properties // fullname is a key // "Billy" is a value
    };
    * billy < Object name
    * firstname: "Billy" < properties
    * firstname < key
    * "Billy" < value
*/
let myObject = {}; // empty object
// Variable john type object
let john = { firstname: "John", lastname: "Doe", fullname: "John Doe" };
// Variable billy type object
let billy = {
  firstname: "Billy",
  lastname: undefined,
  fullname: "Billy",
};
// Call object
console.log(john); // { firstname: 'John', lastname: 'Doe', fullname: 'John Doe' }
// Call value by object name.key
console.log(john.firstname); // John
console.log(billy.firstname); // Billy