class Persona{
    idPersona = 0;
    nombre = 'nombreDefault';
    apellido = 'apellidoDefault';
    edad = 0;
    static contadorPersona = 0;

    constructor(nombre,apellido,edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this.idPersona = ++Persona.contadorPersona;
    }
    get idPersona(){
        return this.idPersona;
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
    get edad(){
        return this._edad
    }
    set edad(edad_){
        this._edad = edad_;
    }
    allData(){
        return this.idPersona + ': ' + this._nombre + ' ' + this._apellido + ', ' + this._edad;
    }
    toString(){
        return this.allData();
    }
}
let persona1 = new Persona('Alonso','Arenas',17);
console.log(persona1.toString());
let persona2 = new Persona('Jhony','Yañez',17);
console.log(persona2.toString())
 persona1._nombre = 'Marco Alonso';
 console.log(persona1.toString());


class Empleado extends Persona{
    idEmpleado=0;
    sueldo = '---';

    constructor(nombre,apellido,edad,sueldo,contadorPersona){
        super(nombre,apellido,edad,contadorPersona);
        this._sueldo = sueldo;
        this.idEmpleado = Persona.contadorPersona;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo_){
        this._sueldo = sueldo_;
    }
    allEmpleado(){
        return this.idEmpleado + ': ' + this._nombre + ' ' + this._apellido + ', '+ this._edad + '. Sueldo $' + this._sueldo;
    }

    toString(){
        return this.allEmpleado();
    }
}
let empleado1 = new Empleado ('Alejandro','Villegas',17,400);
console.log(empleado1._sueldo);
console.log(empleado1.toString())

class Cliente extends Persona{
    idCliente=0;
    fechaRegistro = 'Default';

    constructor(contadorPersona,date = new Date('11/04/23')){
        super(contadorPersona)
        this.idCliente = Persona.contadorPersona;
        this._fechaRegistro = date;

    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro
    }
    set fechaRegistro(fechaRegistro_){
        this._fechaRegistro = fechaRegistro_;
    }
    dataClientes(){
        return this.idCliente + ' Registro: ' + this._fechaRegistro
    }
    toString(){
        return this.dataClientes();
    }
}
let cliente1 = new Cliente('',);
console.log(cliente1._fechaRegistro);
console.log(cliente1.toString());
let cliente2 = new Cliente('');
console.log(cliente2.toString())