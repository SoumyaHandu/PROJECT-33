var snowflake,snowflakeImg

function preload() {

  snowflakeImg = loadImage("snow4.webp""snow1.jpg""snow2.jpg","snow3.jpg","snow4.webp","snow.webp");
}

function setup() {
createCanvas(800,400);
 
}

function draw() {
  background("blue");  
  drawSprites();
  createSnowflake();
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