

function setup (){
    createCanvas(300,300)
}

function draw (){
    var x = 0;
    var y = 0;
    
    for(i=0; i < 4; i++){
        for (d=0; d < 3; d++) {
            fill(235, 64, 52);
            rect (x,y, 50, 50);
            x += 55;  
        }
                     
    }
}


