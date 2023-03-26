console.log("Log"); // Log
console.info("info"); //  info
console.warn("warn"); // warn
console.error("error"); // error
// start time
console.time("msg");
function sec() {
  first();
}
function first() {
  console.trace();
}
sec();
// Including a stack trace when logging - console.trace()
function foo() {
  console.trace("My log statement");
}
foo();
// end time and log
console.timeEnd("msg"); // msg: ? ms