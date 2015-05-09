javascript:(function(){
    Date.prototype.yyyymmddhhmmss = function() {
        var yyyy = this.getFullYear().toString();
        var mm = (this.getMonth()+1).toString();
        var dd  = this.getDate().toString();
        var hour = this.getHours().toString();
        var min = this.getMinutes().toString();
        var sec = this.getSeconds().toString();
        return yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0]) + ' ' + hour + ':' + min + ':' + sec;
    };
    
    description = document.querySelector('meta[property="og:description"]').content;
    imageurl = document.querySelector('meta[property="og:image"]').content;
    tweeturl = document.querySelector('meta[property="og:url"]').content;
    tweetsplits = tweeturl.split('/');
    username = tweetsplits[tweetsplits.length-3];
    tweetid = tweetsplits[tweetsplits.length-1];
    imagename = 'Twitter - '+username+' - '+tweetid+'.jpg';
    
    desc = '{{descripción de twitter|1='+description+'}}';
    fuente = '{{tweet|'+username+'|'+tweetid+'}}';
    fechapub = document.body.innerHTML.match(/data-time-ms="([0-9]+?)"/)[1];
    fechapub = new Date(parseInt(fechapub)).yyyymmddhhmmss(); 
    
    infobox = '{{Infobox Archivo\n| descripción = '+desc+'\n| fuente = '+fuente+'\n| fecha de publicación = '+fechapub+'\n| autor = {{twitter|'+username+'}}\n}}';
     
    void(open('http://15mpedia.org/wiki/Special:UploadWindow'
        + '?wpUploadFileURL=' + encodeURIComponent(imageurl)
        + '&wpDestFile=' + encodeURIComponent(imagename)
        + '&wpUploadDescription=' + encodeURIComponent(infobox),
        + '&wpSummary
        'Import%20to%2015Mpedia'));
})();
