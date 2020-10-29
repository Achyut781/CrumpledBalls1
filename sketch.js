
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new PaperBall(this.x, this.y, this.body);
    dustbin = new Dustbin(this.x, this.y, this.body);

	Engine.run(engine);
  
}



function keyPressed(){
	 if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body, paper.body.position, 85, -85);	
 }
}

function draw() {
	rectMode(CENTER);
	background(0);
  
	paper.display();
	dustbin.display();
	drawSprites();
   
  }

