var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var char = [];
var zombie = [];
var fox =[];
var log =[];
var log2 =[];
var rock =[];
var jump =[];
var run =[];
var bg1 =[];
var knife =[];
var meat =[];
var bottle =[];
var ground =[];

function preload() {
 
var char= loadImage("walk.png/1")
var char= loadImage("walk.png/2")
var char= loadImage("walk.png/3")
var char= loadImage("walk.png/4")
var char= loadImage("walk.png/5")
var char= loadImage("walk.png/6")
var char= loadImage("walk.png/7")
var char= loadImage("walk.png/8")
var char= loadImage("walk.png/9")
var char= loadImage("walk.png/10")
var char= loadImage("walk.png/11")
var char= loadImage("walk.png/12")
var char= loadImage("walk.png/13")
var char= loadImage("walk.png/14")
var char= loadImage("walk.png/15")
var char= loadImage("walk.png/16")
var char= loadImage("walk.png/17")
var char= loadImage("walk.png/18")
var char= loadImage("walk.png/19")
var char= loadImage("walk.png/20")
var char= loadImage("walk.png/21")
var char= loadImage("walk.png/22")
var char= loadImage("walk.png/23")
var char= loadImage("walk.png/24")
var char= loadImage("walk.png/25")
var char= loadImage("walk.png/26")

var jump=loadImage("jump.png/1")
var jump=loadImage("jump.png/2")
var jump=loadImage("jump.png/3")
var jump=loadImage("jump.png/4")
var jump=loadImage("jump.png/5")
var jump=loadImage("jump.png/6")
var jump=loadImage("jump.png/7")
var jump=loadImage("jump.png/8")




var run=loadImage("run.png/1")
var run=loadImage("run.png/2")
var run=loadImage("run.png/3")
var run=loadImage("run.png/4")
var run=loadImage("run.png/5")
var run=loadImage("run.png/6")
var run=loadImage("run.png/7")
var run=loadImage("run.png/8")
var run=loadImage("run.png/9")
var run=loadImage("run.png/10")
var run=loadImage("run.png/11")
var run=loadImage("run.png/12")
var run=loadImage("run.png/13")
var run=loadImage("run.png/14")
var run=loadImage("run.png/15")
var run=loadImage("run.png/16")
var run=loadImage("run.png/17")
var run=loadImage("run.png/18")
var run=loadImage("run.png/19")
var run=loadImage("run.png/20")
var run=loadImage("run.png/21")
var run=loadImage("run.png/22")
var run=loadImage("run.png/23")
var run=loadImage("run.png/24")
var run=loadImage("run.png/25")
 
var fox=loadImage("fox.png/1")
var fox=loadImage("fox.png/2")
var fox=loadImage("fox.png/3")
var fox=loadImage("fox.png/4")
var fox=loadImage("fox.png/5")
var fox=loadImage("fox.png/6")
var fox=loadImage("fox.png/7")
var fox=loadImage("fox.png/8")
 
var zombie=loadImage("zombie.png/1")
var zombie=loadImage("zombie.png/2")
var zombie=loadImage("zombie.png/3")
var zombie=loadImage("zombie.png/4")
var zombie=loadImage("zombie.png/5")
var zombie=loadImage("zombie.png/6")
var zombie=loadImage("zombie.png/7")
var zombie=loadImage("zombie.png/8")
var zombie=loadImage("zombie.png/9")
var zombie=loadImage("zombie.png/10")
var zombie=loadImage("zombie.png/11")
var zombie=loadImage("zombie.png/12")
 
var log=loadImage("log.png.png")

var log2=loadImage("log2.png.png")

var meat=loadImage("meat.png.png")

var knife=loadImage("knife.png.png")
 
var bg1=loadImage("bg1.png.png")
 
var bottle=loadImage("bottle.png.png")

var rock=loadImage("rock.png.png")


var gameState=play
var gameState=end

var lifebar
}
function setup() {
  createCanvas(800, 800);

   
}

function draw() {
  background("white");
bg1=createSprite(400,400,10,10)
  bg1.velocityX=-4
  if(bg1.x<0){
    bg1.x=400
  }


if(keyDown("space")){

  for(var knife=0;knife.x<50;knife=knife+1){
     knife.addImage("knife.png.png")
  }
}
  
run.collide(ground)
  
if(run.isTouching(fox)){
  
}



}