/* DOM API */
// Element id innerHTML สามารถแสดงข้อมูลโดยการใส่แท็ก HTML ได้ 
document.getElementById('paragraph_inner').innerHTML = '<b>Hello World! by innerHTML</b>';
// Element id textContent แสดงได้แต่ข้อความ รันแท็ก HTML ไม่ได้ 
document.getElementById('paragraph_text').textContent = '<b>Hello World! by textContent</b>';

/* Create new tag p with a textContent property of and add it at the end of the html body */
// Create new tag p into variable element
let element = document.createElement('p');
// Variable element Insert content by textContent
element.textContent = "Hello, World by Create new Element";
//add the newly created element to the DOM
document.body.appendChild(element);