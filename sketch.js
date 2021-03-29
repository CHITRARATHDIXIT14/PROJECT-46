const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg
var ball,ball_running;
var star,starGroup,starImg
var groundSprite
var platform
var randomFramecount

function preload(){
bg=loadImage("sprites/bg.jpg")
ball_running=loadAnimation("sprites/1.png","sprites/2.png","sprites/3.png","sprites/4.png")
starImg=loadImage("sprites/star.png")
}




function setup(){
    var canvas = createCanvas(1400,700);
    engine = Engine.create();
    world = engine.world;
  
    //ground1 = new ground(680,height,1400,40)
    
    randomFramecount=random(80,160); 
   
  var option ={
       
    isStatic:false
    
   }

ball=Bodies.rectangle(100,200,100,100,option);
World.add(world,ball);
   



ballsprite=createSprite(200,200,20,20);
ballsprite.addAnimation("Running",ball_running);
ballsprite.scale=0.4;

groundSprite=createSprite(680,height,1400,40)

}

function draw(){
  Engine.update(engine);
    background(bg);
    
    /*if(ground1.x<100){
      ground1.x=ground1.width/2;
    }*/

    

   ballsprite.x=ball.position.x;
   ballsprite.y=ball.position.y;
      
  //  / ground1.display();

   
   
  



   starSpawn();
   randomPlatform();

    drawSprites();
    
}


function keyPressed(){
if(keyCode===RIGHT_ARROW){

ball.position.x=ball.position.x+4;
}

if(keyCode===LEFT_ARROW){

  ball.position.x=ball.position.x-4;
  }

  if(keyCode===UP_ARROW){

    ball.position.y=ball.position.y-10;
    }
}

function starSpawn(){
  if(frameCount%randomFramecount===0){

    star=createSprite(1000,500,30,30)
    star.addImage(starImg)
    star.scale=0.1
    star.velocityX=-2
    star.lifetime=200
    
  }
}

function randomPlatform(){
if(frameCount%160===0){
var options={
  isStatic:true
}

platform=Bodies.rectangle(1300,580,random(50,60),random(50,60))

}
}
