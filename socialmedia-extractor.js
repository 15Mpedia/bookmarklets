javascript:(function(){
var a='';
for(var ln=0;ln<document.links.length;ln++){
    var link=''+document.links[ln];
    if ( link.match(/facebook|instagram|twitter|youtube/i) ) {
        a+=link+'\n';
    }
};alert(a);})();
