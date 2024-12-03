function setup() {
 // put setup code here
  createCanvas(displayWidth, displayHeight);
  background('white');
  text('Change the color of the moving circles!', 405,210);
  text('press r to change it to blue!', 600,300);
  text('press q to change it to red!', 793,360);
  text('press e to change it to green!', 1000, 400);
  noCursor();
}

function draw() {

var squareX = mouseX;
var squareY = mouseY;
var size = 35

if(keyIsPressed === true && key === 'q'){
  fill('red');
  ellipse(frameCount * 0.20, 500, 150);
}

if(keyIsPressed === true && key === 'r'){
  fill('blue');
  ellipse(frameCount * 0.20, 600, 150);
}

if(keyIsPressed === true && key === 'e'){
  fill('green');
  ellipse(frameCount * 0.20, 700, 150);
}

if(keyIsPressed === true && key === 'w'){
  fill('white');
}

noStroke();
ellipse(frameCount * 0.20, 100, 200);
ellipse(frameCount * 0.25, 200, 200);
ellipse(frameCount * 0.30, 300, 200);

}
