//Parametros y argumentos

//En una función, ambos son casi lo mismo
//En la practica se les puede usar de manera equivalente

let suma=function(a,b){ return a+b };
//La variables    '' se les conoce como parametros
resul = suma(1,2);
//Los valores '' que se le asignan a las funciones con argumentos
console.log(resul);
//Parametro: Lista de variables que definimos en una función
//Argumentos: Valores que pasamos cuando llamamos una función

let sumar=function(a=4,b=5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a+b+arguments[2];
};
resultado=sumar(2,3,4);
console.log(resultado);

//Ejemplo de suma de argumentos
let res = sumarTodo(5, 4, 13, 10, 9);
console.log(res);

function sumarTodo(){
    let sum=0;
    for(let i =0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}