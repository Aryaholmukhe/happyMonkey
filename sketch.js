
var monkey , monkey_running
var  banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var ground, groundImage

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  
  createCanvas(600, 600)
 monkey = createSprite(70, 470, 20, 20)
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.2;
  
  ground = createSprite(300, 510, 1200, 20)
  ground.velocityX = -5;
  ground.x = ground.width/2;
  
  bananaGroup = createGroup()
  obstacleGroup = createGroup()
  
  score = 0;
  
}


function draw() {
  background("#d0e8f2");

    if(ground.x < 0) {
      ground.x = ground.width/2
    }
  
  if(keyDown("space")&& monkey.y >= 400){
    monkey.velocityY = -14;
  }   
  monkey.velocityY = monkey.velocityY+ 0.6;
  
  monkey.collide(ground); 
  
  score = score + Math.round(getFrameRate()/60);
  
  if (bananaGroup.isTouching(monkey)){
    bananaGroup[0].destroy();
    score = score + 50
  }
  
  if (obstacleGroup.isTouching(monkey)){
    obstacleGroup.destroyEach();
    bananaGroup.destroyEach();
    score = 0;
    
    
  }

  bananas()
  drawSprites()
  obstacles()
  
  textSize(50)
  fill("#456268")
    text("Survival Time: "+ score, 150,70);
}

function bananas(){
  if(frameCount%80 === 0){
    banana = createSprite(600, Math.round(random(330, 200)), 20, 20)
    banana.addImage(bananaImage) 
    banana.scale = 0.1;
    banana.velocityX = -6 ;
    banana.lifetime = 120;
    bananaGroup.add(banana)
  }

}

function obstacles(){
  if(frameCount% Math.round(random(85, 90)) === 0){
  obstacle = createSprite(600, 483, 20, 20)
  obstacle.addImage(obstacleImage)
  obstacle.velocityX = -5;
  obstacle.scale = 0.10;
    obstacle.lifetime = 125;
    obstacleGroup.add(obstacle)
  }
}


