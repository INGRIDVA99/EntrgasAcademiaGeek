import { data } from "../data/data.js";

const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
const items = document.getElementById('items');

document.addEventListener('DOMContentLoaded', () =>{
    cargarData(data);
})

//funcion para cargar data //
const cargarData = data =>{
    console.log(data);
    data.forEach(anime => {

        //desestructuracio de objetos//
     const {id,name,imagen} = anime;
        templateCard.querySelector('h5').textContent = name;
        templateCard.querySelector('img').setAttribute('src',imagen);

        const clone = templateCard.cloneNode(true);

        fragment.appendChild(clone);

    });

    items.appendChild(fragment);

}
//FORMULARIO    
//AlmacenarLocalStorage nombre de la función

form.addEventListener('submit', function AlmacenarLocalStorage(){
    
    //Captura de datos y almacenamiento en vairables
    let inputName = document.getElementById('inputName').value;
    let email = document.getElementById('email').value;
    let gender = document.getElementById('gender').value;
    let msm = document.getElementById('msm').value;

    if(inputName==="" || email=== "" || gender==="" || msm ===""){
         alert('Ingresar todos los campos');
    }else{

        localStorage.setItem('Nombre',inputName);
        localStorage.setItem('Email',email);
        localStorage.setItem('Género',gender);
        localStorage.setItem('Mensaje',msm);
        
        ObtenerLocalStorage();
    }
})

function ObtenerLocalStorage(){

    let nombre = localStorage.getItem('Nombre');
    let email = localStorage.getItem('Email');
    let genero = localStorage.getItem('Género');
    let mensaje = localStorage.getItem('Mensaje');
    alert(`La información almacenada es 
    ${nombre}
    ${email}
    ${genero}
    ${mensaje}`);
}