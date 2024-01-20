// Una función es un codigo reutilizable
// Cada función debe realizar una tarea

function miFuncion(a,b) // declaracion de la funciom
{ console.log(arguments.length);
    return a+b; }

//Llamando a la función
let resul = miFuncion(2,3);
console.log(resul);
miFuncion(4,8);
//Hoisting: Hace que la funcion siempre se declare primero, sin importar su posicion en el codigo

//Funciones de tipo expresión
//Declaración:
let suma=function(a,b){ return a+b };
resul = suma(1,2);
console.log(resul);

//Funciones SelfInvoking
//No se puede reutilizar, pues no se asigna a ninguna variable ni se le asignó un nombre
// (function(){
//     console.log('Ejecutando la funcion');
// })()

(function(c,d){
    console.log('Ejecutando la funcion: '+(c+d));
})(4,6);
console.log(typeof miFuncion);

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

//Funciones flecha
//Similar a funciones de expresion
suma=function(a,b){ return a+b };
resul = suma(1,2);
console.log(resul);
//Aquí la funcion flecha        => 
const sumaFuncionFlecha = (a,b) => a+b;
resul = sumaFuncionFlecha(3,5);
console.log(resul);