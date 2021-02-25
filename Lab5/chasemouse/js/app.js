var x = 20; 
var y = 20;

function setup () {
    createCanvas (600, 600);
    background(100);
}

function distance(targetx, targety, ballx, bally){
    let xdifferent = targetx - ballx;
    let ydifferent = targety - bally;
    return Math.sqrt((xdifferent*xdifferent) + (ydifferent*ydifferent))
}

function draw () {
    background(100);
    fill ("#eb4034");
    
    if (distance(mouseX, mouseY, x, y)<7) {
        fill("#eb4034");
    }
    circle(x, y, 40, 60);

    if (mouseX > x){
        x = x + 3;
    }
    if (mouseX < x){
        x = x - 3;
    }
    if (mouseY > y){
        y = y+ 3;
    }
    if (mouseY < y ){
        y = y - 3;
    }
}

