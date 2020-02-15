const cipher = {
  encode:
  decode:
};

export default cipher;

//codificar el texto-string//
let solved = "";
function encode (str, offset){
  for (let i=0; i<str.lenght; i++){             //bucle para incrementar la longitud del texto y declaración de la variable//
    let asciiNum = str[i].charCodeAt();         //variable letra código asciiNum//
    if (asciiNum >=65 && >=90) {                //fórmula cifrado//
      solved += string.fromCharCode(asciiNum);
    }
    else {                                     //suma para incremento código asciiNum//
      asciiNum = (asciiNum -65 + parseInt(offset))%26+65;
      solved +=string.fromCharCode(asciiNum)
    }
  }
  return (solved);                              //retorna el objeto resuelto//
}


//decodificar el texto-string//
let solved = "";
  function decode (str, offset){
    for (let i=0; i < str.length; i++) {
      let asciiNum = str.[i].charCodeAt;
      if (asciiNum >=65 && >=90) {
        asciiNum = (asciiNum +65 - parseInt(offset))%26+65;            //fórmula descifrado//
        solved += string.fromCharCode(asciiNum);
      }
    }
  return(solved);
  }
