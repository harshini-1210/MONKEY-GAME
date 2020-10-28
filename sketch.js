
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup;
var score;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)
  

  
}


function draw() {
background("white");
  
    if(keyDown("space") ){
    monkey.velocityY = -12;
     }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);

    if(ground.x < 0){
      ground.x = ground.width/2;
    }
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time : " + survivalTime , 115,50);
   
   food();
  
  obstacle();
  
 drawSprites(); 
}

function food(){
  
  if(frameCount % 80 === 0){
  var banana = createSprite(400,200,20,20);
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -3;
    
    banana.lifetime = 134;   
  
}
}

function obstacle(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(400,330,10,40);
   obstacle.velocityX = -6;
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.2;
   
    var rand = Math.round(random(1,6));
  
    obstacle.lifetime = 300;

 }
}





