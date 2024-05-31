let spr;
let spr2;
let spr3;
let xc = 375;
let xb;
let yb = -100;
let xb2;
let yb2 = -100;
let vidas = 3;
let puntos = 0;

function setup() {
    createCanvas(800, 700);
    spr = createSprite(xc, 650, 40, 40);
    spr.shapeColor = color(0, 255, 0);
    spr.velocity.x = 0;
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
    if (vidas < 0) {
        gameover();
    }
    if (spr2.overlap(spr)) {
        vidas --;
        spr2.position.y = -100;
        spr2.position.x = random(0, 800);
    }
    if (spr2.position.y > 700) {
        puntos ++;
        spr2.position.y = -100;
        spr2.position.x = random(0, 800);
    }
    if((spr.position.x - 20) < 5){
        spr.position.x+=5;
    }
    if((spr.position.x + 20) > 795){
        spr.position.x-=5;
    }
    if (keyIsDown(LEFT_ARROW) === true) {
        spr.velocity.x = -5;
    }
    if (keyIsDown(RIGHT_ARROW) === true) {
        spr.velocity.x = 5;
    }
}
function balas() {
    xb = random(0, 800);
    spr2 = createSprite(xb, yb, 20, 20);
    spr2.shapeColor = color(255, 0, 0);
    spr2.velocity.y = 5;
    spr3 = createSprite(xb2, yb2, 20, 20);
    spr3.shapeColor = color(0, 255, 0);
    spr3.velocity.y = 5;
}
function gameover() {
    clear();
    spr2.velocity.y = 0;
    background(220);
    textAlign(CENTER);
    textSize(100);
    fill(0,0,255);
    text("GAME OVER", width / 2, height / 2);
    textSize(70);
    fill(0);
    text(`Tus puntos fueron: ${puntos}`, width / 2, 2 * height / 3);
}