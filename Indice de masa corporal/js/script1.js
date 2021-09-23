
function clickBtncalcular(){
 
    var txtPeso = document.getElementById("txtPeso");
    var peso = txtPeso.value;
    var imc = 0;

    var txtAltura = document.getElementById("txtAltura");
    var altura = txtAltura.value;
    imc = peso / (altura * altura);
    document.getElementById("resultado").innerText = imc;
    
    if (imc<18.5){
        lectura.innerHTML = "Bajo del peso";
        document.getElementById("bp").style.backgroundColor="#3DB2FF";
    }
    else if (imc>=18.5 && imc<=24.9){
        lectura.innerHTML = "Peso Saludable";
        document.getElementById("ps").style.backgroundColor="#6ECB63";
    }
    else if (imc>=25.0 && imc<=29.9){
        lectura.innerHTML = "Sobrepeso";
        document.getElementById("sp").style.backgroundColor="#FFE194";
    }
    else if (imc>=30.0 && imc<=39.9){
        lectura.innerHTML = "Obesidad";
        document.getElementById("ob").style.backgroundColor="#FFB319";
    }
    else if (imc>=40){
        lectura.innerHTML = "Obesidad extrema";
        document.getElementById("obex").style.backgroundColor="#FF2442";
    }
    else{
        alert("Ingrese los datos correctamente");
    }
}


//FORMULARIO    
//AlmacenarLocalStorage nombre de la función

function AlmacenarLocalStorage(){
    
    //Captura de datos y almacenamiento en vairables
    let altura = document.getElementById('txtAltura').value;
    let peso = document.getElementById('txtPeso').value;
    let genero = document.getElementById('txtGenero').value;
    let edad = document.getElementById('txtEdad').value;

    if(altura==="" || peso=== "" || genero==="" || edad===""){
         alert('Ingresar todos los campos');
    }else{

        localStorage.setItem('Altura',altura);
        localStorage.setItem('Peso',peso);
        localStorage.setItem('Genero',genero);
        localStorage.setItem('Edad',edad);
        
        ObtenerLocalStorage();
    }
}

function ObtenerLocalStorage(){

    let altura = localStorage.getItem('Altura');
    let peso = localStorage.getItem('Peso');
    let genero = localStorage.getItem('Genero');
    let edad = localStorage.getItem('Edad');
    alert(`La información almacenada es 
    ${altura}
    ${peso}
    ${genero}
    ${peso}`);
}

