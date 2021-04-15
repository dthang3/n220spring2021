let txtName = document.getElementById("txtName");
let dvFound = document.getElementById("dvFound");

let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];

   function findObjects () {

    for (var i=0; 1 < objects.length; i++) {
        let newEL = document.createElement("div");
        newEL.innerHTML = objects[i].color + ", " + objects[i].height + ", " + objects[i].width;
        dvFound.appendChild(newEL);
    }
   }