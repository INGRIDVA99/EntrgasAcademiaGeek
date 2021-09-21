
function clickBtncalcular(){
 
    var txtPeso = document.getElementById("txtPeso");
    var peso = txtPeso.value;
    var imc = 0;

    var txtAltura = document.getElementById("txtAltura");
    var altura = txtAltura.value;
    imc = peso / (altura * altura);
    document.getElementById("resultado").innerText=imc;
    
}

