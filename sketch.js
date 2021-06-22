var engine, world;
var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
const World = Matter.World
const Bodies = Matter.Bodies

function setup() {
  engine = Matter.Engine.create()
  world = engine.world
  createCanvas(800,800);
  ground = new Ground(width/2, 790, width, 10)

  for(var k = 0; k<= width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j<=width; j = j+50){
    plinkos.push(new Plinko(j,75));
  }
  
  for(var l = 15; l<=width - 10; l = l+50){
    plinkos.push(new Plinko(l,175));
  }

  for(var m = 55; m<=width; m = m+50){
    plinkos.push(new Plinko(m,275));
  }

  for(var n = 30; n<=width - 10; n = n+50){
    plinkos.push(new Plinko(n,375));
  }
  
}

function draw() {
  background("black"); 

  Matter.Engine.update(engine)

  if(frameCount%100 === 0){
    particles.push(new Particle(random(10, width),10));
  } 

  for (var a = 0; a < particles.length; a++) {
    particles[a].display();
  }

  for (var b = 0; b < divisions.length; b++) {
    divisions[b].display();
  }  

  for (var c = 0; c < plinkos.length; c++) {
    plinkos[c].display();
  }
  
  ground.display(); 
  drawSprites();
}