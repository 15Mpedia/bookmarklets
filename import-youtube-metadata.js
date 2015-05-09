javascript:(function(){
    url = document.querySelector('meta[property="og:url"]').content;
    videoid = url.split('v=')[1];
    videouser = document.querySelectorAll('link[itemprop="url"]')[1].href.split('/')[4];
    title = document.querySelector('meta[property="og:title"]').content;
    imageurl = document.querySelector('meta[property="og:image"]').content;
    
    desc = document.getElementById('eow-description').innerHTML;
    desc = desc.replace(/&quot;/g, '"');
    desc = desc.replace(/<br ?\/?>/g, '\n');
    desc = desc.replace(/<a href="([^>]*?)" [^>]*?>([^<]*?)<\/a>/g, '[$1 $2]');
    
    date_ = document.querySelector('meta[itemprop="datePublished"]').content;
    imagename = 'YouTube - '+videouser+' - '+videoid+'.jpg';
    license = '{{lye}}';
    if (document.getElementById('eow-reuse') && document.getElementById('eow-reuse').innerHTML.match(/creative_commons/)) { license = '{{cc-by-3.0}}'; }
    
    infobox = '{{Infobox Archivo\n|embebido=YouTube\n|embebido id='+videoid+'\n|embebido usuario='+videouser+'\n|embebido título='+title+'\n|descripción={{descripción de youtube|1='+desc+'}}\n|fecha de publicación='+date_+'\n|autor={{youtube channel|'+videouser+'}}\n|licencia='+license+'\n}}';
     
    void(open('http://15mpedia.org/wiki/Special:UploadWindow'
        + '?wpUploadFileURL=' + encodeURIComponent(imageurl)
        + '&wpDestFile=' + encodeURIComponent(imagename)
        + '&wpUploadDescription=' + encodeURIComponent(infobox),
        'Import%20to%2015Mpedia%20'+videoid));
})();
