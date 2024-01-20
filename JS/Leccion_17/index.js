function suma(){
    let a = document.getElementById('numA').value;
    let b = document.getElementById('numB').value;
    let c = Number(a)+Number(b);
    let resultado;
    
    if(isNaN(c)){
        resultado =`Tus entradas no son números `;
    } else {
        resultado= `Resultado: ${c}`;
    }
    document.getElementById('resul').innerHTML = resultado;
}
