var socket;
var sfondo;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#FFFFFF");

  socket = io.connect("http://localhost:3000");
  socket.on("mouse", newDrawing);

  image(sfondo, 0, 0, windowWidth, windowHeight);
}

function draw() {
  noStroke;
  fill("#000000");
  textAlign(CENTER);
  textSize(28);
  text(
    "Grab a friend, draw with pee and go get your di*ks frozen",
    width / 2,
    height / 8
  );
}

function newDrawing(data) {
  noStroke();
  fill("#FED886");
  ellipse(data.x, data.y, 15, 15);
}

function mouseDragged() {
  console.log(mouseX + "," + mouseY);

  var data = {
    x: mouseX,
    y: mouseY,
  };

  socket.emit("mouse", data);

  noStroke();
  fill("#FDB721");
  ellipse(mouseX, mouseY, 15, 15);
}

function preload() {
  sfondo = loadImage("snow.jpg");
}
