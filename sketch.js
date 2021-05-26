var bg,continueButtonFlag=true,gameState=0,bg1;
var play,playImg,continueButton,continueImg;
var hanuman,hanumanAnimation,jumpAnimation,sitAnimation;
var invisibleGround;
var villan1,villan2,villan3,villan4,villan5;
var villan1Group,villan2Group,villan3Group,villan4Group,villan5Group;
var blastAnimation;
var score=0;
var coin, coinGroup;
var coinAnimation;
var theEnd, hanumanMeditate;
var str;


function preload(){
  bg=loadImage("images/jai hanuman.jpg");
  bgRing=loadImage("images/ring giving to hanuman.png");
  theEnd = loadImage("images/end.jpg");
  bgForest=loadImage("images/forest.jpg");
  playImg=loadImage("images/play.png");
  hanumanMeditate = loadImage("images/hanumanMeditation.jpg")
  continueImg=loadImage("images/continue.png");
  hanumanAnimation=loadAnimation("images/hanuman3.png","images/hanuman4.png","images/hanuman5.png","images/hanuman6.png","images/hanuman7.png","images/hanuman8.png");
  jumpAnimation=loadAnimation("images/hanuman2.png");
  sitAnimation=loadAnimation("images/hanuman1.png");
  punchAnimation=loadAnimation("images/hanuman4.png");
  villan1=loadAnimation("images/villan1.png","images/villan2.png","images/villan3.png","images/villan4.png","images/villan5.png","images/villan6.png","images/villan7.png","images/villan8.png","images/villan9.png");
  villan2=loadAnimation("images/thanos1.png","images/thanos2.png","images/thanos3.png","images/thanos4.png");
  villan3=loadAnimation("images/m1.png","images/m2.png","images/m3.png","images/m4.png","images/m5.png","images/m6.png","images/m7.png","images/m8.png");
  villan4=loadAnimation("images/a1.png","images/a2.png","images/a3.png","images/a4.png","images/a5.png","images/a6.png","images/a7.png","images/a8.png",);
  villan5=loadAnimation("images/ninja1.png","images/ninja2.png","images/ninja3.png","images/ninja4.png");
  //blastAnimation=loadAnimation("images/blast1.png","images/blast2.png","images/blast3.png","images/blast4.png");
  coinAnimation=loadAnimation("images/c1.png","images/c2.png","images/c3.png","images/c4.png","images/c5.png","images/c6.png","images/c7.png")
}
function setup() {
  createCanvas(displayWidth-20,755);
 
  bg1=createSprite(width/2,height/2);
  bg1.addImage("hanuman",bg);
  bg1.addImage("ring",bgRing);
  bg1.addImage("forest",bgForest);
 // bg1.addImage("end",theEnd);
  play=createSprite(width/2-50,height/2,60,50);
  play.addImage("Play",playImg);
  invisibleGround=createSprite(width/2,height-1,width,10);
  invisibleGround.visible=false;
  villan1Group=new Group();
  villan2Group=new Group();
  villan3Group=new Group();
  villan4Group=new Group();
  villan5Group=new Group();
  coinGroup = new Group();
  
}

