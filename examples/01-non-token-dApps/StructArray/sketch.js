let pixelSize = 16;

function setup() {
  createCanvas(32 * pixelSize, 32 * pixelSize);
  background(100);
  noStroke();
  generateGrid();
}

function mouseClicked() {
  //generateGrid();

  fill(255, 0, 0);
  rect(floor(mouseX) * pixelSize, floor(mouseY) * pixelSize, pixelSize, pixelSize);

  console.log("ok")
}


function generateGrid() {
  for (let y = 0; y < height; y += pixelSize) {
    for (let x = 0; x < width; x += pixelSize) {

      let s;
      if (Math.random() >= 0.5) {
        s = 255;
      } else {
        s = 0;
      }
      fill(s);

      rect(x, y, pixelSize, pixelSize);
    }
  }
}