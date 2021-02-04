const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;



function preload(){
    backgroundImg = loadImage("Background.png");
}

function setup(){
    var canvas = createCanvas(1023,620);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(750,50,40,40);
    box2 = new Box(750,50,40,40);
    box3 = new Box(750,50,40,40);
    box4 = new Box(750,50,40,40);
    box5 = new Box(750,50,40,40);
    box6 = new Box(750,50,40,40);

    box7= new Box(650, 50, 40, 40);
    box8= new Box(650, 50, 40, 40);
    box9= new Box(650, 50, 40, 40);
    box10= new Box(650, 50, 40, 40);
    box11= new Box(650, 50, 40, 40);
    box12= new Box(650, 50, 40, 40);

    box13 = new Box(550, 50, 40, 40);
    box14 = new Box(550, 50, 40, 40);
    box15 = new Box(550, 50, 40, 40);
    box16 = new Box(550, 50, 40, 40);
    box17 = new Box(550, 50, 40, 40);
    box18 = new Box(550, 50, 40, 40);
    box19 = new Box(550, 50, 40, 40);
    box20 = new Box(550, 50, 40, 40);

    

    ground = new Ground(511,605,1023, 30);
    monster = new Monster(900,500, 100);

    hero= new Hero(150,150, 80);

    fly= new Fly(hero.body, {x:250, y:50})
    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    hero.display();

    monster.display();

    ground.display();

    if(monster.body.position.x>1120){
      textSize(40)
      strokeWeight(3);
      stroke("orange") ;
      fill("red")
      text("You won!! ,You Have Make The Hurdles ",200,100)
      text("Away from Hero's Path",300,150)
    }
}

function mouseDragged(){
    Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY})
}