function draw() {
  background(0);

  if(score>=100) {
    gameState = 2;
  }
 
  if(gameState===0){
    if(mousePressedOver(play)){
     
      bg1.changeImage("ring",bg);
      bg1.scale=3.57;
      play.destroy();
      if(continueButtonFlag){
        continueButton=createSprite(width/2-20,height/2-100,10,10);
        continueButton.addImage("continue",continueImg);
        continueButtonFlag=false;
      }
      
    }
  
    if(mousePressedOver(continueButton)){
     
      bg1.changeImage("forest",bgForest);
      bg1.scale=3;
      bg1.x=bg1.width/2;
      console.log("H!!!!!!!!!!!!!!!!!!!!!!!");
      bg1.velocityX=-2;
      console.log("@@@@@@@@@@@@@@@@");

      hanuman=createSprite(100,height-100,10,10);
      hanuman.addAnimation("Running",hanumanAnimation);
      hanuman.addAnimation("jumping",jumpAnimation);
      hanuman.addAnimation("sitting",sitAnimation);
      
      continueButton.destroy();
      gameState=1;
    }
  }else if(gameState===1){
    str = "Press 'a' to kill the Monsters";
    bg1.velocityX=-2;
    if(bg1.x<300){
      bg1.x=bg1.width/2;
    }

    if(hanuman.y>=628){
      hanuman.changeAnimation("Running",hanumanAnimation);
    }
    else{
      hanuman.changeImage("jumping",jumpAnimation);
    }

      if(keyDown(UP_ARROW) && hanuman.y>=628){      
        hanuman.velocityY=-15;
      }
      hanuman.velocityY=hanuman.velocityY+0.5;
      hanuman.collide(invisibleGround);

      if(keyDown(DOWN_ARROW)){
        hanuman.changeAnimation("sitting",sitAnimation);
      }
    
    spawnVillans();
    spawnCoins();

    if(coinGroup.isTouching(hanuman)){
      score=score+5;
      coinGroup.destroyEach();
    }
    if(villan1Group.isTouching(hanuman) || villan2Group.isTouching(hanuman) || villan3Group.isTouching(hanuman) || villan4Group.isTouching(hanuman) || villan5Group.isTouching(hanuman)) {
    if(keyDown("a")){
      
      if(villan1Group.isTouching(hanuman)){
        console.log("1111");
        villan1Group.setVelocityYEach(-5);

        if(villan1Group.get(0).y<0){

          villan1Group.destroyEach();
          console.log("2222");
        }
      }
      if(villan2Group.isTouching(hanuman)){
        //villan2Group.destroyEach();
        villan2Group.setVelocityYEach(-5);
        if(villan2Group.get(0).y<0){

          villan2Group.destroyEach();
          console.log("2222");
        }
      }
      if(villan3Group.isTouching(hanuman)){
       // villan3Group.destroyEach();
        villan3Group.setVelocityYEach(-5);
        if(villan3Group.get(0).y<0){

          villan3Group.destroyEach();
          console.log("2222");
        }
      }
      if(villan4Group.isTouching(hanuman)){
       // villan4Group.destroyEach();
        villan4Group.setVelocityYEach(-5);
        if(villan4Group.get(0).y<0){

          villan4Group.destroyEach();
          console.log("2222");
        }
      }
      
    }else {
      gameState = 3;
    }
  } 
  }

   else if(gameState ===2) {
     str="The End";
    hanuman.destroy();
    villan1Group.destroyEach();
    villan2Group.destroyEach();
    villan3Group.destroyEach();
    villan4Group.destroyEach();
    villan5Group.destroyEach();
    coinGroup.destroyEach();
    bg1.destroy();
    bg1 = createSprite(width/2,height/2);

    bg1.addImage("end",theEnd);
    bg1.scale = 0.5;
    bg1.velocityX = 0;
  } else if(gameState === 3) {
    str = "Please Refresh to Restart";
    hanuman.destroy();
    villan1Group.destroyEach();
    villan2Group.destroyEach();
    villan3Group.destroyEach();
    villan4Group.destroyEach();
    villan5Group.destroyEach();
    coinGroup.destroyEach();
    bg1.destroy();
    bg1 = createSprite(width/2,height/2);
    bg1.addImage("meditate",hanumanMeditate);

  }
 

  drawSprites();
  textSize(25);
  fill("white");
  text("SCORE: "+score,width-150,30);
  text(str,20,30);
 
}

function spawnVillans(){
  if(frameCount %300===0){
    var villan=createSprite(width,height-100);
    var rand=Math.round(random(1,5));
    if(rand===1){
      villan.addAnimation("dragon",villan1);
      villan1Group.add(villan);
      villan.scale=2;
    }
    else if(rand===2){
      villan.addAnimation("villan2",villan2);
      villan2Group.add(villan);
      villan.scale=2;
    }
    else if(rand===3){
      villan.addAnimation("villan3",villan3);
      villan3Group.add(villan);
      villan.scale=2;
    }
    else if(rand===4){
      villan.addAnimation("villan4",villan4);
      villan4Group.add(villan);
      villan.scale=2;
    }
    else if(rand===5){
      villan.addAnimation("villan5",villan5);
      villan5Group.add(villan);
      villan.scale=1;
    }
   // villan.addAnimation("blast",blastAnimation);
    
    villan.velocityX=-7;
  }
}

function spawnCoins(){
  if (frameCount % 200===0){
    coin=createSprite(width,height-300);
    coin.addAnimation("coin",coinAnimation);
    coin.velocityX=-7;
    coinGroup.add(coin);
  }
}