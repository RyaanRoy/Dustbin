
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper1, dustbin1, dustbin2 , dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,height,1200,20);
	//Create the Bodies Here.
    paper1= new Paper(200,100,100,100);
    dustbin1= new Dustbin(1000, 400,10,80);
    dustbin2= new Dustbin(1000, 400,190,10);
    dustbin2= new Dustbin(1200, 400,10,80);

	Engine.run(engine);
  
}


function draw() {
  
  background(0,0,0);
  Engine.update(engine);
  ground.display();
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
  if (keycode===UP_ARROW)
{
  Matter.Body.applyForce(paper1.body, paper1.body.position,{x:85, y:-85});
}
}



