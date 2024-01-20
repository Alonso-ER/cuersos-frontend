/* Descripcion
Una clase es una plantilla, posee un nombre, posee atributos y metodos.
Un objeto es una instancia de una clase, Persona (Clase) tiene Karla (Objeto) y a Armando (objeto) */
/*  CON CLASES NO SE APLICA HOISTING ¿Qué es hoisting?
Esto se debe a que el intérprete de JavaScript divide la declaración 
y asignación de funciones y variables: JavaScript "hoists" o "alza" 
tus declaraciones a la parte superior de su scope (ámbito) antes de la ejecución. */
/* Ejemplo de clase
Una clase tiene un nombre, tiene atributos y metodos, ejemplo:
Clase: Persona
    atributos:
        nombre: string
        genero: char
        ocupación: string
    operaciones (metodos):
        obtenerNombre(): string
        obtenerGenero(): string
        ontenerOcupacion(): string
        modificarNombre(nombre: string )
        modificarGenero(genero: string)
        modificarOcupacion(ocupacion: string)*/
//Sintaxis para crear una clase
/*  Creando objetos a partir de la clase
class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
}
//Creando objetos a partir de la plantila
let persona1 = new Persona('Juan','Perez');
console.log(persona1);

let persona2 = new Persona('Carlos','Lara');
console.log(persona2); */

/* Get y Set para las propiedades de una clase */

class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre_){
        this._nombre = nombre_;
    }
}
let persona1 = new Persona('Juan','Perez'); 
console.log(persona1.nombre); 
persona1.nombre = 'Juan Carlos'; // Set nombre ('Juan Carlos')
console.log(persona1.nombre); //Get nombre

let persona2 = new Persona('Karla','Juarez');
console.log(persona2);