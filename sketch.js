var capture;
var button;
var meinHistory =[];
function setup()
{
   createCanvas(1024, 240);
   background(23);
   capture=  createCapture(VIDEO);
   capture.size(320, 240);
   button =createButton('mienButton');
   button.mousePressed(onMouseDown);
  // capture.hide();
}
function onMouseDown()
{
  //image(capture, 0,0);
  meinHistory.push(capture.get());
}
function mousePressed()
{

}
function draw()
{
  var w=80;
  var h=60;
  var x=0;
  var y=0;
  for (var i = 0; i < meinHistory.length; i++) {
    tint(255,100);
    image(meinHistory[i],x,y,w,h);
    x=x+w;
    if(x>width)
    {
      x=0;
      y+=h;
    }
  }
}
