/* 
    Using window.alert
*/
// assign 'Hello World' to message Variable
let message = 'Hello World';
// alert message on browser // Full Code
window.alert(message);
// alert message on browser // Shorthand Code
// Because window is the global object, you can call also use the following shorthand:
/* The alert method is technically a property of window object, but since all window properties are
automatically global variables, we can use alert as a global variable instead of as a property of window -
meaning you can directly use alert() instead of window.alert(). */
alert(message);