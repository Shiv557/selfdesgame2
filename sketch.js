var bg,bgImg;
var stone1,stone1Img;
var stone1Group;
var cloud;
var climber,climberImg;

var stone2,stone2Img;
var stone2Group; 
var cloudImg,cloudGroup;

var bird,birdImg;
var birdGroup; 

function preload(){
    bgImg = loadImage("background.jpg");
    stone1Img = loadImage("stone1.png");
    stone2Img = loadImage("stone2.png");
    birdImg = loadImage("bird.png");
    cloudImg = loadImage("cloud.png");
    climberImg = loadImage("climber.png");
}

function setup(){
    createCanvas(700,600);
    bg = createSprite(200,200);
    bg.addImage(bgImg);
    bg.velocityY = 0.5;
    bg.scale = 0.9;


    climber = createSprite(400,550);
    climber.addImage(climberImg);
    climber.scale = 0.4;
  
    stone1Group = new Group();
    stone2Group = new Group();
    birdGroup = new Group();
    cloudGroup = new Group();
    
}



function draw(){
    background(0);

    if (bg.y>400){
        bg.y = height/2
    }

    climber.x=World.mouseX;
    
    createStone1();
    createStone2();
    createbird();
    createcloud();
    drawSprites();
}

function createStone1(){
if (World.frameCount % 100 == 0){
    var stone1 =createSprite(Math.round(random(50, 350),40, 10, 10));
    stone1.addImage(stone1Img);
    stone1.velocityY = 9;
    stone1.scale = 0.3;
    stone1Group.add(stone1);
}
}

function createStone2(){
    if (World.frameCount % 150 == 0) {
        var stone2 =createSprite(Math.round(random(50, 350),40, 10, 10));
        stone2.addImage(stone2Img);
        stone2.velocityY = 10;
        stone2.scale = 0.3;
        stone2Group.add(stone2);
    }
    }

function createcloud(){
    if(World.frameCount % 500 == 0){
        var cloud =createSprite(Math.round(random(50, 350),40, 10, 10));
        cloud.addImage(cloudImg);
        cloud.velocityY = 5;
        cloud.scale = 0.6;
        cloudGroup.add(cloud);
    }
}    
    
function createbird(){
    if (World.frameCount % 600 == 0) {
        var bird =createSprite(Math.round(random(50, 350),40, 10, 10));
        bird.addImage(birdImg);
        bird.velocityY = 10;
        bird.scale = 0.3;
        birdGroup.add(bird);
    }
    }