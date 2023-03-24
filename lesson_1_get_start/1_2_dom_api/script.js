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

/* 
    Using the DOM API (with graphical text: Canvas, SVG, or image file)
*/
// Using canvas elements
// Element canvas into variable canvas
let canvas = document.createElement('canvas');
// set canvas width = 500
canvas.width = 500;
// set canvas height = 250
canvas.height = 250;

// Elements canvas setContext 2D into variable ctx
let ctx = canvas.getContext('2d');
// ctx font size 30px, font style Cursive
ctx.font = '30px Cursive';
// ctx show text Hello World and block size 50 * 50 
ctx.fillText('Hello World', 50, 50);
// Insert canvas into body for show
document.body.appendChild(canvas);

// Using SVG
// Create Element createElementNS into variable svg
// createElementNS is Create node with namespace createElementNS(ns, name) => (?, tag name)
let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
// svg set width 500
svg.width = 500;
// svg set height 50
svg.height = 50;

// Create Element createElementNS into variable svg
let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
// Set attribute x into variable text 
text.setAttribute('x', '0');
// Set attribute y into variable text 
text.setAttribute('y', '50');
// Set font style Times New Roman for variable text
text.style.fontFamily = 'Times New Roman';
// Set font size 50px for variable text
text.style.fontSize = '50';
// Set text Hello World into variable text
text.textContent = 'Hello World';

// insert text to svg
svg.appendChild(text);
// insert svg into document body
document.body.appendChild(svg);

// Image file
// Call new Image object to variable img
let img = new Image();
// img set attribute src = ?
img.src = 'https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg';
// insert img into document body
document.body.appendChild(img);