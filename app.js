// Creo un prompt, para preguntarle al usuario la palabra que desea cifrar o descifrar
var word = prompt('¿qué palabra desea cifrar o descifrar?');
// Creo una función, que contenga como argumentos un str
  // (que será la cadena que queremos cifrar) y un displacement
function cipher (str, displacement){
    var letter = '';
    // Realizamos una iteración, mediante for, que se cumpla cuando str es un String
    for (var i = 0; i < str.length; i++){
      letter = letter + String.fromCharCode((str.charCodeAt(i)+7+displacement)%26 + 65);
    }
    return letter;
}
alert (cipher('maria', 33);
