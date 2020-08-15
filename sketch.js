const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1, box2, box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height, width, 10);
	groundSprite.shapeColor=color("white");


	box1 = new Box(400, 690);
	box2 = new Box(355, 650);
	box3 = new Box(450, 650);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2, 200, 10,10, {isStatic:true}, restitution = 1);
	World.add(world, packageBody);
	

	ground = Bodies.rectangle(width/2, 680, width, 10 , {isStatic:true} );
	 World.add(world, ground);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  keyPressed();

  drawSprites();

  box1.display();
  box2.display();
  box2.display();
}

function keyPressed() {
 if (keyCode == DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
}
}



