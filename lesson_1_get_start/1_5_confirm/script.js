/* 
    Using window.confirm()
*/
// displays a modal dialog with an optional message and two buttons, OK and Cancel.
// Assign return boolean from confirm to variable result
let result = confirm('Are you want delete this?'); // return boolean true or false
console.log(result); // output true or false
// Check condition return from result confirm
if(result){
    console.log('Sure please delete this.'); // if result === true log message 'Sure please delete this.'
}else{
    console.log('No i mistake'); // else result === false log message 'No i mistake'
}