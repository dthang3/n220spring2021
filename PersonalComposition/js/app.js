function setup (){
    createCanvas(140,130);
    var x = 50;
    var y = 50;

    background (219, 219, 164);

    circle (x,y,30);
    circle (60,40,5);
    circle (61,40,1); 
    circle (40,40,5);
    circle (41,40,1);

    fill(0,0,0);
    triangle(x,y,30,60,70,60);

    fill(240, 230, 230)
    arc(50, 61, 25, 15, 0, PI);

    fill(102, 113, 115);
    stroke(106, 163, 173);
    strokeWeight(2);
    rect(20,70,60,20);

    stroke(120, 116, 83);
    fill(99, 98, 85);
    ellipse(90,80,70,70);

}