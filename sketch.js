var tom , tom_sitting, tom_running , tom_collided;
var mouse , mouse_sitting , mouse_running , mouse_collided
var garden , gardenImage


function preload() {
    //load the images here
    gardenImage = loadImage("garden.png");
    tom_sitting = loadAnimation("tomOne.png");
    mouse_sitting = loadAnimation("jerryOne.png");
    tom_running = loadAnimation("tomTwo.png","tomThree.png");
    mouse_running = loadAnimation("jerryTwo.png","jerryThree.png");
    tom_collided = loadAnimation("tomFour.png");
    mouse_collided = loadAnimation("jerryFour.png")

}

function setup(){
    createCanvas(1000 , 695);
    //create tom and jerry sprites here
    garden = createSprite(500,345);
    garden.addImage(gardenImage);
    garden.scale = 1;

    tom = createSprite(920,630);
    tom.addAnimation("sitting",tom_sitting);
    tom.scale = 0.15;

    mouse = createSprite(100,630);
    mouse.addAnimation("sitting",mouse_sitting);
    mouse.scale = 0.1;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if (tom.x - mouse.x < (tom . width - mouse.width)/2) {
      tom.velocityX = 0;
      tom.addAnimation("collided",tom_collided)
      tom.changeAnimation("collided")
      mouse.addAnimation("collided",mouse_collided)
      mouse.changeAnimation("collided") 


    }


   
  //   stroke(255,155,150)   
  //   strokeWeight(20)
  //    fill(100)
  //  text(mouseX + ',' + mouseY , 10, 20)


    drawSprites();

    
}


function keyPressed(){

  //For moving and changing animation write code here
  
   if (keyCode === LEFT_ARROW) {
    tom . velocityX = -5 ;
    tom.addAnimation("running",tom_running)
    tom.changeAnimation("running")
    mouse.addAnimation("running",mouse_running)
    mouse.changeAnimation("running")
   }



}
