var bg,stricker1,stricker2,coin,line1,line2,line3,line4,line5,line6
var bg_img,stricker1_img,stricker2_img,coin_img,line1_img,line2_img,line3_img,line4_img,line5_img,line6_img;



var score=0;




function preload(){
background.img = loadImage("bg.png");
stricker1_img = loadImage("stricker1.png");
stricker2_img = loadImage("stricker2.png")
coin_img = loadImage("coin.png");
line1_img = loadImage("line1.png");
line2_img = loadImage("line2.png");
line3_img = loadImage("line3.png");
line4_img = loadImage("line4.png");
line5_img = loadImage("line5.png")
line6_img = loadImage("line6.png")
}

function setup (){
  createCanvas(400,600);
 // bg = createSprite (width/2,height/2,10,10);
 // bg.shapeColor="black"

  stricker1 = createSprite(200,350,50,50)
  stricker1.addImage("stricker1",stricker1_img)
  stricker1.scale=0.15;
  
  stricker2 = createSprite(200,50,50,50)
  stricker2.addImage("stricker2",stricker2_img)
  stricker2.scale=0.15;

  coin = createSprite(200,250,40,40);
  coin.addImage("coin",coin_img);
  coin.scale=0.05;

  line1=createSprite(20,320,5,700);
  line1.addImage("line1",line1_img)
  line1.scale=1.5

  line2=createSprite(380,320,5,700)
  line2.addImage("line2",line2_img)
  line2.scale=1.5

  line3=createSprite(60,10,100,15);
  line3.addImage("line3",line3_img);
  line3.scale=0.2

  line4=createSprite(350,10,100,15);
  line4.addImage("line4",line4_img);
  line4.scale=0.2

  line5=createSprite(60,590,390,15);
  line5.addImage("line5",line5_img);
  line5.scale=0.2;

  line6=createSprite(350,590,390,15);
  line6.addImage("line6",line6_img);
  line6.scale=0.2;

 // centreLine=createSprite(300,350,600,5)
 score=0;
}

function draw() {
  background("black");
  stricker1.x=World.mouseX;
  stricker1.y=World.mouseY;

  stricker2.velocityX=coin.velocityX

  if((coin.position.y<680)&&(coin.position.y>680)){
    score=score + 1;
    coin.position.x=200
    coin.position.y=370
  }
  
  

  if(keyDown("space")){
    coin.velocityX=5;
    coin.velocityY=-5
  }

  coin.bounceOff(line1);
  coin.bounceOff(line2);
  coin.bounceOff(line3);
  coin.bounceOff(line4);
  coin.bounceOff(line5);
  coin.bounceOff(line6);
  coin.bounceOff(stricker1);
  coin.bounceOff(stricker2);
  drawSprites();
}
