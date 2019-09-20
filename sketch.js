function preload(){
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(60);
  a = 0;
  b = 0;
  j = 0;
}

function draw() {
  translate(width/2, height/2);
  strokeWeight(1.5);
  colorMode(HSB, 100);
  stroke(100*mouseX/windowWidth, 100, 100);
  noFill();
  if (a < 360) {a += 2}

  // Central circle
  push();
  background("black");
  r = 250;
  for (i = 0; i < a; i += 2) {
    line(r, 0, cos(i)*r, sin(i)*r);
  }
  if (a > 2) {
    arc(0, 0, r*2, r*2, 0, a-2)
  }
  pop();

  // Surrounding circles
  if (a >= 360) {
    if (j < windowWidth+500) {b += 6+b/50}
    for (j = 0; j < b; j += 20) {
      circle(0, 0, 500+j);
    }
  }

  // Canvas border
    strokeWeight(3);
    rect(-width/2, -height/2, width, height);
}
