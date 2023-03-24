// // Time Start 
// console.time('response in');
// // Do something
// alert('Click to continue');
// // End Time finish in process
// console.timeEnd('response in');

let elms = document.getElementsByTagName('*'); //select all elements on the page
// Start times lab
console.time('Loop time');
for (var i = 0; i < 5000; i++) {
 for (var j = 0, length = elms.length; j < length; j++) {
 // nothing to do ...
 }
}
// Time end 
console.timeEnd('Loop time'); // Loop time: ? ms