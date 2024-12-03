var ellipseX = 100;
var ellipseY = 200;

function setup() {
 // put setup code here
  createCanvas(displayWidth,displayHeight);
  background('red');
}

function draw() {
  // put drawing code here
  
  if(mouseIsPressed){
    rect(mouseX,mouseY,150,75);
  }
  else {
    ellipse(mouseX,mouseY,100,100);
  }

}
