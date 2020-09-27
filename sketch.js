var fixedRect, movingRect;
var gObject1, gObject2, gObject3, gObject4, gObject5;
var object1,object2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100, 400, 50, 50);
  fixedRect.shapeColor = "lightgreen";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,50);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
  gObject1 = createSprite(100,100,50,50);
  gObject1.shapeColor ="red";

  gObject2 = createSprite(250,100,50,50);
  gObject2.shapeColor ="yellow";

  gObject3 = createSprite(400,100,50,50);
  gObject3.shapeColor ="brown";

  gObject4 = createSprite(250,400,50,50);
  gObject4.shapeColor ="orange";

  gObject5 = createSprite(400,400,50,50);
  gObject5.shapeColor ="purple";
  
  movingRect.velocityY = 5;
  gObject2.velocityY = 5;
}

function draw() {
  background(0,0,0);  
  createEdgeSprites();
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 
  
  
  if(isTouching(movingRect,gObject1))
  {
    movingRect.shapeColor = "blue";
    gObject1.shapeColor = "blue";
  }
  else
  {
    movingRect.shapeColor = "green";
    gObject1.shapeColor = "green";
  }

  bounceOff(movingRect,gObject2);

  drawSprites();
}

