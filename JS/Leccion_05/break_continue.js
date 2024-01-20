// Uso de la palabra Break
// Se usa en Switch para terminar cada caso
// pero tambien se puede usar en los ciclos para romperlos

for(let i=0;i<=10;i++){
    if(i%2==0){
        console.log(i);
        break;    }
    }
    //Solo muestra el primer reultado del ciclo
console.log("Fin del ciclo for");

//Uso de la palabra Continue


for(j=0;j<=10;j++){
    if (j%2 !==0){
    continue; //ir a la siguente iteración
    } else {
        console.log(j);
    }
}
    
console.log("Fin del ciclo");

//Uso de Etiquetas (Programación Go-To)

inicio:
for(let i=0;i<=3;i++){
    console.log(i);
    continue inicio;
}
console.log("Fin del ciclo For")