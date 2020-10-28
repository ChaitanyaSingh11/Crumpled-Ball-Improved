const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bg;
var ball, ground, r1, r2, r3;
var right, left, Top;

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
    r1 = new Static(750, 500, 20, 160);
    r1.color(255, 0, 0, 85);
    r2 = new Static(900, 500, 20, 160);
    r2.color(255, 0, 0, 85);
    r3 = new Static(825, 570, 130, 20);
    r3.color(255, 0, 0, 85);
    right = new Static(1200, 300, 10, 600);
    right.color(0, 0, 0, 0);
    left = new Static(0, 300, 10, 600);
    left.color(0, 0, 0, 0);
    Top = new Static(600, 0, 1200, 20);
    Top.color(0, 0, 0, 0);
    console.log(ball);
    Engine.run(engine);
}

function draw() {
    background(bg);
    Engine.update(engine);
    ball.display();
    ground.display();
    r1.display();
    r2.display();
    r3.display();
    right.display();
    left.display();
    Top.display();
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