
var box1;
function setup() 
{
  createCanvas(400, 400);
  //craeting object from box class
  box1 = new Box(200,100,70,70)
}

function draw() 
{
  background(220);
  box1.display();
  box1.speed(3);

}

