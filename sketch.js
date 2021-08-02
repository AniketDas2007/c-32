// loading all modules
const Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Constraint = Matter.Constraint;

// engine and world for the game
var engine, world;

// stands and ground for the game
var stand1, stand1, ground1;

// creating boxes
var box1,
  box2,
  box3,
  box4,
  box5,
  box6,
  box7,
  box8,
  box9,
  box10,
  box11,
  box12,
  box13,
  box14,
  box15,
  box16,
  box17,
  box18;

// to create polygon
var polygon1, slingShot;

// score for the game
var score = 0;

// for background image
var backgroundImg;
var bg;

// game state
var gameState = "on slingshot";

function preload() {
  getBackgroundImg();
}

function setup() {
  // creating canvas
  createCanvas(800, 400);

  // engine & world
  engine = Engine.create();
  world = engine.world;

  createSprite(400, 200, 50, 50);

  // creating ground and stand
  stand1 = new Ground(390, height - 100, 200, 20);
  stand2 = new Ground(650, height - 200, 200, 20);
  ground1 = new Ground(400, height - 10, width, 20);

  // creating box
  box1 = new Box(330, 235, 30, 40);
  box2 = new Box(360, 235, 30, 40);
  box3 = new Box(390, 235, 30, 40);
  box4 = new Box(420, 235, 30, 40);
  box5 = new Box(450, 235, 30, 40);
  box6 = new Box(360, 195, 30, 40);
  box7 = new Box(390, 195, 30, 40);
  box8 = new Box(420, 195, 30, 40);
  box9 = new Box(390, 185, 30, 40);
  box10 = new Box(590, 135, 30, 40);
  box11 = new Box(620, 135, 30, 40);
  box12 = new Box(650, 135, 30, 40);
  box13 = new Box(680, 135, 30, 40);
  box14 = new Box(710, 135, 30, 40);
  box15 = new Box(620, 85, 30, 40);
  box16 = new Box(650, 85, 30, 40);
  box17 = new Box(680, 85, 30, 40);
  box18 = new Box(650, 55, 30, 40);

  // creating polygon
  polygon1 = new Polygon(100, 280, 40);

  // creating slingShot
  slingShot = new SlingShot(polygon1.body, { x: 150, y: 150 });
}

function draw() {
  if (backgroundImg) {
    background(backgroundImg);
  }

  // instruction
  noStroke();
  textSize(20);
  fill("white");
  text("SCORE :" + score, 650, 40);
  text("Press the space key for another chance!", 400, 380);

  // to update the engine
  Engine.update(engine);

  stroke("black");

  // for score and display the box1
  box1.score();
  box1.display();

  // for score and display the box2
  box2.score();
  box2.display();

  // for score and display the box3
  box3.score();
  box3.display();

  // for score and display the box4
  box4.score();
  box4.display();

  // for score and display the box5
  box5.score();
  box5.display();

  // for score and display the box6
  box6.score();
  box6.display();

  // for score and display the box7
  box7.score();
  box7.display();

  // for score and display the box8
  box8.score();
  box8.display();

  // for score and display the box9
  box9.score();
  box9.display();

  // for score and display the box10
  box10.score();
  box10.display();

  // for score and display the box11
  box11.score();
  box11.display();

  // for score and display the box12
  box12.score();
  box12.display();

  // for score and display the box13
  box13.score();
  box13.display();

  // for score and display the box14
  box14.score();
  box14.display();

  // for score and display the box15
  box15.score();
  box15.display();

  // for score and display the box16
  box16.score();
  box16.display();

  // for score and display the box17
  box17.score();
  box17.display();

  // for score and display the box18
  box18.score();
  box18.display();

  // to display the stands and the ground
  stand1.display();
  stand2.display();
  ground1.display();

  // to display the polygon and the sling
  polygon1.display();
  slingShot.display();
}

// to launch the polygon
function mouseDragged() {
  if (gameState !== "launched") {
    Matter.Body.setPosition(polygon1.body, { x: mouseX, y: mouseY });
  }
}
function mouseReleased() {
  slingShot.fly();
  gameState = "launched";
}

// to get another chance
function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(polygon1.body, { x: 200, y: 50 });
    slingShot.attach(polygon1.body);
    gameState = "on slingshot";
  }
}

// to get the background as time
async function getBackgroundImg() {
  var response = await fetch(
    "https://worldtimeapi.org/api/timezone/Asia/Kolkata"
  );
  var responseJSON = await response.json();
  var date = responseJSON.datetime;
  var hour = date.slice(11, 13);
  if (hour >= 06 && hour <= 19) {
    bg = "Sprites/bg.jpg";
  } else {
    bg = "Sprites/bg1.jpg";
  }
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
