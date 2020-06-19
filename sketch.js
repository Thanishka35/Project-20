var car, wall

var speed,weight

var equation

function setup() {
  createCanvas(1000,400);

  speed = random(55,99);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(800,200,10,200);
  wall.shapeColor = (80,80,80);
}

function draw() {
  background(255,255,255);  

  if (isTouching(car,wall)){
    deformation(weight,speed);
  }  
  drawSprites();
}

function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      return true;
    }
    else{
      return false;
    }
}

function deformation(object1, object2){
  equation = 0.5*object1*object2*object2/22500;
  //equation = 110
  if (equation<100){
    car.shapeColor = "green";
    car.velocityX = 0;
  }
  else if (equation<180 && equation>100){
    car.shapeColor = "yellow";
    car.velocityX = 0;
  }
  else if (equation>180){
    car.shapeColor = "red";
    car.velocityX = 0;
  }
}