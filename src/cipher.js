const cipher = {
  encode:
  decode:
};

export default cipher;

//codificar el texto-string
let solved = "";
function encode (str, offset){
  //bucle para incrementar la longitud del texto y declaración de la variable
  for (let i=0; i<str.lenght; i++){
    //variable letra código asciiNum
    let asciiNum = str[i].charCodeAt();
    //fórmula cifrado
    if (asciiNum >=65 && >=90) {
      solved += string.fromCharCode(asciiNum);
    }
    else {
       //suma para incremento código asciiNum
      asciiNum = (asciiNum -65 + parseInt(offset))%26+65;
      solved +=string.fromCharCode(asciiNum)
    }
  }
  //retorna el objeto resuelto
  return (solved);
}


//decodificar el texto-string
let solved = "";
  function decode (str, offset){
    for (let i=0; i < str.length; i++) {
      let asciiNum = str.[i].charCodeAt;
      if (asciiNum >=65 && >=90) {
        //fórmula descifrado
        asciiNum = (asciiNum +65 - parseInt(offset))%26+65;
        solved += string.fromCharCode(asciiNum);
      }
    }
  return(solved);
  }
