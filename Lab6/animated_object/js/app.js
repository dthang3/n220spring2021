let myCircle = {
    x: 50,
    y: 50,
    size: 40,
};

function create () {
    createCanvas (400,300);;
}

function draw () {
    fill (245, 215, 66);
    circle (myCircle.x, myCircle.y, myCircle.size);
}
