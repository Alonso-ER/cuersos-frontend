class Empleado{
    constructor(nombre,sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: ${this.nombre}, Sueldo: $${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this.departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} Depto: ${this.departamento}`;
    }

}
function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    if (tipo instanceof Gerente){
        console.log('Es un objeto de tipo gerente');
        console.log(tipo.departamento);
    } else if (tipo instanceof Empleado){
        console.log('Es un objeto tipo empleado');
        console.log(tipo.nombre);
    } else if (tipo instanceof Object){
        console.log('Es un objeto');
    }
}

let empleado1 = new Empleado('Juan',3000);
let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');

determinarTipo(empleado1);
determinarTipo(gerente1);
