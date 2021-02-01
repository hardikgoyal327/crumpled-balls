
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ball,dustbin
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground=new Ground(400,680,800,20)
   ball=new BaseClass(250,350) 
   dustbin=new dustbinclass(650,600) 
      

	Engine.run(engine);
  
}


function draw() {
  background("white");
  ground.display();
  ball.display();
  dustbin.display();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{
			x:10,y:-10
		})
	}
}


