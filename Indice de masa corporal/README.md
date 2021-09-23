
//css//
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');

body{
    font-family: 'Roboto Condensed', sans-serif;
}


body{
    background-color:rgb(104, 226, 200);
}

button {
    background-color: #d65b21;
    color: #ffffff;
    margin: 2rem 0;
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 1.2rem;
}
header{
    background-color: #110a52;
    color: #ffffff;
    margin: 2rem 0;
    padding: 1.4rem;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 1rem;
    width: 30%;
    text-align: center;
}
main{
    background-color: #123456;
    color: #ffffff;
    margin: 2rem 0;
    padding: 1.4rem;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 1rem;
    width: 30%;
    text-align: center;
}
input{
    background-color: #c4c4c4;
    color: #ffffff;
    margin: 2rem 0;
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 0.8rem;
}
select{
    background-color: #123456;
    color: #ffffff;
    margin: 2rem 0;
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 0.8rem;
}
div.imagen{
    margin: 10px;
    box-shadow: 2px 4px 8px rgb(70, 70, 70);
    width: 300px;
    margin: 1 auto;
    display: inline-block;
    margin-left: 100px;
    margin-top: 10px;
    font-size: 18px;
    font-weight: 300;
}

//HTML/--------------------------------------------------------------------------------------------------------------------------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>calculadora de IMC </title>
</head>
<body>



<header> <h1>Calculadora de IMC </h1></header>
<div class="container1">
<main>
 Elija su genero
    <select name="genero" id="gender" >
        <option value="0">Genero</option>
        <option value="M">Mujer</option>
        <option value="H">Hombre</option>
    </select><br>

   <label>Altura:</label> <input id="txtAltura" type="text"/>  M <br>
   <label>Peso:</label> <input id="txtPeso" type="text"/>  kg <br>
   <label>Edad:</label> <input id="txtEdad" type="text"/> <br>

   <button id="calcular" onclick="clickBtncalcular()">calcular</button> 
    <br> su resultado es: 
    <div class="resultado" id="resultado"> </div>
</main>   


<aside>
<div class="imagen">
    <img src="https://lh3.googleusercontent.com/u1HdRKLYomYAvKGisd8J2-5NnRzuQA0O51f4LfWdUfsVX0EONo5jHUw7NI92txyObsVMw29hH7GO5HO6b7DaedmpjZHg9s1nQoUYr-1q_ExhIMIvneLCbl-rS_p6aaghkvdXZQ"></img>
</div>
</aside>
</div>



    <script src="./script1.js"></script>
</body>
<link rel="stylesheet" href="style1.css">
</html>
--------------------------------------------------------------------------------------------------------------------------
//form.addEventListener('salida',
 

 function AlmacenarLocalStorage(){

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
 //)

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
-------------------------------------------------------------------------------------------------------------------------
<!-- calculadora -->
Elija su genero
          <select name="genero" id="txtGenero" >
              <option value="0">Genero</option>
              <option value="M">Mujer</option>
              <option value="H">Hombre</option>
          </select><br>
      
         <label>Altura:</label> <input id="txtAltura" type="number"/>  M <br>
         <label>Peso:</label> <input id="txtPeso" type="number"/>  kg <br>
         <label>Edad:</label> <input id="txtEdad" type="number"/> <br>
         <button id="calcular" type="button" onclick="clickBtncalcular(), AlmacenarLocalStorage();">Calcular</button><br><br>
          <a href="#" class="btn btn-primary">Go somewhere</a>
--------------------------------------------------------------------------------------------
<p>IMC: <span id="resultado"></span></p>
    <p>Usted tiene: <span id="lectura"></span></p>
---------------------------------------------
 <!-- TABLA -->
    <table border width="80%" heigth="600px" id="tableP">
    <tr align="center" id="Inicio">
        <th>RANGO</th>
        <th>INDICE DE MASA CORPORAL</th>
    </tr>
    <tr id="bp">
        <td>Por debajo de 18.5</td>
        <td>Delgadez muy severa</td>
    </tr>
    <tr id="ps">
        <td>18.5 a 24.9</td>
        <td>Peso Saludable</td>
    </tr>
    <tr id="sp">
        <td>25.0 a 29.9</td>
        <td>Sobrepeso</td>
    </tr>
    <tr id="ob">
        <td>30.0 a 39.9</td>
        <td>Obesidad</td>
    </tr>
    <tr id="obex">
        <td>Más de 40</td>
        <td>Obesidad extrema</td>
    </tr>

</table>

