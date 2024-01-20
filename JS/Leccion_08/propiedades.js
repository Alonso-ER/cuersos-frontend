//Como acceder a las propiedades

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre  + ' ' + this.apellido
    }
}

console.log(persona.nombre);
console.log(persona['apellido']);

// for in

for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

//Agregar y eliminar propiedades a nuestros objetos

persona.tel = '55443322';
persona.tel = '44332211';
console.log(persona);
delete persona.tel;
console.log(persona);

//Distintas formas de Imprimir objetos en JS

    //Concatenar cada valor con su propiedad
    console.log(persona.nombre+", "+persona.apellido);
    //For in
    for(nombrePropiedad in persona){
        console.log(persona[nombrePropiedad]);
    }
    //Sintaxis Object Values
    let personaArray = Object.values(persona);
    console.log(personaArray);
    //Cadena en String con JSON
    let personaString = JSON.stringify(persona);
    console.log(personaString)

