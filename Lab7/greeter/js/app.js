let txtName = document.getElementById("txtName");
let dvResult = document.getElementById("dvResult");

 
function sayHello() {
    //let bill = Number(txtName.value);
    //let tip = bill * .15;
    //let total_Bill = bill + tip;
   
    console.log ("Hello " + txtName.value);
    txtName.value = "";

}