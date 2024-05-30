let spr;
let xc = 375;
let xb;
let yb = -20;
let vidas = 3;
let puntos = 0;

function setup() {
    createCanvas(800, 700);
    spr = createSprite(xc, 370, 40, 40);
    spr.shapeColor = color(0, 255, 0);
    spr.velocity.x = 2;
    balas();
}
function draw() {
    background(220);
    fill(0);
    textSize(20);
    text(`Vidas: ${vidas}`, 700, 70);
    text(`Puntos: ${puntos}`, 700, 50);
    fill(0, 255, 0);
    noStroke();
    drawSprites();
    if (keyIsDown(LEFT_ARROW) === true) {
        if((spr.position.x - 20) < 0){
            spr.position.x+=10;
        } else {
            spr.velocity.x = -2;
        }
    }
    if (keyIsDown(RIGHT_ARROW) === true) {
        spr.velocity.x = 2;
    }
}
function balas() {
    xb = random(0, 800);
    fill(255, 0, 0);
    square(xb, yb, );
}