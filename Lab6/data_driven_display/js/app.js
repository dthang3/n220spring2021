let myRect = {
    width: 0,
    height: 100,
    color: "#0fd4d0",
    xposition: 50,
};

function setup () {
    createCanvas(400,300);
    background(11);
}

function draw () {
    fill (myRect.color);
    myRect.width += 1;
    rect(myRect.width,myRect.height, myRect.xposition, 50);
}