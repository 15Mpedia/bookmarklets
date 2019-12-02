javascript:(function(){
var result='';
for(var n=0;n<document.links.length;n++){
    var link=''+document.links[n];
    if ( link.match(/(facebook|instagram|twitter|youtube)\./i) && ! result.match(link)) {
        result+=link+'\n';
    }
};alert(result);})();
