let angle = 0;

function setup() {
  let canvas = createCanvas(windowWidth, 400, WEBGL);
  canvas.parent('bannerCanvas');
}

function draw() {
  background(20);
  rotateX(angle * 0.3);
  rotateY(angle);
  normalMaterial();
  ambientLight(100);
  pointLight(255, 255, 255, 200, 0, 300);
  box(100);
  angle += 0.01;
}
