// the console.log() function is predominantly used for debugging purposes.
// You can inspect in browser choose console for show output
// You can install nodejs and call node path/lesson_console_log.js for show output
console.log('Hello, World!'); // Hello, World!

/* Logging variables */
// Variable foo have value as bar
const foo = 'bar';
console.log(foo); // bar
// If you want to log two or more values, simply separate them with commas. Spaces will be automatically added between each argument during concatenation
const firstText = 'First Value';
const secondText = 'Second Value';
console.log("firstText", firstText, "secondText", secondText); // firstText First Value secondText Second Value

/* Placeholders */
// You can use console.log() in combination with placeholders:
let greet = "Hello", who = "World";
console.log("%s, %s!", greet, who);

/* Logging Object */
console.log({
    'Email': '',
    'Group': {},
    'Id': 33,
    'IsHiddenInUI': false,
    'IsSiteAdmin': false,
    'LoginName': 'i:0#.w|virtualdomain\\user2',
    'PrincipalType': 1,
    'Title': 'user2',
});

