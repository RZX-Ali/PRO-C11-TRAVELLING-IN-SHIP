var ship,ship1;
var sea,sea1;
/*I modified the project a bit. I made it so you can move with your arrow keys (if you use the arrow keys
 then you will have to control the ship, and not make it fall out of the sea) and every one in a while, the
sea will stop moving so all the people in the ship can have a look at the ocean, then the ship will 
start moving again in a while. Tell me if you want me to remove the modifications I did to the project
 requirements.
*/
function preload() {
  
 ship1=loadAnimation("ship-1.png", "ship-2.png","ship-3.png", "ship-4.png");
 seaImage=loadImage("sea.png") 

}
function setup() {
  createCanvas(600,500);
  sea = createSprite(600,300);
  sea.addAnimation("moving",seaImage);
  sea.scale=0.5;
  sea.velocityX=-2;

  ship = createSprite(50,200,20,50);
  ship.addAnimation("running",ship1);
  edges = createEdgeSprites();

  ship.scale=0.25;
  ship.x=90;
  ship.y=300;
}
function draw() {
  
  background(seaImage)
  /*if (keyDown("space")) {
  ship.velocityY = -2;
}*/
if(keyDown("left")){
  ship.velocityX=-2;
}
if(keyDown("right")){
  ship.velocityX=2;
}
if(keyDown("enter")){
  ship.velocityX=0;
}

if (sea.x < 0) {
  sea.x = sea.width / 2;
}

ship.collide(edges[3]);
drawSprites() 
  
}  
  
  