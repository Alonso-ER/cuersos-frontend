function miFuncion(){
    console.log('Saludos desde mi funcion');
}

miFuncion();

// fUNCION ANONIMA
// Se le da el nombre de una variable

let nombreFuncion = function (){
    console.log('Saludos desde mi función');
}

nombreFuncion();

// Funcion flecha
// Con esta forma de usar funciones, no se aplica el hoisting
// Para recordar el hoisting ir a /Leccion_09/clases.js

let miFuncionFlecha =() => {
    //La palabra function desaparece y se le añade la flecha
    console.log('Contenido de la funcion flecha')
}
miFuncionFlecha();

const nombreFuncioFlecha =() => console.log('Saludos dede mi flecha');

nombreFuncioFlecha();

const saludar = () => {
    return 'SALUDOS DESDE FUNCION FLECHA'
}

console.log(saludar());

const regresaObjeto = () => ({nombre:'Juan', apellido:'Lara'});
console.log(regresaObjeto());

const funcionaConParametros = (mensaje) => console.log(mensaje);
funcionaConParametros('Saludos');

const funcionConVariosParametros = ( op1,op2 ) => {
    let resultado = op1 + op2;
    return resultado;
};
console.log(funcionConVariosParametros(3,5));