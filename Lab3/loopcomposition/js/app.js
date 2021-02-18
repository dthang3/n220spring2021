
function setup(){
    createCanvas (480, 120);
    strokeWeight (3);
}
function draw (){
    var x = 0;

    background(168, 72, 50);
    for (i = 0; i < 9; i++) {
        fill (182, 186, 48);
        rect (x, 60, 50, 30);
        x += 60;
    }
}