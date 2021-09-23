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

    //alert(CU)
    document.getElementById("resultado").innerHTML = CU;
}
/////////////////////////////////////////////////////////////////////////////
//Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);

//Declaramos variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//Evento para mostrar y ocultar menú
    function open_close_menu(){
        body.classList.toggle("body_move");
        side_menu.classList.toggle("menu__side_move");
    }

//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 760){

    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function(){

    if (window.innerWidth > 760){

        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (window.innerWidth < 760){

        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }

});