console.log("Log"); // Log
console.info("info"); //  info
console.warn("warn"); // warn
console.error("error"); // error
// start time 
console.time('msg');
function sec(){
    first();
}
function first() {
  console.trace();
}
sec();
// end time and log
console.timeEnd('msg'); // msg: ? ms