
let x = 0;
let xspeed = 2;
let colors = ["#E40017", "#FF75A0", "A1CAE2", "#845EC2", ]

function setup () {
    createCanvas(410, 330);
    background (219, 19, 4);
}
function draw () {
    x = x + xspeed;

    if (x > 300) {
        xspeed = -5;
    }

    for (var i = 0; i < colors.length; i++) {
        fill (colors[i]);
        ellipse( x * i, 90 * i, i, x);
    } 
}
