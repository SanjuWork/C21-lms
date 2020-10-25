var fixedRect, movingRect;
var object1,object2,object3,object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;  


  object1 = createSprite(100,200,30,30);
  object1.shapeColor = "red";

  object2 = createSprite(200,100,30,30);
  object2.shapeColor = "blue";

  object3 = createSprite(300,200,30,30);
  object3.shapeColor = "white";

  object4 = createSprite(300,100,30,30);
  object4.shapeColor = "yellow";

  object1.velocityX = +2;
  object2.velocityX = +2;

}
// Main part of the code called
function draw() {
  background(0,0,0);

  // Declaring bounce off function
  bounce_Off(object4,object2);

  // Declaring or calling collide function
  if (isColliding(object3,object1)) {
   object1.shapeColor = "brown";
   object3.shapeColor = "brown";
  } else {
   object1.shapeColor = "red";
   object3.shapeColor = "red";
  }
    
  // Drawing the sprites
  drawSprites();
}

// Writing a user defined function
function bounce_Off(object4,object2) {
  if (object4.x - object2.x < object2.width/2 + object4.width/2
      && object2.x - object4.x < object2.width/2 + object4.width/2) {
    object4.velocityX = object4.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }

  if (object4.y - object2.y < object2.height/2 + object4.height/2
    && object2.y - object4.y <  object2.height/2 + object4.height/2){
    object4.velocityY = object4.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
  }
}

// Defining a colliding function
function isColliding(object1,object3) {
 if(object1.x - object3.x < object1.width/2 + object3.width/2
 && object3.x - object1.x < object3.width/2 + object1.width/2
 && object1.y - object3.y < object1.height/2 + object3.height/2
 && object3.y - object1.y < object3.height/2 + object1.height/2) {
  return true;
 } else {
  return false; 
 }
}