var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var randomNum ;
var stopCount;
var scoreAdd;
var gameState ;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  gameState = "play"
  randomNum = random(20,30)
  
  stopCount = 0;
  if(gameState === "play"){

  
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
  }
    
}
 
function mousePressed(){
  if(gameState === "play"){
  particles.push(new Particle(random(width/2-30, width/2+30), 10, 6));
  scoreAdd = Math.round(random(1,4));
  score= score + scoreAdd;
 
}
}


function draw() {
  background("black");
  Engine.update(engine);
  if(gameState === "play"){


  
  textSize(20)
  text("Score : "+score,20,30);

  if(score > randomNum){
    gameState = "over"
  }
 
 
  
   for (var i = 0; i < plinkos.length; i++) {     
     plinkos[i].display();      
   }
  
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
 
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  }

  if(gameState === "over"){
    for(var i = 0; i < particles.length; i++){
      if(particles[i].body.position.y > 500){
    
      fill(0, 255, 191)
      textSize(50)
      text("Game over", width/2 - 100 ,height/2);
          
    }
    }
    
  }

}
// function fixText(){
//   for (var j = 0; j < particles.length; j++) { 
//     var localVar = 0
    
//     if(particles[j].body.position.y > 400){
//       if(stopCount > 0.9){
//         localvar = localVar + 1;
//         if((localVar < 5)&&(localVar > 1)){        
//        score =  score + stopCount;
       
//         }
//       }
     
//     }
//     if(localVar > 200){
//       localVar = 0;
//     }
//     console.log(localVar)
    
//     }
// }

