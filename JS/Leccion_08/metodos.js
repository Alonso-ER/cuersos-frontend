// Metodos en JS
/*   Metodo Get: Antes
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre  + ' ' + this.apellido
    }
}

console.log(persona.nombreCompleto());
Despues
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    get nombreCompleto(){
        return this.nombre  + ' ' + this.apellido
    }
}
console.log(persona.nombreCompleto);   */

/*  Metodo Set
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang( lang ){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre  + ' ' + this.apellido
    }
}
console.log(persona.nombreCompleto);
console.log(persona.lang);
persona.lang = 'en';
console.log(persona.lang);  */

//Metodo Funcion Constructor de Objetos
/*
function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}
 //  Uso de Prototype 
Persona.prototype.tel='44332211';


let padre = new Persona ('Juan', 'Perez', 'jperez@mail.com');
padre.tel = '11223344'
console.log(padre.tel);

let madre = new Persona('Laura','Quintero', 'lquintero@mail.com');
madre.tel ='66778899'
console.log(madre.tel); */

/*  Otras formas de crear objetos


let miObjeto = new Object();
let miObjeto2 = {};
//No es necesario usar "new" pero es la sitaxis mas formal
//Aunque es mas recomendando usar la sitaxis simplificada
let miCadena = new String('Hola');
let miCadena2 = 'Hola'

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean2 = false

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion1 = function(){}; */
/*   Metodo call permte llamar a un objeto desde otro objeto  
let persona1={
    nombre:'Juan',
    apellido:'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre+ ' ' + this.apellido + ', ' + tel;
    }
}
let persona2= {
    nombre: 'Carlos',
    apellido: 'Lara'
}
//Uso de call para usar el metodo
//de persona1.nombreCompleto con los datos del persona2
console.log(persona1.nombreCompleto());

console.log(persona1.nombreCompleto.call(persona2, 'Ing','44332211')); */

/* Metodo Apply */
//Es parecido al call pero con una diferencia al pasar parametros

let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre  + ' ' + this.apellido + ', ' + tel
    }
}
let persona2= {
    nombre: 'Carlos',
    apellido: 'Lara'
}
console.log(persona1.nombreCompleto('Lic', '55443322'));

let arreglo = ['Ing', '11223344'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));