/*
    Formatting console output
        %s Formats the value as a string
        %i or %d Formats the value as an integer
        %f Formats the value as a floating point value
        %o Formats the value as an expandable DOM element
        %O Formats the value as an expandable JavaScript object
        %c Applies CSS style rules to the output string as specified by the second parameter
*/
// Log data 1st params into %s and 2nd params into %d
// %s = Sam , %d = 100
console.log("%s has %d points", "Sam", 100); // Sam has 100 points

// Open in browser Hello world! show
console.log("%cHello world!", "color: blue; font-size: xx-large"); // Hello world!

// Main Group Collapsed menu Have text Menu List
console.groupCollapsed("Menu List"); // Menu List
// Sub main Group menu have text Group 1
console.group("Group 1"); // Group 1
// Content log in group 1
console.log("test 1"); // test 1
console.log("test 2"); // test 2
console.log("test 3"); // test 3
console.log("test 4"); // test 4
// Sub group 1 have text Group 1.1
console.group("Group 1.1"); // Group 1.1
console.log("test 1.1"); // test 1.1
console.log("test 1.2"); // test 1.2
console.log("test 1.3"); // test 1.3
console.log("test 1.4"); // test 1.4
// End Sub group 1 have text Group 1.1
console.groupEnd();
// Content log in group 1
console.groupEnd();
// Sub main Group menu have text Group 2
console.group("Group 2"); // Group 2
console.log("test 2.1"); // test 2.1
console.log("test 2.2"); // test 2.2
console.log("test 2.3"); // test 2.3
console.log("test 2.4"); // test 2.4
// End Sub main Group menu have text Group 2
console.groupEnd();
console.groupEnd();

/* 
 Tabulating values - console.table()
*/
// log table Array
console.table(["Hello", "world"]);
// log table Object
console.table({ foo: "bar", bar: "baz" });
// Variable personArr type Object
let personArr = [
  {
    personId: 123,
    name: "Jhon",
    city: "Melbourne",
    phoneNo: "1234567890",
  },
  {
    personId: 124,
    name: "Amelia",
    city: "Sydney",
    phoneNo: "1234567890",
  },
  {
    personId: 125,
    name: "Emily",
    city: "Perth",
    phoneNo: "1234567890",
  },
  {
    personId: 126,
    name: "Abraham",
    city: "Perth",
    phoneNo: "1234567890",
  },
];
// Call console log table get 2 parameter 1.Object, 2.Key Object
console.table(personArr, ["name", "personId"]);

/* 
  Counting - console.count()
*/
let o1 = 1, o2 = '2', o3 = "";
console.count(o1); // 1: 1
console.count(o2); // 2: 1
console.count(o3); // 1
console.count(1); // 1: 2
console.count('2'); // 2: 2
console.count(''); // 1

console.count(42.3); // 42.3: 1
console.count(Number('42.3')); // 42.3: 2
console.count('42.3'); // 42.3: 3

// Clearing the console - console.clear()
// console.clear(); // Console was cleared