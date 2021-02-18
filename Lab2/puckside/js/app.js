

function setup () {
    createCanvas(400, 300);
}

function draw () {
  if (mouseX > 200)
  {
      fill(235, 64, 52);
  }  
  else 
  {
      fill(52, 101, 235);
  }
  circle(mouseX, mouseY, 30);
}