javascript:(function(){
    users = document.getElementsByClassName('user-actions btn-group');
    nicks = '';
    for (i=0; i<users.length; i++) {
        if ( users[i].getAttribute('data-screen-name') ) {
            nicks += '\n* {{twitter check|1='+users[i].getAttribute('data-screen-name') + 
            '|2='+users[i].getAttribute('data-name')+'}}<br/>';
        }
    }
    var myWindow = window.open("", "", "width=400, height=600, scrollbars=yes");
    myWindow.document.write(nicks);
})();
