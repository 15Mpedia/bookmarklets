javascript:(function(){
head = document.head.innerHTML;
if (head.match(/"wgNamespaceNumber":2/) || head.match(/"wgNamespaceNumber":3/)) {
  newbie = head.match(/"wgTitle":"([^"]*?)"/);
  newbie = newbie[1];
  void(open('http://wiki.15m.cc/w/index.php?title=User talk:'
    + newbie
    + '&lqt_method=talkpage_new_thread&lqt_subject_field=Bienvenida&preload=Template:Bienvenida%20preload',
    'Welcome%20to%2015Mpedia'));
}
})();
