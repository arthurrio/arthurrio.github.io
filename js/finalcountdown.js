/* Global variable manual setting. Just to test. */
var dataFinal = new Date('09/18/2017 00:00:00');
var idName = 'tempo'; 
/* Method created to read the global variable and calculate the final count down result */
var  finalCountDown = setInterval(function() {
    /* get the actual date. */
    var data = new Date();
    /* Calculate the diff between the actual date and the final date */
    var dataResultado = dataFinal - data;
    
    if(dataResultado < 0 ){
        clearInterval(finalCountDown);
        document.getElementById(idName).innerText = 'Site atrasado';
    }
    var segundos = dataResultado/1000;
    var minutos = segundos / 60;
    var hora = minutos / 60;
    var dia = hora /24;
    
    var dias = dataResultado/(1000*60*60*24);
    //alert('Numero dias: '+ dataResultado/(1000*60*60*24));
    /* Resto de tudo... buscar agora número de horas */
    var horas = (dataResultado%(1000*60*60*24))/(1000*60*60);
    //alert('Horas: '+ horas);
    var minutos = ((dataResultado%(1000*60*60*24))%(1000*60*60))/(1000*60);
    //alert('Minutos: ' + minutos);
    var segundos = (((dataResultado%(1000*60*60*24))%(1000*60*60))%(1000*60))/1000;
    //alert(Math.floor(dias) + ' dias ' + Math.floor(horas) + ' horas ' + Math.floor(minutos) + ' minutos ' + Math.floor(segundos) + ' segundos ');
    document.getElementById(idName).innerText = Math.floor(dias) + ' dias ' + Math.floor(horas) + ' horas ' + Math.floor(minutos) + ' minutos ' + Math.floor(segundos) + ' segundos ';

    

},1);