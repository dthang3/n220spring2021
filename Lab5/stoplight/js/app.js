let light = ["#f54242","#f2f542","#81f542"];

function setup () {
    createCanvas (100, 200);
    background (100);

    for (var i = 0; i < light.length; i ++){
        fill (light [i]);
        circle (50, 40 + 63 * i , 30);
    }
}