let bclr = 'white';
let txtclr = 'red';
let showText = false;
let x = -700;
let spaceText = true
let confetiPieces = []
let balls = []
let angle = 0;
let colors = [
 'rgb(204, 0, 0)',
 'rgb(220, 20, 60)',
 'rgb(255, 182, 193)',
 'rgb(255, 102, 102)',
 'rgb(128, 0, 32)',
 'rgb(255, 160, 122)',
 'rgb(230, 230, 250)',
 'rgb(255, 127, 80)',
 'rgb(148, 0, 211)',
 'rgb(224, 176, 255)'
]




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
      text("(please don't spam)",200,500)
  
}
  
  for (let n = 0; n < confetiPieces.length; n++) {
    confetiPieces[n].confetiSpin();
    confetiPieces[n].confetiFall();

}
  
    for (let n = 0; n < balls.length; n++) {
    balls[n].drawBall();
    balls[n].moveBall();

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
    let z = new confeti(random(width),random(-30,-250),0, 0,random(1.3,2), random(-2,2));
  confetiPieces.push(z);
  print(confetiPieces);
}
}
    if (keyCode == 66){
    for (let n = 0; n < 100; n++){
  let z = new Ball(
    100, 100,random(0, 255),random(0, 255),random(0, 255),random(0, 10),random(0, 10),50,50);

  balls.push(z);
  print(balls);
}
  }
}

class confeti {
  
  constructor(x, y, color, rotation, fallrate, rotationSpeed) {
    this.x = x;
    this.y = y
    this.color =   floor(random(0,colors.length));
    this.rotation = rotation;
    this.fallrate = fallrate;
    this.rotationSpeed = rotationSpeed;
  }
  
  drawConfeti () {
    noStroke();
    

    
    fill(colors[this.color]);
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
    
    fill(colors[this.color]);
    rect(0,0,20,5); 
    pop();
    
if (this.rotation <= -40 || this.rotation >= 40) {
    this.rotationSpeed *= -1; 
}
this.rotation += this.rotationSpeed;

  }
}  

class Ball {
  constructor(x, y, r, g, b, speedY, speedX, diameter, diameter2) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
    this.speedY = speedY;
    this.speedX = speedX;
    this.diameter = diameter;
    this.diameter2 = diameter2;
  }

  drawBall() {
    stroke(0);
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.diameter, this.diameter2);
  }

  moveBall() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > width || this.x < 0) {
      this.speedX = -this.speedX;
    }

    if (this.y > height - 25 || this.y < 0 + 25) {
      this.speedY = -this.speedY;
    }
  }
}