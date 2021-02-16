let xPositions = [ 0,0,0,0,0,0,0,0];
let yPositions = [ 0,0,0,0,0,0,0];

function setup () {
    createCanvas (400, 300);
    fill (255, 12, 129);
}

function draw () {
    background (50);

    xPositions.push (mouseX);
    xPositions.shift();
    yPositions.push (mouseY);
    yPositions.shift();
    

    for (var i = 0; i < 10; i++) {
        circle ( xPositions[i], yPositions[i], 20);
    }
}