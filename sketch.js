var dog,happyDog
var foodS,foodStock
var database
function preload()
{
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  background(46,139,87);
  dog = createSprite(250,250);
  this.image = loadImage("images/dogImg.png");
}


function draw() {  

  drawSprites();

  dog.display();
  dog.addImage(dogImg);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

}
function readStock(data) {
  foodS=data.val();
}
function writeStock(x) {
  database.ref('/').update({
    food:x
  })
}



