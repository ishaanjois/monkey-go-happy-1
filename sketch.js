
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,bananaGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  monkey=createSprite(30,350,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  ground.visible=false;
  
  obstacleGroup=createGroup();
  FoodGroup=createGroup();
  bananaGroup=createGroup();
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug=true

  
}


function draw() {
background("white");
  
  if(keyDown("space")&&monkey.y>=100){
   monkey.velocityY=-12;
    
}
  monkey.velocityY=monkey.velocityY+0.8
  movingFood();
  movingObstacles();
  stroke('white');
textSize(20);
fill('white');
text('Score: '+score,500,50);

stroke('black');
textSize(20);
fill('black');
survivalTime=Math.ceil(frameCount/frameRate())
text('Survival Time: '+survivalTime,100,50)
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  monkey.collide(ground);

  
  drawSprites();
  
}
function movingFood(){
if(frameCount%80===0){
 banana=createSprite(600,160,40,10);
  banana.velocityX=-(6+score/100);
  banana.y=random(120,200);
  banana.velocityX=-5;
  banana.addImage('bananaimg',bananaImage);
 
  banana.scale=0.05;
  banana.lifetime=300;
  monkey.depth=banana.depth+1;
  
  FoodGroup.add(banana);
  
}
}
function movingObstacles(){
  if(frameCount%300===0){
    obstacle = createSprite(800,320,10,40);
    obstacle.addImage('obstacleimg',obstacleImage);
    obstacle.velocityX=-6;
    obstacle.scale=0.15;
    obstacle.lifetime=300;
    obstacleGroup.add(obstacle);
  }
  
}






