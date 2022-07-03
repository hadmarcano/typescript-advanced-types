// hadcodes => [H,a,d,c,o,d,e,s] => string => string[]
// [H,a,d,c,o,d,e,s] => Hadcodes => string[] => string


 // De esta manera es que la sobrecarga de funciones puede inferir en nuestra respuesta.
 // A esto se le llama Tipado estricto
function parseStr(input: string): string[];
function parseStr(input: string[]): string;

// function parseStr(input: unknown): unknown {
function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const responseArray = parseStr('Hadcodes');
// const responseArray = parseStr(['H', 'a', 'd', 'c', 'o', 'd', 'e', 's']);

// Con sobrecarga de funcion:
responseArray.reverse();

// Sin sobrecarga de funcion:
// if (Array.isArray(responseArray)) {
//   responseArray.reverse();
//   console.log('responseArray => hadcodes', responseArray);
// }

// Con sobrecarga de funcion:
// responseArray.toLowerCase();

// Sin sobrecarga de funcion:
// if (typeof responseArray === 'string') {
//   responseArray.toLowerCase();
//   console.log('responseArray => [H,a,d,c,o,d,e,s]', responseArray);
// }
