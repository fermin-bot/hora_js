var fechaCompleata = "";
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
    if (fechaCompleata != hora+":"+minutos+":"+segundos){
        fechaCompleata = hora+":"+minutos+":"+segundos;
        document.querySelector(".hora").innerHTML = fechaCompleata;
    }
    
}
setInterval(fecha,100);
