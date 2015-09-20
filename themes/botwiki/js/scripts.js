"strict";

function ready(fn) {
  if (document.readyState !== 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
  console.log('Hello!');
  document.getElementsByClassName('search-text-after-image').
    classList.remove('search-text-after-image').
    classList.add('search-text');

});


/*!
 * Lazy Load Images without jQuery
 * http://kaizau.github.com/Lazy-Load-Images-without-jQuery/
 *
 * Original by Mike Pulaski - http://www.mikepulaski.com
 * Modified by Kai Zau - http://kaizau.com
 */
!function(){function d(a){var b=0;if(a.offsetParent){do b+=a.offsetTop;while(a=a.offsetParent);return b}}var a=window.addEventListener||function(a,b){window.attachEvent("on"+a,b)},b=window.removeEventListener||function(a,b){window.detachEvent("on"+a,b)},c={cache:[],mobileScreenSize:500,addObservers:function(){a("scroll",c.throttledLoad),a("resize",c.throttledLoad)},removeObservers:function(){b("scroll",c.throttledLoad,!1),b("resize",c.throttledLoad,!1)},throttleTimer:(new Date).getTime(),throttledLoad:function(){var a=(new Date).getTime();a-c.throttleTimer>=200&&(c.throttleTimer=a,c.loadVisibleImages())},loadVisibleImages:function(){for(var a=window.pageYOffset||document.documentElement.scrollTop,b=window.innerHeight||document.documentElement.clientHeight,e={min:a-200,max:a+b+200},f=0;f<c.cache.length;){var g=c.cache[f],h=d(g),i=g.height||0;if(h>=e.min-i&&h<=e.max){var j=g.getAttribute("data-src-mobile");g.onload=function(){this.className=this.className.replace(/(^|\s+)lazy-load(\s+|$)/,"$1lazy-loaded$2")},g.src=j&&screen.width<=c.mobileScreenSize?j:g.getAttribute("data-src"),g.removeAttribute("data-src"),g.removeAttribute("data-src-mobile"),c.cache.splice(f,1)}else f++}0===c.cache.length&&c.removeObservers()},init:function(){document.querySelectorAll||(document.querySelectorAll=function(a){var b=document,c=b.documentElement.firstChild,d=b.createElement("STYLE");return c.appendChild(d),b.__qsaels=[],d.styleSheet.cssText=a+"{x:expression(document.__qsaels.push(this))}",window.scrollBy(0,0),b.__qsaels}),a("load",function d(){for(var a=document.querySelectorAll("img[data-src]"),e=0;e<a.length;e++){var f=a[e];c.cache.push(f)}c.addObservers(),c.loadVisibleImages(),b("load",d,!1)})}};c.init()}();
