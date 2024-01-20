let miPromesa = new Promise((resolver, rechazar) /*resolved, rejected */ => {
    let expresion = true;
    if(expresion)
        resolver('Resolvió Correcto'); 
    else 
        rechazar('Se produjo un error');
});
/*
miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)  
);

miPromesa
.then(valor => console.log(valor))
.catch(error=>console.log(error)); */

let promesa = new Promise((resolver) => {
    setTimeout( ()=>resolver('Saludos con promesa y timeout'),3000);
});

// promesa.then(valor => console.log(valor));

//Async indica que una función regresa una promesa

async function miFuncionPromesa(){
    return 'saludos con promesa y async';
}

// miFuncionPromesa().then (valor => console.log(valor));

// Await: Espera el resultado de una promesa
//async / await

async function promesaAwait(){
    let miPromesa = new Promise (resolver => {
        resolver('Promesa con await');
    });
    console.log(await miPromesa)
}

// promesaAwait();

// promesas, await, async y setTimeout

async function funcionConPromesaAwaitTimeout(){
    let myPromesa = new Promise (resolver => {
        setTimeout(() => resolver('Promesa con await y timeout'), 5000);
    });
    console.log(await myPromesa);
    console.log('Fin de la función');
}

funcionConPromesaAwaitTimeout();