var snowflake,snowflakeImg
var background, bgImg

function preload() {

  snowflakeImg = loadImage("snow4.webp", "snow5.webp");
  bgImg = loadImage("snow1.jpg","snow2.jpg", "snow3.jpg");
}

function setup() {
createCanvas(800,400);
 
}

function draw() {
  background(bgImg);  
  drawSprites();
  createSnowflake();
}

function createSnowyBackground(){
  if(frameCount%20===0){
  background = createSprite(random(0,800), 0, 50, 50);
  background.velocityX = -2;
  background.velocityY = 3;
  background.addImage(bgImg);
  background.scale = 2;
  }
}

function createSnowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,800), 0, 50, 50);
  snowflake.velocityX = -2;
  snowflake.velocityY = 4;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.1;
  }
}
