class dispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada_){
        this._tipoEntrada = tipoEntrada_;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca_){
        this._marca = marca_;
    }
    toString(){
        return `Entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}
class Raton extends dispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca ){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `ID Ratón: ${this._idRaton}, ${super.toString()}`;
    }
}
class Teclado extends dispositivoEntrada{
    static contadorTeclados =0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `ID Teclado: ${this._idTeclado}, ${super.toString()}`;
    }
}
class Monitor{
    static contadorMonitores =0;
    constructor(marca,tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca_){
        this._marca = marca_;
    }
    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño_){
        this._tamaño = tamaño_;
    }
    toString(){
        return `ID Monitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}`; 
    }
}
class Computadora{
    static contadorComputadora = 0;
    constructor(nombre){
        this._idComputadora = ++Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor = [];
        this._raton = [];
        this._teclado = [];
    }
    get idCompuadora(){
        return this._idComputadora;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre_){
        this._nombre = nombre_;
    }
    agregarComponenteRaton(componenteRaton){
        this._raton.push(componenteRaton);
    }
    agregarComponenteTeclado(componenteTeclado){
        this._teclado.push(componenteTeclado);
    }
    agregarComponenteMonitor(componenteMonitor){
        this._monitor.push(componenteMonitor);
    }
    // mostrarComputadora(){
    //     let componenteOrden ='';
    //     for(let componente of this._componente){
    //         componenteOrden+= componente.toString() + `\n      `;
    //     }
    //     console.log(`    Computadora: ${this._idComputadora}: ${this._nombre}\n      ${componenteOrden}`);
    // } 
    toString(){
        return `\n Computadora: ${this._idComputadora}: ${this._nombre}\n      ${this._raton} \n      ${this._teclado} \n      ${this._monitor} \n`
    }
}
class Orden{
    static contadorOrden = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._compu=[];
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(compu){
        this._compu.push(compu);
    }
    mostrarOrden(){
        let compuOrden = '';
        for(let compu of this._compu){ 
            console.log(compu);
           // compuOrden += compu+ `\n  `;
            compuOrden += `${compu}  `
        }
        console.log(`Orden: ${this._idOrden} Computadoras: ${compuOrden}`);
    }
}


//Creación de Objetos tipo Raton
let raton1 = new Raton('USB','Logitech');
let raton2 = new Raton('Min Din','Corsair');
let raton3 = new Raton('USB','Razer');
let raton4 = new Raton('USB','Cooler Master');
console.log(raton4.toString());
//Creación de objetos tipo teclado
let teclado1 = new Teclado('Mini Din 6 Pin','DeepCool');
let teclado2 = new Teclado('USB', 'Logitech');
let teclado3 = new Teclado('Mini Din','HP');
let teclado4 = new Teclado('USB','MSI');
console.log(teclado4.toString());
//Creación de objetos tipo Monitor
let monitor1 = new Monitor('HP','21 Pulgadas');
let monitor2 = new Monitor('Dell','24 Pulgadas');
let monitor3 = new Monitor('acer','27 Pulgadas');
let monitor4 = new Monitor('Samsung','18 Pulgadas');
console.log(monitor4.toString());
//Creación de los objetos tipo Computadora
let computadora1 = new Computadora('HP');
computadora1.agregarComponenteMonitor(monitor1);
computadora1.agregarComponenteRaton(raton1);
computadora1.agregarComponenteTeclado(teclado1);

let computadora2 = new Computadora('Dell');
computadora2.agregarComponenteMonitor(monitor2);
computadora2.agregarComponenteRaton(raton2);
computadora2.agregarComponenteTeclado(teclado2);

let computadora3 = new Computadora('Asus');
computadora3.agregarComponenteMonitor(monitor3);
computadora3.agregarComponenteRaton(raton3);
computadora3.agregarComponenteTeclado(teclado3);

let computadora4 = new Computadora('Intel');
computadora4.agregarComponenteMonitor(monitor4);
computadora4.agregarComponenteRaton(raton4);
computadora4.agregarComponenteTeclado(teclado4);
console.log(computadora4.toString());

//console.log(computadora1.mostrarComputadora());
//Creacion de los objetos tipo orden
let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora3);
console.log(orden1.mostrarOrden());