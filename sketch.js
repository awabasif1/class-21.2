var car, wall, speed, weight;
var thickness, bullet;
function setup() {
  createCanvas(1600,400);
  
 speed=random(223, 321);
 weight=random(30, 52);
 thickness= random(22,83);
  car=createSprite(50, 200, 50, 50);
bullet=collide(wall);
  wall=createSprite(1500, 200, thickness, height/2);
  wall.shapeColor=(80, 80, 80);
}

function draw() {
  background(255);  

  car.velocityX=speed;

  var deformation=0.5*weight*speed*speed/22509;

  if(car.x-wall.x<car.width/2+wall.width/2
    &&
    wall.x-car.x<car.width/2+wall.width/2){
      car.velocityX=0;

      if(deformation<100){
        car.shapeColor="green";
      }
     
      if(deformation>100||deformation<180){
        car.shapeColor="yellow";
      }
     
      if(deformation>180){
        car.shapeColor="red";
      }
     
  
      car.x=wall.x-50;

    }
 
  if (damage=bulletweight.x*bulletspeed.x*bulletspeed.x
  &&
  bulletweight.y*bulletspeed.y*bulletspeed.y){
    if (damage<3.68){
      wall.shapeColor="green";
    }
    if (damage>12.43){
      wall.shapeColor="red";
    }
    else{
      wall.shapeColor="blue";
    }
  }
  

  drawSprites();
} 