const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var newton, craddle;
var Newtonscraddle;
var backgroundImg,platform;
var bird, slingshot;

function preload() {
    background("white");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


   

    newton = new newton(700,320,70,70);
    craddle = new craddle(920,320,70,70);
    

    
    Newtonscraddle = new Newtonscraddle(bird.body,{x:200, y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    newton.display();
    craddle.display();
    Newtonscraddle.display();
  
   
}

function mouseDragged(){
   Matter.Body.setPosition(newton.body,{x: mouseX , y: mouseY });
   Matter.Body.setPosition(craddle.body,{x: mouseX , y: mouseY });


}

function mouseReleased(){
  newton.fly();
  craddle.fly();


}
