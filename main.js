function preload(){
}
 
function setup(){
   canvas= createCanvas(640, 480);
   canvas.position(110, 250);
   video = createCapture(VIDEO);
 
   tint_color ="";
}
 
function draw(){
   
}
 
function take_snapshot(){
   SVGFEFuncAElement('myFilterImage.png');
 
}
