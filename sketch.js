const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box ;

var engine, world;

var object;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  }

  object = Bodies.rectangle(400, 200, 50, 50, options);
  World.add(world, object);

  console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);
}

function draw() {
  background("black");  
  Engine.update(engine);

  rectMode(CENTER);
  fill("white");
  
  rect(object.position.x, object.position.y, 50, 50);
  

  drawSprites();
}