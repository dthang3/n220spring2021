let colors = ["#FFEFA1", "#6DDCCF", "#A1CAE2", ];

function setup (){
    createCanvas (400,300);
    //background (0,0,0);
    
    for(var i = 0; i < colors.length; i++) {
        fill (colors[i]);
        rect(130 * i, 0, 130, 300);
        //rect(130, 0, 130, 300);
        //rect(260, 0, 140, 300);
    }
}
    