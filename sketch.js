var helicopterIMG, helicopterSprite, packageIMG,packageSprite;
var packageBody;
var wall1,wall2,wall3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
helicopterIMG=loadImage("helicopter.png")
packageIMG=loadImage("package.png")
}

function setup() {
createCanvas(800, 700);
rectMode(CENTER);

wall1=createSprite(400,680,200,20)
wall1.shapeColor=color('red')

wall2=createSprite(300,640,20,100)
wall2.shapeColor=color('red')

wall3=createSprite(500,640,20,100)
wall3.shapeColor=color('red')

packageSprite=createSprite(width/2, 80, 10,10);
packageSprite.addImage(packageIMG)
packageSprite.scale=0.2

helicopterSprite=createSprite(width/2, 200, 10,10);
helicopterSprite.addImage(helicopterIMG)
helicopterSprite.scale=0.6
engine = Engine.create();
world = engine.world;

packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
World.add(world, packageBody);

wall1 = Bodies.rectangle(400,660,200,20, {isStatic:true} );
World.add(world, wall1);

wall2 = Bodies.rectangle(300,660,20,100, {isStatic:true} );
World.add(world, wall2);


wall3 = Bodies.rectangle(500,660,20,100, {isStatic:true} );
World.add(world, wall3);


Engine.run(engine);

}


function draw() {

rectMode(CENTER);
background(0);
packageSprite.x= packageBody.position.x 
packageSprite.y= packageBody.position.y 
drawSprites();

if (keyDown ("down")) {

packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2});
World.add(world, packageBody);

}

}
