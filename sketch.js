var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var building1,building2,building3,b1Img,b2Img,b3Img

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
b1Img=loadImage("assets/obsBottom1.png")


}

function setup(){
createCanvas(400,400)

bg = createSprite(165,485,1,1);
bg.velocityX= -3


bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

}


function spawnbuilding1() {

    
  if (frameCount % 200 === 0) {
   building1 = createSprite(600,335,40,10);
    
    building1.addImage(b1Img);
    building1.scale = 0.08;
    building1.velocityX = -3;
    
     
    building1.lifetime = 200;
    
   
    building1.depth = balloon.depth;
    balloon.depth = balloon.depth + 1;
    
    
    //cloudsGroup.add(building1);
  }
  
}












function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          
          }

          if (bg.x<0)
        bg.x = bg.width/2;
          //adding gravity
           balloon.velocityY = balloon.velocityY + 0.3;
   
           spawnbuilding1();
        drawSprites();
        
}