var thankyou
function preload(){
 color = loadImage ("c.jpg") 
  ty = loadImage ("—Pngtree—floral round heart wreath_3712529.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("aqua");
  image (color,0,0,width,height)
  textSize (50)
  text ("Aachi Company",width/2-100,50)
  textSize(35)
  text ("Aachi Company is owned by Agrima and Anahita Singh. Agrima Singh is the executive and co-manager of Aachi",50,100)
  text ("  Company along with Anahita Singh. Anahita Singh is the co-president of Aachi Company along with Agrima Singh.",50,160)
  text (" Aachi Company provides you with-",50,220)
  text ("(1)  Homemade delicious snacks",50,290)
  text ("(2)  Homemade crafts",50,360)
  text ("(3)	Pieces of art",50,430)
  text ("(4)	Massages",50,500)
  text ("(5)	Food stalls",50,570)
  text ("For more information call on: 8822547350",50,630)
  textSize (50)
  text ("Thank You",width/2,700)
}