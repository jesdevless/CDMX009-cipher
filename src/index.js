import cipher from './cipher.js';

//validar alguna de las rutas
function rutas() {
  const rutas = ["ruta1", "ruta2", "ruta3"];
  const tuPunto = document.getElementById('tu-punto');


//determinar valor (offset) en las rutas
    if (offset == 0) {
      output.textContent = "tu-punto";
    }
    else {
 let puntoCifrado = cipher.encode(offset);
 let puntoDescifrado = cipher.decode(puntoUno, offset * 5);
 output.textContent = nombreCifrado + " (" + nombreDescifrado + ")";
}

//dirección puntos de encuentro
  const puntoUno = Mercado Pensador Mexicano Calle Nte. 172, Pensador Mexicano, Venustiano Carranza
  const puntoDos = Biblioteca Vasconcelos Eje 1 Nte. S/N, Buenavista, Cuauhtémoc
  const puntoTres = Starbucks Xola 1159, Narvarte Poniente, Benito Juárez


//dar click (evento onclick)para obtener punto de encuentro
document.getElementById("ruta1").addEventListener("click", displayRuta);
document.getElementById("ruta2").addEventListener("click", displayRuta);
document.getElementById("ruta3").addEventListener("click", displayRuta);


function displayRuta() {
  document.getElementById("tu-punto").innerHTML = tuPunto();
}



function tuPunto(){
  //dirección descifrada en input
  let result = puntoDescifrado
  document.getElementById("tu-punto").innerHTML = result;
}


//ingresar dirección en input para cifrado

//validar el input de dirección obligatorio
valor = document.getElementById("campo").value;
if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
  return false;
}


//obtención del código cifrado


console.log(cipher);
