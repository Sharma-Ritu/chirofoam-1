(function() {
  function asyncLoad() {
    var x = document.getElementsByTagName('script')[0];
    var urls = ["//www.google.com/recaptcha/api.js?render=explicit"];
    for (var i = 0; i < urls.length; i++) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.defer = true;
      s.src = urls[i];
      x.parentNode.insertBefore(s, x);
    }
  };
  if (typeof window !== 'undefined') {
    if (window.attachEvent) {
      window.attachEvent('onload', asyncLoad);
    } else {
      window.addEventListener('load', asyncLoad, false);
    }
  }
  if (typeof document !== 'undefined') {
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.src = '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5e5a59d03affc180';
    document.body.appendChild(po);
  }
})();
