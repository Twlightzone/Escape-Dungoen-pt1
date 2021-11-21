const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


let engine;
let world;

var base1,base2,base3,base4,base5,base6,base7,base8;
var player,base,MystryI;
var mystry,left,right,up;

function Preload(){
  mystry = loadImage("./Assets/MystryMark.gif")

}


function setup() {
  createCanvas(1920,969);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

MystryI = createSprite(1552,680,10,10)
//MystryI.addAnimation("Mystrey",mystry);
player = new playerS(40, 100, 50, 50);
base = new Base(960,969,10000,20)
base1 = new Base(400,800,150,20)
base2 = new Base(670,640,90,20)
base3 = new Base(381,400,20,360)
base4 = new Base(570,333,150,20)
base5 = new Base(1010,420,150,20)
base6 = new Base(1322,278,100,10)
base7 = new Base(1769,121,300,60)
base8 = new Base(1560,699,100,5)
  


up=createImg("./Assets/Up.png");
up.size(50,50);
up.position(1000,30);
up.mouseClicked(Up);


right=createImg('./Assets/Right.png')
right.size(50,50);
right.position(1050,30);
right.mouseClicked(Right)

left=createImg('./Assets/Left.png')
left.size(50,50);
left.position(950,30);
left.mouseClicked(Left)


}

function draw() {
  
  background("black");
  fill("#FFFFFF")

  text(mouseX + "," + mouseY, mouseX, mouseY)


player.show()
base.show();
base1.show();
base2.show();
base3.show();
base4.show();
base5.show();
base6.show();
base7.show();
base8.show();


  // Calling Functions



  drawSprites();
  Engine.update(engine);
}



    
     
     
  function Up(){
    Matter.Body.applyForce(player,{x:0,y:0},{x:0,y:-0.03});
  }
  function Left(){
    Matter.Body.applyForce(player,{x:0,y:0},{x:0,y:-0.03});
  }
  function Right(){
    Matter.Body.applyForce(player,{x:0,y:0},{x:0,y:-0.03});
  }
