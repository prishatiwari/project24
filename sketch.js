
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, paper, dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	paper = new Paper( 100, 100 );
	ground = new Ground( 400, 600, 800,30 );
	dustbin = new DustBin( 400, 500 );
	
	Engine.run(engine);
  
}

var keyPressed = () => {
	if( keyCode === UP_ARROW )
	{
		Matter.Body.applyForce( paper.body, paper.body.position, {x: 85, y: -85} );
	}
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();
  dustbin.display();
  drawSprites();
 
}



