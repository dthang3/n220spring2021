let txtName = document.getElementById("txtName");
let dvResult = document.getElementById("dvResult");

 
function calC() {
    let bill = Number(txtName.value);
    let tip = bill * .15;
    let total_Bill = bill + tip;
   
    dvResult.innerHTML = "Tip: $" + tip, "","Total: $" + total_Bill;
    txtName.value = "";

}