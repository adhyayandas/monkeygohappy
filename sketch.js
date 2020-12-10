
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
    obstacleGroup = createGroup();

 
}



function setup() {
createCanvas(600,300)
  
monkey = createSprite(100,220,20,20);
    monkey.addAnimation("running",monkey_running);
  monkey.scale=0.17;
  
ground = createSprite(100,290,5000,5)
  
}


function draw() {
background('#FFFFFF');
  
  stones()
  drawSprites();
  
  if(keyDown("space") ) {
        monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY+0.8
  

  
  
  monkey.collide(ground);
  monkey.collide(obstacleGroup)
   
  if( monkey.collide(obstacleGroup)){
    
    obstacle.setVelocityYEach=0
     
     }
  
  
  
        
  
}

function stones(){
  if(frameCount%Math.round(random(100,150))===0){
    obstacle=createSprite(600,260,20,20);
  obstacle.addImage(obstaceImage);
  obstacle.scale=0.2;
  obstacle.velocityX=-5;
    obstacle.lifetime=120
      obstacleGroup.add(obstacle);

    
  }
}
function banana();





