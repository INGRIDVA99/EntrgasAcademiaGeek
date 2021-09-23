window.onload = iniciar;

function iniciar(){
 var btnCalcular = document.getElementById("btnCalcular")
 btnCalcular.addEventListener("click", clickBtncalcular);
}

function clickBtncalcular(){
    var txtpesos = document.getElementById("txtpesos");
    var pesos = txtpesos.value;

    var txtdolar = document.getElementById("txtdolar");
    var lbesterlina = 5.271;


    var CU = pesos / lbesterlina;

    //alert(CU)
    document.getElementById("resultado").innerHTML = CU;
}