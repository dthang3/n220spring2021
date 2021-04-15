let txtName = document.getElementById ("txtName");
let dvFound = document.getElementById ("dvFound");
let dvAverage = document.getElementById ("dvAverage");

function findAverage() {

    var stringVals = txtName.value;
    let myArray = stringVals.split(",");


    //let myArray = [2, 4, 5, 8, 10];
    //reduce arry
    
    let sum = 0;

    for (let i =0; i < myArray.length; i++) {
        sum += Number(myArray[i]);
    }
    let avg = sum / myArray.length;
    
    dvAverage.innerHTML = "Average: " + avg;
    dvFound.innerHTML = "Sum: " + sum;

    txtName.value = " ";
    
}