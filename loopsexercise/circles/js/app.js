

function setup () {
    createCanvas(400, 300);
}

function draw(){
    background(235, 233, 225);
    noFill();

    for (var i = 0; i < 30; i++) {
        circle(200, 150, i * 5);
    }
    console.log("Afterwards: "+ i);
} 

