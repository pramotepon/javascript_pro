// DOM API 
// Element id innerHTML สามารถแสดงข้อมูลโดยการใส่แท็ก HTML ได้ 
document.getElementById('paragraph_inner').innerHTML = '<b>Hello World! by innerHTML</b>';
// Element id textContent แสดงได้แต่ข้อความ รันแท็ก HTML ไม่ได้ 
document.getElementById('paragraph_text').textContent = '<b>Hello World! by textContent</b>';
