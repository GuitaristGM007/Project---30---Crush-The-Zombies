//declare constants from matter.js
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

//declare variables for objects, arrays, images, sounds, etc.
var ground;
var bridge;
var wall1, wall2;
var joinPoint;
var jointLink;
var stones = [];

//function to setup the game
function setup() {
//create the canvas of required size
createCanvas(windowWidth, windowHeight);
//create the engine
engine = Engine.create();
//add world to engine
world = engine.world;
//set a specific frameRate
frameRate(80);
//create ground
ground = new Base(0, windowHeight - 50, windowWidth, 30);
//create wall1
wall1 = new Base(25, 400, 100, 200);
//create wall2
wall2 = new Base(1225, 400, 100, 200);
//create bridge
bridge = new Bridge(32, {x : 125, y : 400});
//declare bahaviour of joinPoint
var point_options = {
//define behaviour of joinPoint
density : 0.001
};
//create a joinPoint
joinPoint = new Base(width - 600, height / 2 + 10, 40, 20, "#8d6e63", point_options);

//add joinPoint with body of bridge
Matter.Composite.add(bridge.body, wall2)
//creare a jointLink
jointLink = new Link(bridge, wall2);
}

//function to draw the objects
function draw() {
//set the background of required color
background(51);
//update the engine
Engine.update(engine);

//create a for loop to show the balls
for (var i = 0; i <= 8; i++){
//declare xPosition
var x = random(width / 2 - 200, width / 2 + 300);
//declare yPosition
var y = random(-10, 140);
//declare stone
var stone = new Stone(x, y, 80, 80);
//push object 
stones.push(stone);
}

//display ground
ground.display();
//display bridge
bridge.show();
//display wall1
wall1.display();
//display wall2
wall2.display();
//display stone
stone.display();
}