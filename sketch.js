var ninja;
var star;
var background1;
var ninja_image;
var level1;
var level2;
var level3;
var level4;
var level5;
var equipments;
var ninja_runnerback;
var WEAPONSCREEN=1;
var ninjastar1;
var ninjastar1image;
var coin1;
var coins=100;
var land1;
var land2;
var land3;
var obs1;
var obs2;
var obs3;
var obs4;
var obs5;
var obs6;
var obs7;
var land4;
var land5;
var land6;
var land7;
var land8;
var land9;
var land10;
var coin2;
var coin3;
var coin4;
var coin5;
var coin6;
var coin7;
var coin8;
var coin9;
var coin10;
var coinimage;
var coin;
var ninjastar2;
var ninjastar2image;
var weaponinform=0;
var key1;
var level1G;
var ninjastar3;
var ninjastar3image;
var rrr=0;
var ninjastar4;
var ninjastar4image;
var ninjastar5;
var ninjastar5image;
var gameState=0;
var start1=2;
var weapons=3;
var level1=4;
var start=1;
var over=10;
var level1text;
var ninja_runner;
var monstor;
var fireball;
var fireballimage;
var monstorimage;
function preload(){
  ninja_image=loadAnimation("standing.png");
  ninjastar1image=loadImage("ninja star1.png");
  ninjastar2image=loadImage("ninja star2.png");
  ninjastar3image=loadImage("ninja star3.png");
  ninjastar4image=loadImage("ninja star4.png");
 // fireballimage=loadImage("fire ball");
  coinimage=loadImage("coin.png");
  monstorimage=loadImage("monstor.png");
  ninjastar5image=loadImage("ninja star5.png");
 // background1=loadImage("images.jpg");
  ninja_runner=loadAnimation("runner1.png","runner2.png","runner3.png","runner4.png","runner5.png","runner6.png");
  ninja_runnerback=loadAnimation("runner6.png","runner5.png","runner4.png","runner3.png","runner2.png","runner1.png")
}
function setup() {
  createCanvas(1100,600);
  //createSprite(400, 200, 50, 50);
 // homescreen();
  level1G=new Group();
  ninja=createSprite(100,150,45,45);
  ninja.addAnimation("stand",ninja_image);
  ninja.addAnimation("ninja",ninja_runner);
  ninja.addAnimation("ninjaback",ninja_runnerback);
  level1=createSprite(200,300,100,50);
  level1text=createElement('h2');
  level1text.html("level1");
  level1text.position(175,270);
  ninja.visible=false;
  level1.visble=false;
  level1text.hide();
  homescreen();
  equipments=createSprite(800,350,200,70);
  equipments.visible=false;
  weaponstext=createElement('h2');
  weaponstext.html("weapons");
  weaponstext.position(760,320);
  weaponstext.hide();
  //console.log(text);
  coin=createSprite(500,50,10,10);
  coin.addImage(coinimage);
  coin.scale=0.25;
  // ninjastar
  ninjastar1=createSprite(100,300,5,5);
  ninjastar1.addImage(ninjastar1image);
  ninjastar1.scale=0.5;
  ninjastar2=createSprite(230,300,10,10);
  ninjastar2.addImage(ninjastar2image);
  ninjastar2.scale=0.5;
  ninjastar3=createSprite(350,300,10,10);
  ninjastar3.addImage(ninjastar3image);
  ninjastar3.scale=0.5;
  ninjastar4=createSprite(500,300,10,10);
  ninjastar4.addImage(ninjastar4image);
  ninjastar5=createSprite(740,310,10,10);
  ninjastar5.addImage(ninjastar5image);
  ninjastar5.scale=0.5;
  // monstor
  monstor=createSprite(810,390,30,30);
  monstor.addImage(monstorimage);
  monstor.scale=2;
  monstor.visible=false;
  level1G.add(monstor);
  //obs
  obs1=createSprite(190,120,30,30);
  obs1.visible=false;
  level1G.add(obs1);
  obs2=createSprite(240,0,30,30);
  obs2.visible=false;
  level1G.add(obs2);
  obs3=createSprite(700,120,30,30);
  obs3.visible=false;
  level1G.add(obs3);
  obs4=createSprite(280,308,30,30);
  obs4.visible=false;
  level1G.add(obs4);
  //lands
  land1=createSprite(100,200,500,30);
  land2=createSprite(100,195,500,30);
  //land2.shapeColor("red");
  land3=createSprite(824,250,600,20);
  land4=createSprite(824,250,600,30);
  land5=createSprite(324,400,400,20);
  land6=createSprite(324,400,400,30);
  land7=createSprite(800,480,500,20);
  land8=createSprite(800,480,500,30);
  land7.visible=false;
  land8.visible=false;
  land1.visible=false;
  land2.visible=false;
  land3.visible=false;
  land4.visible=false;
  land5.visible=false;
  land6.visible=false;
  //ninja star
  ninjastar1.visible=false;
  ninjastar2.visible=false;
  ninjastar3.visible=false;
  ninjastar4.visible=false;
  ninjastar5.visible=false;
  //coins
  coin2=createSprite(949,189,20,20);
  coin2.visible=false;
  //key
  key1=createSprite(930,420,90,50);
  key1.visible=false;
  //key
  //coins
  coin1=createSprite(55,391,20,20);
  coin1.addImage(coinimage);
  coin1.scale=0.2;
  coin1.visible=false;
}

