let xc = 375;
let xb;
let yb = -20;
let vidas = 3;
let puntos = 0;

function setup() {
    createCanvas(800, 700);
    background(220);
    balas();
}
function draw() {
    fill(0);
    textSize(20);
    text(`Vidas: ${vidas}`, 700, 70);
    text(`Puntos: ${puntos}`, 700, 50);
    fill(0, 255, 0);
    noStroke();
    square(xc, 600, 50);
    if (keyIsDown(LEFT_ARROW) === true) {
        if (xc < 0) {
            xc += 5;
        } else{
            xc -= 5;
        }
        clear();
        background(220);
        fill(0, 255, 0);
        noStroke();
        square(xc, 600, 50);
        fill(0);
        text(`Vidas: ${vidas}`, 700, 70);
        text(`Puntos: ${puntos}`, 700, 50);
    }
    if (keyIsDown(RIGHT_ARROW) === true) {
        if (xc > 750) {
            xc -= 5;
        } else {
            xc +=5
        }clear();
        background(220);
        fill(0, 255, 0);
        noStroke();
        square(xc, 600, 50);
        fill(0);
        text(`Vidas: ${vidas}`, 700, 70);
        text(`Puntos: ${puntos}`, 700, 50);
    }
}
function balas() {
    xb = random(0, 800);
    fill(255, 0, 0);
    square(xb, yb, );
}