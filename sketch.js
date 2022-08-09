const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var w1,w2,w3,w4;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  w1=new Ground(200,390,400,20);
  w2=new Ground(10,200,20,400);
  w3=new Ground(200,10,400,20);
  w4=new Ground(390,200,20,400);

  var options={restitution:0.8}

  ball=Bodies.circle(200,200,20,options);
  World.add(world,ball)
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  w1.show();
  w2.show();
  w3.show();
  w4.show();
  ellipse(ball.position.x,ball.position.y,20)
}

