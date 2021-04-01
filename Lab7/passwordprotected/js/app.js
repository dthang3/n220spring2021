let txtName = document.getElementById("txtName");
let txtPass = document.getElementById("txtPass");
let dvResult = document.getElementById("dvResult");

 
function sayHello() {
    if (txtName && txtPass) {
        dvResult.innerHTML = "Success"
    } else {
        dvResult.innerHTML = "Wrong Information"
    }
   
    console.log (txtName.value);
    console.log (txtPass.value);
    txtName.value = "";
    txtPass.value = "";

}