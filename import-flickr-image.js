javascript:(function(){
function pad(n, l) {
 var s = ''+parseInt(n);
 while (s.length<l) { s='0'+s; }   
 return s;
}
 
title = document.querySelector('meta[name="og:title"]').content;
imageurl = document.querySelector('meta[name="og:url"]').content;
setsurl = document.querySelector('meta[name="flickr_photos:sets"]').content;
fullimageurl = 'https://'+document.body.innerHTML.match(/\/([a-z0-9]+\.staticflickr\.com[^"]*?_o\.jpg)\"/)[1];
fullimageurl = fullimageurl.replace(/\\\//g, '/');
desc = document.querySelector('meta[name="og:description"]').content;
if (desc.match(/has uploaded [0-9]+ photos to Flickr/)) { desc = ''; }
desc = desc.replace(/&quot;/g, '"');
username = '';
if (document.head.innerHTML.match(/flickr_photos:by/)) {
username = document.querySelector('meta[name="flickr_photos:by"]').content.split('/');
username = username[username.length-2];
}
imageid = imageurl.split('/');imageid = imageid[imageid.length-2];
fuente = '['+imageurl+' '+title+']';
albumid = 'noalbum';
if (document.body.innerHTML.match(/"set-models","title"/)) {
albumid = setsurl.match(/sets\/([0-9]+)/)[1];
albumtitle = document.body.innerHTML.match(/"set-models","title":"(.*?)"/)[1];
fuente = fuente+' ([' + setsurl + ' ' +  albumtitle + '])';
}
datetaken = '';
if (document.body.innerHTML.match(/"date_taken":/)) {
datetaken = document.body.innerHTML.match(/"date_taken":"([^"]*?)"/)[1]; 
}
license = '';
if (document.body.innerHTML.match(/"license":/)) {
licensenum = parseInt(document.body.innerHTML.match(/"license":([0-9]+)/)[1]);
switch (licensenum) {
case 0: license = 'All Rights Reserved'; break;
case 1: license = '{{cc-by-nc-sa-2.0}}'; break;
case 2: license = '{{cc-by-nc-2.0}}'; break;
case 3: license = '{{cc-by-nc-nd-2.0}}'; break;
case 4: license = '{{cc-by-2.0}}'; break;
case 5: license = '{{cc-by-sa-2.0}}'; break;
case 6: license = '{{cc-by-nd-2.0}}'; break;
case 7: license = 'No known copyright restrictions'; break;
case 8: license = 'United States Government Work'; break;
}
}
coordenadas = '';
if (document.head.innerHTML.match(/flickr_photos:location:latitude/) && document.head.innerHTML.match(/flickr_photos:location:longitude/)) {
coordenadas = document.querySelector('meta[name="flickr_photos:location:latitude"]').content + ', ' + document.querySelector('meta[property="flickr_photos:location:longitude"]').content;
}
imagename = username+' - '+albumid+' - '+imageid+'.jpg';
 
infobox = '{{Infobox Archivo\n| descripción = '+desc+'\n| fuente = '+fuente+'\n| fecha de creación = '+datetaken+'\n| autor = {{flickr|'+username+'}}
\n| licencia = '+license+'\n| coordenadas = '+coordenadas+'\n}}';
 
void(open('http://wiki.15m.cc/wiki/Special:UploadWindow'
    + '?wpUploadFileURL=' + encodeURIComponent(fullimageurl)
    + '&wpDestFile=' + encodeURIComponent(imagename)
    + '&wpUploadDescription=' + encodeURIComponent(infobox),
    'Import%20to%2015Mpedia'));
})();
