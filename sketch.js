const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world
var box,ground

function setup() {
  createCanvas(400,400);

  engine = Engine.create()
  world = engine.world

  box = Bodies.circle(200,200,25,{restitution:1})
  World.add(world,box)

  ground = Bodies.rectangle(200,390,390, 10, {isStatic:true})
  World.add(world,ground)
  
}

function draw() {
  background(0);  
  Engine.update(engine)
  ellipseMode(RADIUS)
  ellipse(box.position.x,box.position.y,25,25)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,10)
}