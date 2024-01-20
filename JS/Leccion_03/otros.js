/*  Conversion de string a numero   */

// console.log(miNum);
// console.log(typeof miNum);
let miNum = "18";
let edad = Number(miNum);
console.log(typeof edad); //Convertir a numero
// Con if/else
if(edad>=18){
    console.log("Puede votar")
} else{
    console.log("Muy joven para votar")
}
//Operador ternario
let resul = (edad>=18) ? "Puede votar" : "Muy joven para votar";
console.log(resul);

/* Funcion isNaN (Is Not a Number)
let num = "18", mayor=18;
let myNumber = Number(num);
console.log(typeof myNumber);
console.log(myNumber);
if(isNaN(myNumber)){
    console.log("No es un número"); 
} else { 
    if(myNumber>=mayor){
    console.log("Puede votar")
}   else {
    console.log("Muy joven para votar")
} 
}
if(isNaN(myNumber)){
    console.log("No es un número"); 
} else { 
    let resul = (myNumber>=18) ? "Puede votar" : "Muy joven para votar";
console.log(resul);
}    */
/* Ejemplos de precedencia de operaciones */
let x =5;
let y=10;
let z = ++x + y--;
console.log(x);
console.log(y);
console.log(z);

let resultado = 4+5*6/3; //5*6/3+4
console.log(resultado);
resultado =(4+5)*6/3;
console.log(resultado);



