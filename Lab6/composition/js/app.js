let myCircle = {
    x: 50,
    y: 0,
    size: 20,
    update: function () {
        fill (252, 19, 3;
        this.y +=.3;
        circle (this.x, this.y, this.size);
    
    }
};

function create () {
    createCanvas (1000,1000);
    background (100);
}

function draw () {
    myCircle.update();
}
