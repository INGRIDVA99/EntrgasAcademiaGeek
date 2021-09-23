window.onload = iniciar;

function iniciar(){
 var btnCalcular = document.getElementById("btnCalcular")
 btnCalcular.addEventListener("click", clickBtncalcular);
}

function clickBtncalcular(){
    var txtpesos = document.getElementById("txtpesos");
    var pesos = txtpesos.value;

    var txtdolar = document.getElementById("txtdolar");
    var pmx = 191.680;


    var CU = pesos / pmx;

    //alert(CU)
    document.getElementById("resultado").innerHTML = CU;
}