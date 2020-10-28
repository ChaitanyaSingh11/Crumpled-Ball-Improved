const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bg;
var ball, ground, bin;

function preload() {
    bg = loadImage("bg.jpg");
}

function setup() {
    createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;
    ball = new Paper(300, 200);
    ground = new Static(600, 590, 1200, 20);
    ground.color(106, 145, 16, 255);
    bin = new dustbin();
    right = new Static(1200, 300, 10, 600);
    right.color(0,0,0,0);
    left = new Static(0, 300, 10, 600);
    left.color(0,0,0,0);
    Top = new Static(600, 0, 1200, 20);
    Top.color(0,0,0,0);
    Engine.run(engine);
}

function draw() {
    background(bg);
    Engine.update(engine);
    ball.display();
    ground.display();
    bin.display();
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        Body.applyForce(ball.body, ball.body.position, {
            x: 80,
            y: -130
        });
    }
    if (keyCode == DOWN_ARROW) {
        Body.applyForce(ball.body, ball.body.position, {
            x: -80,
            y: -130
        })
    }
}