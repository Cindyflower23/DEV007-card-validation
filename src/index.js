import validator from './validator.js';

const buttonText = document.getElementById("button-text")
buttonText.addEventListener("click", lunhCheck)


function lunhCheck() {
  const showNumber = document.getElementById("userNum").value;
  if (showNumber === "") {
    document.getElementById("message").innerHTML = "EL CAMPO ESTA VACIO, INGRESE UN NUMERO DE TARJETA";
    return;
  }

  if (!validarSoloNumeros(showNumber)) {
    document.getElementById("message").innerHTML = "INGRESE SOLO NUMEROS DEL 0 AL 9";
    return;
  }

  const tarjetaValida = validator.isValid(showNumber);
  if (!tarjetaValida) {
    document.getElementById("message").innerHTML = "TARJETA INVALIDA"
    return;
  }

  document.getElementById("message").innerHTML = "TARJETA VALIDA"
  document.getElementById("userNum").value = validator.maskify(showNumber)

}

const bienvenido = document.getElementById("wlc");
const userName = document.getElementById("userName");
userName.addEventListener("keyup", ShowNombreScreen);

function ShowNombreScreen(evento) {

  bienvenido.innerHTML = "Bienvenido: " + evento.target.value;
}

function validarSoloNumeros(numeral) {

  if (isNaN(numeral)) {
    return false
  
  
  
  
  } else { return true }
}


// const userName = document.querySelector("#user-Name");

// const message1 = document.querySelector("#message_1");

// const form= document.querySelector("#form");

// userName.addEventListener("input",()=>{

// message1.innerText=userName.value;

// if(userName.value.length===0){

//     message1.innerText="Ingrese su nombre";

// }
// }
































// console.log(validator);
