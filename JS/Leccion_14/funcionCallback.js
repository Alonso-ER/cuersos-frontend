//Funciones normales
function miFuncion1(){
    console.log('Funcion 1');
}

function miFuncion2(){
    console.log('Funcion 2');
}
miFuncion2();
miFuncion1();

// Funciones callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1,op22, funcionCallback){
    let res = op1 + op22;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5,3,imprimir)

//Llamadas asíncronas con uso de setTimeout
function miFuncionCallBack(){
    console.log('Saludo asincrono depues de 3 seg');
}

setTimeout(miFuncionCallBack,3000);

setTimeout(function(){
    console.log('Saludo asincrono 2')}, 4000);
    