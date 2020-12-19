const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;


var engine,world;

var ground;
var ball;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  groundOptions = {
    isStatic : true
  }


  ground = Bodies.rectangle(400,350,800,10,groundOptions);
  World.add(world,ground);

  ballOptions = {
    restitution : 1.0 
  }

  ball = Bodies.circle(350,10,40,ballOptions);
  World.add(world,ball);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);

}