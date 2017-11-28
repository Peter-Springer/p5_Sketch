function setup(){
  createCanvas(710, 400, WEBGL);
}

let r = 228, g = 181, b = 41

function draw(){
  background(r, g, b);

  translate(-355, 0, 0);

  translate(240, 0, 0);

  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0);
  fill(180);
  box(1000, 80, 80);
  pop();

  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill(r, g, b)
  torus(70, 20);
  pop();
}

function mouseClicked() {
  if (r > 350) {
    r = 228
    g = 181
    b = 41
  } else {
    r += 10
    g += 10
    b += 10
  }
}
