var log1,log2,log3;
var ground;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
  rectMode(CENTER);
	createCanvas(800, 700);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,680,1200,20);
  log1=new Dustbin(550,660,200,20);
	log2=new Dustbin(460,620,20,100);
  log3=new Dustbin(650,620,20,100);
  ball=new  PaperBall(50,675);
  
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
  
  log1.display();
  log2.display();
  log3.display();
  ground.display();
  ball.display();

  keyPressed();

  drawSprites();

}

function keyPressed() {
if (keyCode=== UP_ARROW) {
  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:85});
}
}

