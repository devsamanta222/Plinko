const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies


var engine,world

var division=[]
var plinko=[]
var particle=[]

function setup() {
  createCanvas(600,600);
  engine=Engine.create()
  world=engine.world
  

  ground=new Ground(300,580,600,20)
  for(var i=0;i<=600;i=i+80){
    division.push(new Division(i,500,10,150))
  }

  for(var i=0;i<=600;i=i+60){
    plinko.push(new Plinko(i,350,10))
  }

  for(var i=30;i<=600;i=i+60){
    plinko.push(new Plinko(i,250,10))
  }

  for(var i=0;i<=600;i=i+60){
    plinko.push(new Plinko(i,150,10))
  }

  for(var i=30;i<=600;i=i+60){
    plinko.push(new Plinko(i,50,10))
  }

  
  
}

function draw() {
  background(0);  
  Engine.update(engine)
  for(var k=0;k<division.length;k++){
    division[k].display()

  }

  for(var i=0;i<plinko.length;i++){
    plinko[i].display()
  }

  if(frameCount%90===0){
   particle.push(new Particle(random(0,600),10,10))
  }

  for(var i=0;i<particle.length;i++){
    particle[i].display()
  }

 
  
  ground.display()
}