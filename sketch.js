let img;
var w = window.innerWidth;
var h = window.innerHeight; 

window.onresize = function() {
  w = window.innerWidth;
  h = window.innerHeight;  
  canvas.size(w,h);
}

function setup() {
  createCanvas(w, h, WEBGL);
  img = loadImage('assets/let_it_be.webp');
}

function draw() {
  background(0);

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);

  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  box(180);
  pop();

  push();
  translate(-width / 4, -height / 4, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill(250, 0, 0);
  torus(80, 20, 64, 64);
  pop();

  push();
  translate(width / 4, -height / 4, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial();
  torus(80, 20, 64, 64);
  pop();

  push();
  translate(-width / 4, height / 4, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  ambientMaterial(250);
  torus(80, 20, 64, 64);
  pop();

  push();
  translate(width / 4, height / 4, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  specularMaterial(250);
  torus(80, 20, 64, 64);
  pop();
}
