const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world, engine;

var ground;

var divider = [];
var plinko = [];
var particle = [];

var dividerHeight = 300;

function setup(){
    createCanvas(450,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, 790, width, 20);
    

}
function draw(){
    background(0);
    Engine.update(engine);

    ground.display();

    //divider
    for (var d = 0; d <= width; d = d + 80){
        divider.push(new Div(d, height-dividerHeight/2, 15, dividerHeight));
    }

    for (var d = 0; d < divider.length; d++){
        divider [d].display();
    }

    //plinko
    for (var p = 40; p <= width; p = p+65){
        plinko.push(new Plinko(p,75));
    }
    for (var p = 15; p <= width-10; p = p+65){
        plinko.push(new Plinko(p,175));
    }
    for (var p = -10; p <= width-20; p = p+65){
        plinko.push(new Plinko(p,275));
    }
    for (var p = -35; p <= width-30; p = p+65){
        plinko.push(new Plinko(p,375));
    }

    for (var p = 0; p < plinko.length; p++){
        plinko [p].display();
    }

    //particle
    if (frameCount%60===0){
        particle.push(new Particle(random(width/2-20, width/2+20), 10, 10));
    }
    for (var p = 0; p < particle.length; p++){
        particle[p].display();
    }
   
    drawSprites();
}


