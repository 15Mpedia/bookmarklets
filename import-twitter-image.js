javascript:(function(){
    Date.prototype.yyyymmddhhmmss = function() {
        var yyyy = this.getFullYear().toString();
        var mm = (this.getMonth()+1).toString();
        var dd  = this.getDate().toString();
        var hour = this.getHours().toString();
        var min = this.getMinutes().toString();
        var sec = this.getSeconds().toString();
        return yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0]) + ' ' + (hour[1]?hour:"0"+hour[0]) + ':' + (min[1]?min:"0"+min[0]) + ':' + (sec[1]?sec:"0"+sec[0]);
    };
    
    images = document.querySelectorAll('meta[property="og:image"]');
    for (i=0;i<images.length;i++) {
        description = document.querySelector('meta[property="og:description"]').content;
        imageurl = images[i].content;
        tweeturl = document.querySelector('meta[property="og:url"]').content;
        tweetsplits = tweeturl.split('/');
        username = tweetsplits[tweetsplits.length-3];
        tweetid = tweetsplits[tweetsplits.length-1];
        imageid = imageurl.split('/');
        imageid = imageid[imageid.length-1];
        imageid = imageid.split('.');
        imageid = imageid[0];
        imagename = 'Twitter - '+username+' - '+tweetid+' - '+imageid+'.jpg';
        
        desc = '{{descripción de twitter|1='+description+'}}';
        fuente = '{{tweet|'+username+'|'+tweetid+'}}';
        fechapub = document.body.innerHTML.match(/data-time-ms="([0-9]+?)"/)[1];
        fechapub = new Date(parseInt(fechapub)).yyyymmddhhmmss(); 
        if (description.match(/#\w+/g)) {
		    keywords = description.match(/#\w+/g).join(', ');
	    }else{
		    keywords = '';
		}
        
        infobox = '{{Infobox Archivo\n| descripción = '+desc+'\n| fuente = '+fuente+'\n| fecha de publicación = '+fechapub+'\n| autor = {{twitter|'+username+'}}\n| palabras clave = '+keywords+'\n}}';
         
        void(open('http://15mpedia.org/wiki/Special:UploadWindow'
            + '?wpUploadFileURL=' + encodeURIComponent(imageurl)
            + '&wpDestFile=' + encodeURIComponent(imagename)
            + '&wpUploadDescription=' + encodeURIComponent(infobox),
            'Import%20to%2015Mpedia%20'+imagename));
    }
})();
