function setup () {
    createCanvas (1500, 1500);   
}
function draw () {
    var y = 50;
    for (i = 0; i < 25; i++) {
        var x = i*50;

        if (i % 3 === 0 && i % 5 === 0){ 
            fill (0, 46, 250);
            square(x,y,60);
        }

        else if ( i % 5 === 0) {
            fill (56, 135, 0);
            square (x, y, 50);
        }
        
        else if (i % 3 === 0 ){
            fill (144, 3, 252);
            circle (x+35, y+35, 40);
        }
       
        else {
            fill (0)
            circle (x+35, y+35, 40);
        }
    }    
}