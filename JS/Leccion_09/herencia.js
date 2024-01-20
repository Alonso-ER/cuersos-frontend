//Las clases hijas heredan las caracteristicas de las clases padre <EXTENDS>
// Revisar Diagramas UML (Unified Modeling Language)
/* La clase OBJECT es la clase padre de todas las clases en JS
    CLASS PERSONA EXTENDS OBJECT{} 
    La clase Object tiene metodos los cuales se le heredan a todas
    sus clases hijas, incluyendo "PROTOTPE y todos sus metodos"*/
// Static: metodos para asociar a una clase exclusivamente
//Clase padre
class Persona{

    static contadorPersona = 0; //Atributo de la clase

    email= 'default@email.com'; //Atributo de los objetos

    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorPersona < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersona;
        } else {
            console.log('Se han superado el maximo de objetos permitidos');
        }
        
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre_){
        this._nombre = nombre_;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido_){
        this._apellido = apellido_;
    }
    //Herencia de metodos
    nombreCompleto(){
        return this.idPersona + ', ' + this._nombre + ' ' + this._apellido;
    }
    // Sobreescritura del metodo (toString) en la clase padre
    toString(){
        /* Se aplica polimorfismo (Multiples formas en tiempo de ejecución) 
        en la llamada al metodo nombreCompleto. El metodo que se ejecuta depende si
        es una referencia de tipo padre o de tipo hijo. */
        return this.nombreCompleto();
    }
    //Aplicación de static
    static saludar(){
        console.log('Saludos desde el metodo static');
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}

//Clase hija: Herencia de metodos
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre,apellido); //llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento_){
        this._departamento = departamento_;
    }
    /* Sobreescritura: Desde la clase hija se modifica el comportamiendo 
        del metodo (nombreCompleto) de la clase padre */
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
        /* Palabra SUPER para volver a llamar el metodo
            de la clase padre y solo modificar el departamento */
    }
}
let persona1 = new Persona('Juan','Perez'); 
console.log(persona1.toString()); 
let empleado1 = new Empleado('Maria','Jimenez','Sistemas');
console.log(empleado1.toString());
let persona2 = new Persona('Karla','Ramirez');
console.log(persona2.toString());
let persona3 = new Persona('Mariano', 'Lara');
let persona4 = new Persona('Armando','Toledo');
let persona5 = new Persona('Laura','Quintero');
console.log(persona5.toString());
/*  console.log(empleado1.nombre);
    Se hereda el metodo de la clase padre a la clase hija
console.log(empleado1.nombreCompleto()); // Metodo ya sobreescrito
    toString: Metodo heredado de la clase object.protoype 
console.log(persona1.toString());
console.log(empleado1.toString());
    persona1.saludar(); Esto no es posible porque un metodo estatico se asocia con una clase, NO con los objetos
Persona.saludar();
    Sin embargo, a un metodo estatico si es posible pasarle como argumentos un objeto
Persona.saludar2(persona1);
    Llamando al metodo static desde la clase hija (empleado)
Empleado.saludar(); 
Empleado.saludar2(empleado1); 
console.log(Persona.contadorPersona);
console.log(persona1.email); 
console.log(empleado1.email); */

console.log(Persona.contadorPersona);

console.log(Persona.MAX_OBJ);

persona1.nombre = 'Juan Carlos'; // Set nombre ('Juan Carlos')
console.log(persona1.nombre); //Get nombre


