let bclr = 'white';
let txtclr = 'red';
let showText = false;
let x = -700;
let spaceText = true
let confetiPieces = []
let angle = 0;



function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() {
background(bclr);

  if (spaceText) {
    textSize(40);
    textFont("Comic Sans MS");
    fill(0);
    text("Hit Space for a Suprise Talon",110,400);
  }
  
if (showText) {
    greet(); 
    x = x+5;
  }
if (x > 170){

  x=170
background ('white')
    textSize(40);
    textFont("Comic Sans MS");
  fill(0)
 text ("Press x for some confeti",160,400)

  
}
  
  for (let n = 0; n < confetiPieces.length; n++) {
    confetiPieces[n].confetiSpin();
    confetiPieces[n].confetiFall();

}
  

}

function flash () {
bclr=('red');
  setTimeout(flash2,100);
}

function flash2 () {
  bclr=('white');
  setTimeout(flash,100);
}

  function txtclrchanger () {
  if (bclr == 'red'){
    txtclr=('white');
  }
  else {
    txtclr=('red');
  }

}

function greet () {

  textFont("Comic Sans MS");
    txtclrchanger();
  fill(txtclr);
  textSize(40);
  text("Greetings and salutations", x, 300);

}

function keyPressed () {
  if (keyCode == 32){
    flash2();
    showText = true;
    spaceText = !spaceText
  }
  if (keyCode == 88) {
  for (let i = 0; i < 290; i++) {
    let z = new confeti(random(width),random(-30,-250),random(1,255),random(1,255),random(1,255), 0,random(1.3,2), random(-2,2));
  confetiPieces.push(z);
  print(confetiPieces);
}
}
}

class confeti {
  
  constructor(x, y, r,g,b, rotation, fallrate, rotationSpeed) {
    this.x = x;
    this.y = y
    this.r = r;
    this.g = g;
    this.b = b;
    this.rotation = rotation;
    this.fallrate = fallrate;
    this.rotationSpeed = rotationSpeed;
  }
  
  drawConfeti () {
    noStroke();
    fill(this.r, this.g, this.b);
    rect(this.x,this.y,20,5); 
  }

  confetiFall () {
    this.y += this.fallrate;
    
  }
  
  confetiSpin () {
    let confetix = this.x;
    let confetiy = this.y;
    
    push();
    translate(confetix,confetiy)
    rotate(this.rotation); 
    rectMode(CENTER);
    noStroke();
    fill(this.r, this.g, this.b);
    rect(0,0,20,5); 
    pop();
    
if (this.rotation <= -40 || this.rotation >= 40) {
    this.rotationSpeed *= -1; 
}
this.rotation += this.rotationSpeed;

  }
}  
  