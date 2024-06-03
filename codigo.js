let spr;
let balaroja;
let balaverde;
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
    if (balaverde.overlap(spr)) {
        puntos ++;
        balaverde.position.y = -5000;
        balaverde.position.x = random(0, 800);
    }
    if (balaverde.position.y > 700) {
        puntos --;
        balaverde.position.y = -5000;
        balaverde.position.x = random(0, 800);
    }
    if (balaroja.overlap(spr)) {
        vidas --;
        balaroja.position.y = -100;
        balaroja.position.x = random(0, 800);
    }
    if (balaroja.position.y > 700) {
        puntos ++;
        balaroja.position.y = -100;
        balaroja.position.x = random(0, 800);
    }
    if((spr.position.x - 20) < 5){
        spr.position.x+=10;
    }
    if((spr.position.x + 20) > 795){
        spr.position.x-=10;
    }
    if (keyIsDown(LEFT_ARROW) === true) {
        spr.velocity.x = -10;
    }
    if (keyIsDown(RIGHT_ARROW) === true) {
        spr.velocity.x = 10;
    }   
    if (vidas === 0) {
        gameover();
    }
}
function balas() {
    xb = random(0, 800);
    balaroja = createSprite(xb, yb, 20, 20);
    balaroja.shapeColor = color(255, 0, 0);
    balaroja.velocity.y = 10;
    xb2 = random(0, 800);
    balaverde = createSprite(xb2, yb2, 20, 20);
    balaverde.shapeColor = color(0, 255, 0);
    balaverde.velocity.y = 10;
}
function gameover() {
    clear();
    balaroja.velocity.y = 0;
    background(220);
    textAlign(CENTER);
    textSize(100);
    fill(0,0,255);
    text("GAME OVER", width / 2, height / 2);
    textSize(70);
    fill(0);
    text(`Tus puntos fueron: ${puntos}`, width / 2, 2 * height / 3);
}