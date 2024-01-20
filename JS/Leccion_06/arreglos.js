

/* Manera clasica de hacer arreglos
let autos= new Array("BMW","Mercedez Benz","Volvo");
dice que esta en deshuso */

const autos = ['BMW','Mercedez Benz', 'Volvo'];
console.log(autos);
console.log(autos[0]);

for (let i=0;i<autos.length; i++){
    console.log(i+" : "+autos[i]);
}
console.log("Fin del ciclo");

autos[1] = 'MercedesBenz';  //Modificar un elemento del array
console.log(autos[1]);

autos.push('Audi'); // Agregar un elemento al array
console.log(autos);

console.log(autos.length); //Cantidad de objetos en el array
                        //Pero los indices empiezan en el 0
autos[autos.length]='Cadillac';
console.log(autos);
console.log(autos[4]);
console.log(autos.length);  //La cantidad de elemetos e indices difieren en 1

//Saber si trabajamos con un array
console.log(typeof autos);
console.log(Array.isArray(autos));
console.log(autos instanceof Array);