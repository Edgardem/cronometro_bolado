var hora = 0;
var minuto = 0;
var  segundos= 0;
var  milisegundos= 0;

var cron;

function start() {
    pausar();
    cron = setInterval(startTime, 10);
}
function pausar() {
    clearInterval(cron);
}
function reiniciar() {
    document.querySelector('#milisegundos').innerText = '00'; 
    document.querySelector('#segundos').innerText = '00:'; 
    document.querySelector('#minuto').innerText = '00:'; 
    document.querySelector('#hora').innerText = '00:';
    hora = 0;
    minuto = 0;
    segundos = 0;
    milisegundos = 0;
}

function resetar() {
    document.querySelector('#milisegundos').innerText = '00'; 
    document.querySelector('#segundos').innerText = '00:'; 
    document.querySelector('#minuto').innerText = '00:'; 
    document.querySelector('#hora').innerText = '00:'; 
    pausar();
    hora = 0;
    minuto = 0;
    segundos = 0;
    milisegundos = 0;
}

function startTime (){
    milisegundos++;
    
    if (milisegundos == 100 ){
        segundos++;
        milisegundos = 0;
    }
    if (segundos >= 60) {
        minuto++;
        segundos = 0;

    }
    if (minuto >= 60) {
        hora++;
        minuto = 0;
        
    }
    
    /**
     * quando o milisegundos troca de casa decimal ele tem uma quebra visual esse trecho de codigo resolve esse problema
     * e atribue o valor para o milisegundos
     */
    if(milisegundos < 100){
        if(milisegundos <10){
            document.querySelector('#milisegundos').innerText = '00' + milisegundos;
        }
        else{
            document.querySelector('#milisegundos').innerText = '0' + milisegundos;
        }
    } 
    else{
        document.querySelector('#milisegundos').innerText = milisegundos;
    }

    /**
     * Quando o segundos trocar de casa decimal ele tem uma quebra visual esse trecho de codigo resolve esse problema
     * e atribue o valor para o segundos
     */
    if(segundos < 10){
        document.querySelector('#segundos').innerText = `0${segundos}`;
    } 
    else{
        document.querySelector('#segundos').innerText = segundos;
    }
   
    /**
     * Quando o minuto trocar de casa decimal ele tem uma quebra visual esse trecho de codigo resolve esse problema
     * e atribue o valor para o minuto
     */
    if(minuto < 10){
        document.querySelector('#minuto').innerText = `0${minuto}`;
    } 
    else{
        document.querySelector('#minuto').innerText = minuto;
    }
    
    /**
     * Quando o hora trocar de casa decimal ele tem uma quebra visual esse trecho de codigo resolve esse problema
     * e atribue o valor para o hora
     */
    if(hora < 10){
        document.querySelector('#hora').innerText = `0${hora}`;
    } 
    else{
        document.querySelector('#hora').innerText = hora;
    }

}