function onLoad() {
  var src = "WebFontConfig = {" +
  "  google: { families: [ 'Open+Sans:400,700:latin' ] }" +
  "};" +
  "(function() {" +
  "  var wf = document.createElement('script');" +
  "  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +" +
  "    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';" +
  "  wf.type = 'text/javascript';" +
  "  wf.async = 'true';" +
  "  var s = document.getElementsByTagName('script')[0];" +
  "  s.parentNode.insertBefore(wf, s);" +
  "})();"
  var script = document.createElement('script');
  script.src = src;
  document.getElementsByTagName('head')[0].appendChild(script);
}

onLoad();
