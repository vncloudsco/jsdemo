//<![CDATA[
//CSS Ready

//CSS Ready
function loadCSS(e, t, n) {
    "use strict";
    var i = window.document.createElement("link");
    var o = t || window.document.getElementsByTagName("script")[0];
    i.rel = "stylesheet";
    i.href = e;
    i.media = "only x";
    o.parentNode.insertBefore(i, o);
    setTimeout(function() {
        i.media = n || "all"
    })
}
loadCSS("//fonts.googleapis.com/css?family=Frank+Ruhl+Libre:400,500,700|Open+Sans:400,600,700,400italic|Bungee+Inline");
loadCSS("//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

//]]>
