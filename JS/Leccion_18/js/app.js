class Persona{
    static contador = 0
    constructor(nombre,apellido){
        this.id = ++Persona.contador;
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre_){
        this._nombre = nombre_;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido_){
        this._apellido = apellido_;
    }
    toString(){
        return `${this._nombre} ${this._apellido}`;
    }
}

    
const personas = [
    new Persona('Marco','Arenas'),
]

let contador=0;
function mostrarPersonas(){
    
    event.preventDefault();
    
    // nuevaPersona = nombre + ' ' + apellido;
   
    
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
        contador++;
    let nombreCompleto = '';
    personas[contador] = new Persona(nombre,apellido);
    for(let i=0;i<personas.length;i++){
        
        console.log(personas[i]);
        nombreCompleto += `<li>${personas[i]._nombre} ${personas[i]._apellido}</li>`;
        
        
     }
     console.log(nombre + ' '+ apellido);
        
     console.log(contador);
        
        
    console.log(nombreCompleto);
    document.getElementById('personas').innerHTML = nombreCompleto;
}
