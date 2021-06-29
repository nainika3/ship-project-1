var ship, shipImg;
var seaImg;
var sea;

function preload(){
  shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
 
  sea=createSprite(200,250);
 sea.addImage(seaImg);
 sea.velocityX= -5
 sea.scale=0.3;

 ship=createSprite(150,250,60,40);
 ship.addAnimation("ship sailing",shipImg);
 ship.scale=0.23;

}

function draw() {
  background("blue");

  if(sea.x<0){
    sea.x=sea.width/8;
  }
  drawSprites();

}

