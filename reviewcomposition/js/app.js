//creating array 
var circleColor = ["#fcba03", "#b1acbd", "#b35444"];

function setup () {
    createCanvas(800, 800);
}
function draw () {
    background (circleColor[1]);
    
    //creating loops
    for (i = 0; i < 400; i++) {
        circle(mouseX , mouseY * i , 5 * i);
    }
                
//creatng an if statements 
   if (mouseX < 400) {
    fill (circleColor[2]);
    } else if (mouseX > 400) {
    fill (circleColor[0]);
    }
}