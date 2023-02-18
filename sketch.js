var bg,bgImg;
var player, shooterImg, shooter_shooting;
var score1=0;
var score2=0;

function preload(){
  
  playerImg = loadImage("assets/bfc4.png")
  //shooter_shooting = loadImage("assets/")
  player2Img = loadImage("assets/pico.png.png")
  ballImg = loadImage("assets/balon.png")
  bgImg = loadImage("assets/esenario.jpg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-159, displayHeight-300, 50, 50);
 player.addImage(playerImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)
  
   player2 = createSprite(displayWidth-1480, displayHeight-300, 50, 50);
   player2.addImage(player2Img)
     player2.scale = 0.01
     player2.debug = true

     ball = createSprite(displayWidth-575,150, 50, 50);
     ball.addImage(ballImg)
       ball.scale = 0.03
       ball.debug = true
       ball.velocityX = 2
       ball.velocityY = 3
     
}

function draw() {
  background(0);
  createEdgeSprites();
  if (player.isTouching(ball)){
    ball.velocityX = -2
    ball.velocityY = -1 
  }
  
  if (player2.isTouching(ball)){
    ball.velocityX = +2
    ball.velocityY = +1 
  }

  
  text(score1,170,50);
  text(score2,230,50);



  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}

if(keyDown("W")||touches.length>0){
  player2.y = player2.y-30
}
if(keyDown("S")||touches.length>0){
 player2.y = player2.y+30
}
//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();

}
