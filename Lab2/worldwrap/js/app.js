let x = 0;
let xspeed = 5;

function setup () {
    createCanvas(800, 600);
}

function draw () {
    x = x + xspeed;

    if (x > 800) {
        xspeed = -5;
    }
    
    fill (66, 197, 245);
    circle(x, 50, 50);
}