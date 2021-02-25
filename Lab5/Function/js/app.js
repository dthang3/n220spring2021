// creating a global scope
let rectX =5;

function setup () {
    createCanvas (400, 300);
    
}

//draw function
function draw () {
    background(100);  
    rectX ++;
    drawRect("#eb3474", rectX, mouseY, mouseX);
}

//creating function drawRect
function drawRect (rectColor, numRays, yHeight, xHeight) {
    fill (rectColor);
    stroke (0);

    //for loops for the rect
    for (var i=0; i < numRays; i++){
        rect (xHeight, yHeight, rectX, rectX);
    }
   

}

