let baseSize = 100;

function setup() {
  let canvas = createCanvas(600, 300, WEBGL);
  canvas.parent('interactivoCanvas');
}

function draw() {
  background(230, 240, 255);

  let scrollPos = window.scrollY;
  let scaleFactor = map(scrollPos, 0, window.innerHeight, baseSize, 20);
  scaleFactor = constrain(scaleFactor, 20, baseSize);

  rotateY(frameCount * 0.01);
  normalMaterial();

  scale(scaleFactor / baseSize);
  box(baseSize);
}
