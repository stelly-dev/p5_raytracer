let walls = [],
  particle;

function setup() {
  const dims = getDims();
  createCanvas(dims.width, dims.height);
  for (let i = 0; i < 10; i++) {
    let rx1 = random(width);
    let ry1 = random(height);
    let rx2 = random(width);
    let ry2 = random(height);
    walls.push(new Boundary(rx1, ry1, rx2, ry2));
  }
  topWall = new Boundary(10, 10, width - 10, 10);
  rightWall = new Boundary(width - 10, 0 + 10, width - 10, height - 10);
  bottomWall = new Boundary(width - 10, height - 10, 10, height - 10);
  leftWall = new Boundary(10, height - 10, 10, 10);
  walls = [...walls, topWall, rightWall, bottomWall, leftWall];

  console.log(walls);
  particle = new Particle();
}

function draw() {
  background(0);
  stroke(255, 50);
  particle.look(walls);

  particle.update(mouseX, mouseY);
  particle.show();
}

function windowResized() {
  const dims = getDims();
  resizeCanvas(dims.width, dims.height);
}

function getDims() {
  return {
    width: document.body.clientWidth,
    height: document.body.clientHeight
  };
}