function draw() {
  background("blue");  
  fill("red");
  textSize(30);
  text("="+coins,530,57);
  text(mouseX + "," + mouseY, mouseX, mouseY);
  if(gameState===1){
   homescreen();
    }
  if(keyDown(RIGHT_ARROW)){
    ninja.changeAnimation("ninja",ninja_runner);
    ninja.position.x=ninja.position.x+10;
  }
  if(keyWentUp(RIGHT_ARROW)){
    ninja.changeAnimation("stand",ninja_image);
  }
  if(keyDown(LEFT_ARROW)){
    ninja.changeAnimation("ninjaback",ninja_runnerback);
    ninja.position.x=ninja.position.x-10;
  }
  if(keyWentUp(LEFT_ARROW)){
    ninja.changeAnimation("stand",ninja_image);
  }
  if(keyDown(DOWN_ARROW)){
    ninja.position.y=ninja.position.y+5;
  }
  if(keyIsDown(UP_ARROW)){
    ninja.position.y=ninja.position.y-15;
  }
 if(mousePressedOver(level1)){
   gameState=2;
 }
 if(gameState===2){
  levels();
 }
 console.log(gameState);
 if(gameState===3){
   funweapons();
 }
 if(gameState===4){
   funlevel1();
 }
 if(gameState===over){
   overgame();
 }
 if(keyDown("k")&&gameState===over){
   gameState=1;
 }
  drawSprites();
}
function homescreen(){
  ninja.visible=true;
  level1.visible=true;
  level1text.show();
  level1G.destroyEach();
 if(rrr===10){
   obs1.visible=true;
   obs2.visible=true;
   obs3.visible=true;
   obs4.visible=true;
   obs5.visible=true;
   obs6.visible=true;
   obs7.visible=true;
  land1.visible=true;
  land2.visible=true;
  land3.visible=true;
  land4.visible=true;
  land5.visible=true;
  land6.visible=true;
  land7.visible=true;
  land8.visible=true;
  rrr=0;
 }
}
function levels(){
  ninja.visible=false;
  level1.visible=false;
  equipments.visible=true;
  level1text.hide();
  weaponstext.show();
 
 
  if(mousePressedOver(equipments)){
    console.log("eee");
    gameState=3;
  }
  
}
function funweapons(){
 
    equipments.visible=false;
    weaponstext.hide();
    ninjastar1.visible=true;
    coin1.visible=true;
    text(" 10",70,398);
    ninjastar2.visible=true;
    text(" 30",200,398);
    ninjastar3.visible=true;
    text(" 40",322,398);
    ninjastar4.visible=true;
    text(" 50",442,398);
    ninjastar5.visible=true;
    text(" 100",684,398);
  if(mousePressedOver(ninjastar1)&&coins>10){
    coins=coins-10;
    gameState=4;
    weaponinform=10;
  }
  if(mousePressedOver(ninjastar2)&&coins>30){
    coins=coins-20;
    gameState=4;
    weaponinform=20;
  }
  if(mousePressedOver(ninjastar3)&&coins>40){
    coins=coins-30;
    gameState=4;
    weaponinform=30; 
  }
  if(mousePressedOver(ninjastar4)&&coins>50){
    coins=coins-50;
    gameState=4;
    weaponinform=40;
  }
}
function funlevel1(){
  ninja.y=ninja.y+7;
  ninjastar1.visible=false;
  ninjastar2.visible=false;
  ninjastar3.visible=false;
  ninjastar4.visible=false;
  ninjastar5.visible=false;
  ninja.visible=true;
  coin1.visible=false;
  land1.visible=true;
  land2.visible=true;
  land3.visible=true;
  land4.visible=true;
  land5.visible=true;
  land6.visible=true;
  land7.visible=true;
  land8.visible=true;
  monstor.visible=true;
  ninja.collide(land1);
  ninja.collide(land3);
  ninja.collide(land5);
  ninja.collide(land7);
  obs1.visible=true;
  obs2.visible=true;
  obs2.velocityY=3;
  obs1.velocityY=3;
   obs3.visible=true;
  obs4.visible=true;
  obs4.velocityY=3;
  obs3.velocityY=3;
  key1.visible=true;
  if (frameCount % 50 === 0) { 
    fire = createSprite(670, 200, 40, 20); 
    fire.y = random(373, 460);
    fire.velocityX = -4;
     }
  if(obs1.isTouching(land1)){
    obs1.y=-5;
  }
  if(obs2.isTouching(land1)){
    obs2.y=-5;
  }
  if(obs3.isTouching(land3)){
    obs3.y=5;
  }
  if(obs4.isTouching(land5)){
    obs4.y=260;
  }
  obs1.collide(land1);
  coin2.visible=true;
  coin2.addImage(coinimage);
  coin2.scale=0.2;
  if(ninja.isTouching(coin2)){
    coin2.destroy();
    coins=coins+5;
  //  coin2.removeSprite();
  }

  if(ninja.isTouching(obs1)||ninja.isTouching(obs2)||ninja.isTouching(obs3)||ninja.isTouching(obs4)){
   gameState=over;
  }

 if(ninja.isTouching(key1)){
   gameState=1
   coins=coins+50;
   coin2.visible=false;
   key1.visible=false;
  land1.visible=false;
  land2.visible=false;
  land3.visible=false;
  land4.visible=false;
  land5.visible=false;
  land6.visible=false;
  land7.visible=false;
  land8.visible=false;
  rrr=10;
 }
}
function overgame(){
  ninja.visible=false;
  coin2.visible=false;
  land1.visible=false;
  land2.visible=false;
  land3.visible=false;
  land4.visible=false;
  land5.visible=false;
  land6.visible=false;
  land7.visible=false;
  land8.visible=false;
  monstor.visible=false;
  key1.visible=false;
  rrr=10;
  text("GAME IS OVER",500,335);
  text("press 'k' to go to home screen ",420,370);
}