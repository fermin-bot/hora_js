function fecha(){
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    if(hora<10){
        hora = "0"+hora;
    }
    if(minutos<10){
        minutos = "0"+minutos;
    }
    if(segundos<10){
        segundos = "0"+segundos;
    }

    document.querySelector(".hora").innerHTML = hora+":"+minutos+":"+segundos;
}
setInterval(fecha,100);
