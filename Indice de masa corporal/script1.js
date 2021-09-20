window.onload = iniciar;

function iniciar(){
 var btnCalcular = document.getElementById("btnCalcular")
 btnCalcular.addEventListener("click", clickBtncalcular);
}

function clickBtncalcular(){
    var txtPeso = document.getElementById("txtPeso");
    var peso = txtPeso.value;

    var txtAltura = document.getElementById("txtAltura");
    var altura = txtAltura.value;
    var imc = peso / (altura * altura);
    document.getElementById('resultado').innerHTML = imc;
}

imc