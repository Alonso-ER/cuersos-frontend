//Definir clases y constantes
class Ingreso{
    static contador = 0;
    constructor(descrip,cantidad){
        this.id = ++Ingreso.contador;
        this._descrip = descrip;
        this._cantidad = cantidad;
    }
    get descrip(){
        return this._descrip;
    }
    set descrip(descrip){
        this._descrip = descrip;
    }
    get cantidad(){
        return this._cantidad;
    }
    set cantidad(cantidad){
        this._cantidad = cantidad;
    }
    toString(){
        return `${this._descrip} ${this._cantidad}`;
    }
}
const ingresos = [
    new Ingreso('Salario',2100),
]

class Egreso{
    static contador = 0;
    constructor(descrip,cantidad){
        this.id = ++Egreso.contador;
        this._descrip = descrip;
        this._cantidad = cantidad;
    }
    get descrip(){
        return this._descrip;
    }
    set descrip(descrip){
        this._descrip = descrip;
    }
    get cantidad(){
        return this._cantidad;
    }
    set cantidad(cantidad){
        this._cantidad = cantidad;
    }
    toString(){
        return `${this._descrip} ${this._cantidad}`;
    }
}

const egresos = [
    new Egreso('Renta Dpt',900),
]
//Variables para el for
let nuevoIngreso ='';
let contadorIngresos =0;
let contadorEgresos =0;
let iTotales =0;
let eTotales =0;
let porcentajeEgresos=0;
let porcentajeTotal =0;
let _total=0;


//Inicio funcion para agregar ingresos y egresos
function agregarIE(){
    event.preventDefault()

    let signo = document.getElementById('signo').value;
    let desc = document.getElementById('desc').value;
    let valor = document.getElementById('valor').value;

    contadorIngresos++
    contadorEgresos++;

    // IF para saber si es Ingreso o Egreso
    if (signo==='mas'){
        ingresos[contadorIngresos] = new Ingreso(desc,valor);
        for(let i =0;i<ingresos.length;i++){
            nuevoIngreso+= `<div class="desc-ie" id="descripcionIng"> 
            ${ingresos[i]._descrip}
            <div class="valor-ingresos" id="vI">
            + $${ingresos[i]._cantidad} 
            <button class="eliminar" id="${contadorIngresos}" onclick="deleteIng(this)">✗</button>
            </div> 
        </div>`
        }
        document.getElementById('masIngresos').innerHTML = nuevoIngreso;
        nuevoIngreso='';
        contadorEgresos =0;
    } else if(signo==='menos'){
        egresos[contadorEgresos] = new Egreso(desc,valor);
        for(let i =0;i<egresos.length;i++){
            nuevoIngreso += `<div class="desc-ie" id="descripcionEgr"> ${egresos[i]._descrip}
            <button class="eliminar" id="${contadorEgresos}" onclick="deleteEgr(this)">✗</button>
            <div class="porcentajeChico" id="porEgresos"> </div>
            <div class="valor-egresos" id="valE">${Number(egresos[i]._cantidad)}</div>
            </div>`
                    
        }

        document.getElementById('masEgresos').innerHTML = nuevoIngreso;
        nuevoIngreso='';
        contadorIngresos=0;
    }
    //Hasta aquí termina Ingresar los I y E al HTML

    //Se calcula el total de ingresos menos egresos
    
    return egresos._total;
}

function totalIngresos(){
    for(let i=0;i<ingresos.length;i++){
        event.preventDefault();
        iTotales += Number(ingresos[i]._cantidad);
        let impITotales = document.querySelector('#totalIngresos');
        impITotales.innerHTML ='+ $' + iTotales;
}
    let totalI = iTotales;
    iTotales =0;
    return totalI;
}

function totalEgresos(){
    for(let j=0;j<egresos.length;j++){
        event.preventDefault();
        eTotales += Number(egresos[j]._cantidad);
        let impETotales=document.querySelector('#totalEgresos');
        impETotales.innerHTML = '- $'+ eTotales;
}   
    let totalE = eTotales;
    eTotales =0;
    return totalE;
}

function total(){
    
    let total = document.querySelector('#presupuesto');
    let semiTotal =Number(totalIngresos()) - Number(totalEgresos());
    total.innerHTML= '$'+ semiTotal 

    return semiTotal;
}
let cont = 0;
let conta=0;
let valor = document.getElementById('valor').value;

function porcentajes(conta){
    event.preventDefault();
    porcentajeEgresos = conta;
    let porcentaje = Number(porcentajeEgresos) * 100 / totalEgresos();

        return porcentaje;
}

let a=0;
let b=0;

function faker(){
    let pT = document.getElementById('egresos').querySelectorAll('div#porEgresos');
    let iTotal = document.getElementById('egresos').querySelectorAll('div#valE');
    for(i=0;i<egresos.length;i++){
        pT[i].innerHTML = porcentajes(iTotal[i].innerHTML).toFixed(2) +'%';
    }
}
function guma(){
    event.preventDefault();
    let valtotal = totalIngresos()
    let etotal = totalEgresos()
    let porcentaje = etotal *100 / valtotal;
    console.log(porcentaje);
    let imPorE = document.querySelector('div#porTotal');
    imPorE.innerHTML = porcentaje.toFixed(2)+'%';


}




function deleteIng(elemento){
    let ing = document.getElementById('ingresos');
    ing.removeChild(ing.children[elemento.id])
    ing.splice(elemento.id,1);

    let rows = ing.querySelector('div#cancelar');  
    for (let index = 0; index < rows.length; index++) {
        rows[index].innerHTML = `<button class="eliminar" id="${contadorIngresos}" onclick="deleteIng(this)">✗</button>`
        
    }
}

function deleteEgr(elemento){
    egresos.splice(elemento.id,1);
}