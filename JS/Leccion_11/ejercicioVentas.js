class Producto{
    static contadorProducto=0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre_){
        this._nombre = nombre_;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio_){
        this._precio = precio_;
    }
    toString(){
        return `ID: ${this._idProducto} Nombre: ${this._nombre}, Precio $${this._precio}.`;
    }
}

class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5
    };

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contProductosAgregados = 0;

    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if( this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos[this._contProductosAgregados] = producto;
        } else {
            console.log('No se pueden agregar mas productos');
        }
    }
    calcularTotal(){
        let totalVenta =0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }
    mostrarOrden(){
        let productosOrden ='';
        for(let producto of this._productos){
            productosOrden+= producto.toString() + ' ';
        }
        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}. Productos: ${productosOrden}`);
    }
}
let producto1 = new Producto('Jugo', 20);
console.log(producto1.toString());
let producto2 = new Producto('Chocolate', 15);
console.log(producto2.toString());
let producto3 = new Producto('Pantalon', 200);
console.log(producto3.toString());

let order1 = new Orden();
order1.agregarProducto(producto1);
order1.agregarProducto(producto3);
order1.mostrarOrden();
console.log(order1);