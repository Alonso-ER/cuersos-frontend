/*Ejemplos de Tipos de Datos
en JavaScript*/ 

//Tipo de dato string
var nombre = "Carlos";
console.log(nombre);

//Tipo de dato númerico
var numero = 1000;
console.log(numero);

console.log(typeof numero);

//Tipo de dato objeto
var objeto= {
    nombre: "Juan",
    apellido: "Perez",
    telefono: "4779187996"
}
console.log(typeof objeto.telefono);

//Tipo de Dato boolean (true, false)
var bandera = false;
console.log(bandera)
console.log(typeof bandera)

//Tipo de dato Funcion
function miFuncion(){

}
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo")
console.log(typeof simbolo)

//Tipo de clase es una funcion
class Persona{
    constructor(nombre,apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    }
}
console.log(typeof Persona);


//Tipo Undefined
var x;
console.log(x);
console.log(typeof x);

//Null = ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);

//Arreglos

var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

let personas= [
    {
        nombre: "Alonso",
        apellido: "Arenas",
        edad:17,
        escuelas: ['JJFL', 'ESGHA', 'CBTIS']
    },
    {
        nombre: "Jhony",
        apellido: "Yañez",
        edad: 17
    }
]
console.log(personas[0].escuelas[0])