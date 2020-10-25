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