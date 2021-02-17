
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
paper=createSprite(200,200,20,20)
dustbin=createSprite=(200,120,200,20)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin.display();
  paper.display();
  drawSprites();
 
}
function keyPressed(){
	if (keycode===UP_Arrow){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

	}
}


