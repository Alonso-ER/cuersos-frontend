let x=10; //valor primitivo
//No tiene tributos ni metodos asociados

function cambiarValor (a){
    a=20;
}
cambiarValor(x);
console.log(x);
// console.log(a);

//Objeto /Referencia
const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}
function cambiarValorObjeto(p1){
    p1.nombre='Carlos';
    p1.apellido='Lara';
}
//Paso poe referencia
cambiarValorObjeto(persona);

console.log(persona.nombre);
