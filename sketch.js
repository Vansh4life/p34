const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, superhero, fly;
var gameState = "onSling";

function preload() {
//preload the images here

backgroundImg = loadImage("images/GamingBackground.png");
monster1Img = loadImage("images/Monster-01.png");
monster2Img = loadImage("images/Monster-02.png");
superheroImg = loadImage("images/Superhero-01.png");

}

function setup() {
  createCanvas(3000, 800);

  engine = Engine.create();
  world = engine.world;
  
  // create sprites here

  ground = new Ground(1500,495,3000,10);
  superhero = new Hero(2500,400,600, 300);
  fly = new SlingShot(superhero.body,{x: 300, y: 10});

}

function draw() {
  background(backgroundImg);

  Engine.update(engine);

  ground.display();
  superhero.display();
  fly.display();

}

function mouseDragged(){
  if (gameState=="onSling"){
      Matter.Body.setPosition(superhero.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}