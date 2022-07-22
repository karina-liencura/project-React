const formulario = document.getElementById("formulario");
const inputs= document.querySelectorAll("#formulario input");


const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido :/^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,//Formato requerido de mail.
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


function validarfor (e){
    switch (e.target.name) {
     case "nombre":
     case"apellido":
     case"correo":
     case"telefono":
     default:
         if(expresiones.name.test(e.target.value)){
         } else {
          document.getElementById(e.target.name).classList.add(formulario);

          }


    }
return false;
}