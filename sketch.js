var MetalCan,MCanImg
var PlasticCan,PlCanImg
var EwasteCan,ECanImg
var PaperCan,PaCanImg
var GlassCan,GCanImg
var OrgCan,OCanImg
var Apple3, Bag4, Banana3, Battery5, Bottle2, Bottle41, Bottle42, Box1, Can6, Can62, Carrot3, Comp5, Egg3, Fish3, Glass2, Mirror2
var Newspaper1, Paperclip6,Phone5, Razor6, Spoon4, Tp1, Vase1, Waterheater5, Watermelon3
var Apple3Img, Bag4Img, Banana3Img, Battery5Img, Bottle2Img, Bottle41Img, Bottle42Img, Box1Img, Can6Img, Can62Img, Carrot3Img, Comp5Img, Egg3Img, Fish3Img, Glass2Img, Mirror2Img
var Newspaper1Img, Paperclip6Img,Phone5Img, Razor6Img, Spoon4Img, Tp1Img, Vase1Img, Waterheater5Img, Watermelon3Img



function preload(){
  MCanImg = loadImage("BlackCan.png")
  PlCanImg = loadImage("OrangeCan.png")
  OrgCanImg = loadImage("YellowCan.png")
  GCanImg = loadImage("GreenCan.png")
  PaCanImg = loadImage("BlueCan.png")
  ECanImg = loadImage("RedCan.png")
  Apple3Img = loadImage("Apple3.png")
  Bag4Img = loadImage("Bag4.png")
  Banana3Img  = loadImage("banana3.png")
  Battery5Img = loadImage("Battery5.png")
  Bottle2Img = loadImage("Bottle2.png")
  Bottle41Img = loadImage("bottle41.png")
  Bottle42Img = loadImage("bottle42.png")
  Box1Img = loadImage("Box1.png")
  Can6Img  = loadImage("Can6.png")
  Can62Img = loadImage("Can62.png")
  Carrot3Img = loadImage("Carrot3.png")
  Comp5Img = loadImage("Comp5.png")
  Egg3Img = loadImage("Egg3.png")
  Fish3Img = loadImage("Fish3.png")
  Glass2Img = loadImage("Glass2.png")
  Mirror2Img = loadImage("Mirror2.png")
  Newspaper1Img = loadImage("Newspaper1.png")
  Paperclip6Img = loadImage("paperclip6.png")
  Phone5Img  = loadImage("Phone5.png")
  Razor6Img = loadImage("Razor6.png")
  Spoon4Img  = loadImage("Spoon4.png")
  Tp1Img = loadImage("Tp1.png")
  Vase1Img = loadImage("vase1.png")
  Waterheater5Img = loadImage("Waterheater5.png")
  Watermelon3Img = loadImage("Watermelon3.png")
}
function setup() {
  createCanvas(1000,600);
  PaperCan = createSprite(100,500)
  PaperCan.addImage(PaCanImg)
  GlassCan = createSprite(250,500)
  GlassCan.addImage(GCanImg)
  OrganicCan = createSprite(400,500)
  OrganicCan.addImage(OrgCanImg)
  PlasticCan = createSprite(550,500)
  PlasticCan.addImage(PlCanImg)
  EwasteCan = createSprite(700,500)
  EwasteCan.addImage(ECanImg)
  MetalCan = createSprite(850,500)
  MetalCan.addImage(MCanImg)
  
}

function draw() {
  background(255,255,255); 
  background("gray") 
  drawSprites();
}