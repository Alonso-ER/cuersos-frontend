function currentTime(){
    //Para el reloj
        //Se establecen los valores en variables
    let date = new Date(); 
    let hh = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

        //Estetico, sin esto el dia 9 se ve solo el 9, no 09
    hh = (hh<10) ? '0'+hh : hh;
    min = (min<10) ? '0'+min : min;
    sec = (sec<10) ? '0'+sec : sec;
        //Codigo para declararlo en El HTML
    let time = hh + ':' + min + ':' + sec;
    let hora = document.querySelector('#hora');
    hora.innerHTML = time;

    //Para el calendario
        //Se establcen los valores en variables
    let dia = new Date();
    let day = dia.getDay();
    let num = dia.getDate();
    let month = dia.getMonth();
        //Switch para cambiar la forma en la que se ven
        //los valores del día de la semana y el mes
        //Normalmente los dias van del 0-6 y el mes 0-11
    switch (day){
        case 0: day='Dom';
            break;
        case 1: day='Lun';
            break;
        case 2: day='Mar';
            break;
        case 3: day='Mie';
            break;
        case 4: day='Jue';
            break;
        case 5: day='Vie';
            break;
        case 6: day='Sab';
            break;
    }
    switch (month){
        case 0: month='Enero';
            break;
        case 1: month='Feb';
            break;
        case 2: month='Mar';
            break;
        case 3: month='Abr';
            break;
        case 4: month='May';
            break;
        case 5: month='Jun';
            break;
        case 6: month='Jul';
            break;
        case 7: month='Ago';
            break;
        case 9: month='Sep';
            break;
        case 9: month='Oct';
            break;
        case 10: month='Nov';
            break;
        case 11: month='Dec';
            break;
    }
        //Codigo para declararlo en HTML
    let fecha1 = day + '. ' + num + ' ' + month;
    let fecha2 = document.querySelector('#fecha');
    fecha2.innerHTML = fecha1;
    console.log(fecha1)
    

    document.getElementById('container').classList.toggle('animar');
}

//Para actualizar el reloj cada segundo
//setInterval es la propiedad basica, currentTime en la funcion
//1000 son el tiempo que pasa entre cada actualización
//Esta en milisegundos 1000milisegundos = 1 segundo
setInterval(currentTime,1000)


