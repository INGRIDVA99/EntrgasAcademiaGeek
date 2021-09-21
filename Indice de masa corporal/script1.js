

//function iniciar(){
 //var btnCalcular = document.getElementById("btnCalcular")
 //btnCalcular.addEventListener("click", clickBtncalcular());
//}
var x = clickBtncalcular();
function clickBtncalcular(){
    alert("se esta ejecutando");
    var txtPeso = document.getElementById("txtPeso");
    var peso = txtPeso.value;
    var imc = 0;

    var txtAltura = document.getElementById("txtAltura");
    var altura = txtAltura.value;
    imc = peso / (altura * altura);
    document.getElementById("resultado").innerText=imc;
    return imc;
}
document.getElementById("resultado").innerText=x;
