window.onload = iniciar;

function iniciar(){
 var btnCalcular = document.getElementById("btnCalcular")
 btnCalcular.addEventListener("click", clickBtncalcular);
}

function clickBtncalcular(){
    var txtpesos = document.getElementById("txtpesos");
    var pesos = txtpesos.value;

    var txtdolar = document.getElementById("txtdolar");
    var dolar = 3.827;


    var CU = pesos / dolar;

    alert(CU)
}