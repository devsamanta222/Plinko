const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies


var engine,world

var division=[]

function setup() {
  createCanvas(600,800);
  engine=Engine.create()
  world=engine.world
  

  ground=new Ground(300,780,600,20)
  for(var i=0;i<=600;i=i+80){
    division.push(new Division(i,650,10,100))
  }
  
}

function draw() {
  background(0);  
  Engine.update(engine)
  for(var k=0;k<division.length;k++){
    division[k].display()

  }
  
  ground.display()
}