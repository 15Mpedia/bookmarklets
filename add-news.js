javascript:(function(){
function pad(n, l) {
 var s = ''+parseInt(n);
 while (s.length<l) { s='0'+s; }   
 return s;
}
var mes2num = Array();
mes2num["enero"] = "01";
mes2num["febrero"] = "02";
mes2num["marzo"] = "03";
mes2num["abril"] = "04";
mes2num["mayo"] = "05";
mes2num["junio"] = "06";
mes2num["julio"] = "07";
mes2num["agosto"] = "08";
mes2num["septiembre"] = "09";
mes2num["octubre"] = "10";
mes2num["noviembre"] = "11";
mes2num["diciembre"] = "12";

titulo = document.title.replace(/ ?[\/\#\<\>\[\]\|\{\}\-].*/g,'');
enlace = location.href;
dominio = location.href.split('/')[2].split('.');dominio = dominio[dominio.length-2];
 
f = new Object();
f['20minutos']='20 minutos';
f['abc']='ABC';
f['andalucesdiario']='Andaluces Diario';
f['cadenaser']='Cadena Ser';
f['cincodias']='Cinco Días';
f['cuartopoder']='Cuarto Poder';
f['cubadebate']='Cubadebate';
f['diagonalperiodico']='Diagonal';
f['diariodecadiz']='Diario de Cádiz';
f['diariodecordoba']='Diario de Córdoba';
f['diariosur']='Diario Sur';
f['ecorepublicano']='Eco Republicano';
f['elboletin']='El Boletín';
f['elconfidencial']='El Confidencial';
f['elconfidencialdigital']='El Confidencial Digital';
f['eldiario']='El Diario';
f['eleconomista']='El Economista';
f['elespiadigital']='El Espía Digital';
f['elmundo']='El Mundo';
f['elpais']='El País';
f['elperiodico']='El Periódico';
f['elplural']='El Plural';
f['europapress']='Europa Press';
f['huffingtonpost']='El Huffington Post';
f['infolibre']='InfoLibre';
f['lainformacion']='La Información';
f['lamarea']='La Marea';
f['laopiniondemalaga']='La Opinión de Málaga';
f['laopiniondezamora']='La Opinión de Zamora';
f['larepublica']='La República';
f['lavanguardia']='La Vanguardia';
f['lavozdegalicia']='La Voz de Galicia';
f['lavozdigital']='La Voz Digital';
f['levante-emv']='Levante-EMV';
f['librered']='LibreRed';
f['madrilonia']='Madrilonia';
f['mundoobrero']='Mundo Obrero';
f['periodismohumano']='Periodismo Humano';
f['publico']='Público';
f['rtve']='RTVE';
f['sevillareport']='Sevilla Report';
f['tercerainformacion']='Tercera Información';
fuente = f[dominio];
if (!fuente) { fuente = dominio; }

body = document.body.innerHTML;
fecha = '';
if (dominio == 'librered') {
    t = body.match(/<li>[a-z]+, ([a-z]+) (\d+), (\d\d\d\d), \d+:\d+<\/li>/i);
    mes = mes2num[t[1]];
    dia = t[2];
    if (dia.length == 1) { dia = '0'+dia; }
    fecha = t[3] + '-' + mes + '-' + dia;
} else {
    fechaurl = enlace.match(/\/((20|19)[0-9][0-9][\/\-][0-1][0-9][\/\-][0-1][0-9])\//);
    if (fechaurl) {
        fecha = fechaurl[1].replace(/[\/\-]/g, '-');
    } else {
        t = body.match(/([0-3]?[0-9][\/\-\.][0-1]?[0-9][\/\-\.](20|19)[0-9][0-9])/);
        if (t) {
            fecha = t[0].replace(/[\/\.]/g,'-');
            fecha = pad(fecha.split('-')[2],4) + '-' + pad(fecha.split('-')[1],2) + '-' + pad(fecha.split('-')[0],2); 
        }else{
            t = body.match(/((20|19)[0-9][0-9][\/\-\.][0-1]?[0-9][\/\-\.][0-3]?[0-9])/);
            if (t) {
                fecha = t[0].replace(/[\/\.]/g,'-');
                fecha = pad(fecha.split('-')[0],4) + '-' + pad(fecha.split('-')[1],2) + '-' + pad(fecha.split('-')[2],2); 
            }
        }
    }
}

alert('Copia (Ctrl-C) el siguiente código y pégalo en la página de 15Mpedia apropiada:\n\n* {{noticia|titular='+titulo+'|enlace='+enlace+'|fuente='+fuente+'|fecha='+fecha+'}}\n\nNota: Repasa que los campos sean correctos');
})();
