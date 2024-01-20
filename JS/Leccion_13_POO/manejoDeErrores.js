// Bloue Try / Catch / Finally

//Para arrojar error cuando se usan variables no declaradas use strict
'use strict'

try{
    let y = 10;
} 
catch(error){ //Para capturar el error que se haya arrojado
    console.log(error);
}
finally{ //Este bloque de codigo siempre se va a ejecutar sin importar el catch. OPCIONAL
    console.log('Termina la revisión de errores.');
}

let resultado = '';

try{
    // z=10;
    if(isNaN(resultado)) throw 'No es un numero';
    else if(resultado === '') throw 'Es cadena vacía'
}
catch(error){
    console.log(error); // Regresa el valor completo
    // console.log(error.name); // Regresa el nombre del error
    // console.log(error.message); // Regresa el mensaje de error
}
finally{
    console.log('Termina revisión de errores');
}

console.log('Continuamos...');