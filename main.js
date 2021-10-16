var Canvas= document.getElementById ("canvas1");
var ctx= Canvas.getContext("2d");
var Color= "pink";
ctx.beginPath();
ctx.strokeStyle= Color;
ctx.lineWidth= 3;
ctx.arc(300, 400, 60, 0, 2*Math.PI);
ctx.stroke();
Canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
Color=document.getElementById ("color").value;
var mousex= e.clientX - Canvas.offsetLeft;
var mousey= e.clientY - Canvas.offsetTop;
circe_draw(mousex, mousey);
}
function circe_draw(mousex, mousey){
ctx.beginPath();
ctx.strokeStyle= Color;
ctx.lineWidth= 3;
ctx.arc(mousex, mousey, 60, 0, 2*Math.PI);
ctx.stroke();
}
function clearArea() 
{ ctx.clearRect(0, 0, Canvas.width, Canvas.height); 
}