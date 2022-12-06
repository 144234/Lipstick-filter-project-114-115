lipX=0;
lipY=0;
function preload(){
lipstick_filter = loadImage('https://i.postimg.cc/RF3Jwnjv/l1.png')
}
function setup(){
   canvas = createCanvas(300, 300);
   canvas.center();
   video = createCapture(VIDEO);
   viseo.size(300, 300);
   video.hide();
 
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}
function modelLoaded(){
   console.log('PoseNet Is Initialized');
}
function gotPoses (results)
{
   if(results.length > 0)
   {
       console.log(results);
       console.log("Lip x =" + results[0].pose.lip.x);
       console.log("Lip y =" + results[0].pose.lip.y);
   }
}
function draw(){
 image(video, 0, 0, 250, 250);
 image(lipstick_filter, lipX, lipY, 30, 30);
}
function take_snapshot(){
   SVGFEFuncAElement('myFilterImage.png');
}
 
 
