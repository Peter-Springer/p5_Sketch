let x, goBack

function setup() {
  createCanvas(720, 400)
  loop()
  x = 0
}

function draw() {
  background(0)
  if (x >= 0 && x <= 668) {
    if (goBack <= 664 && goBack > 0) {
      x = goBack - 4
      goBack = goBack - 4
    } else {
      x = x + 4
    }
    if (x === 664) {
      goBack = x
    }
  }

  rect(360, 200, 55, 55)
  fill(101, 103, 177)
  rect(x, 200, 55, 55)
  fill(180, 65, 79);
  if (x === 360) {
    console.log('hit')
  }
}
