!function(){var k=function(){function t(t){return t.replace(/^(\s+|\t+)/g,"").replace(/(\s+|\t+)$/,"").toLowerCase()}function e(t){return/^[A-Za-z0-9'"`]|[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|[\u0590-\u05FF]|\u203B+$/g.test(t)}function r(t){return top.document.getElementsByTagName(t)}var n="";try{return n=function(){for(var e=/\s*(\s+|\++|\+|\:|・|\,|、|\-|。|•|\(|\)|\（|\）|\…|\」|\「)\s*/,n=r("meta"),u=[],i={},o=0;o<n.length;o++){var a=n[o],c=a.getAttribute("property")||a.getAttribute("name");if(/keywords?|titles?|descriptions?/i.test(c)){var s=a.getAttribute("content")||a.getAttribute("value");if(!s)break;void 0===i[s=t(s).split(e)]&&(i[s]=s,u=u.concat(s))}}if(0===u.length){var l=r("title");l&&l[0]&&(u=t(l[0].innerHTML).split(e))}return u}(),n=function(t){for(var e=0;e<t.length;e++)t[e]=t[e].replace(/\/|\?|\？|\!|\！|\#|\^|\&|\*|'|"|`|\.|\;/g,"");return t}(n),n=function(t){for(var r=0;r<t.length;r++)e(t[r])||t.splice(r--,1);return t}(n),encodeURIComponent(n.join("+"))}catch(t){return""}};;var e=window,t=document;Array.prototype.indexOf||(Array.prototype.indexOf=function(e){var t=this.length>>>0,i=Number(arguments[1])||0;for((i=i<0?Math.ceil(i):Math.floor(i))<0&&(i+=t);i<t;i++)if(i in this&&this[i]===e)return i;return-1}),t.getElementsByClassName||(t.getElementsByClassName=function(e){var i,r,n,o=t,a=[];if(o.querySelectorAll)return o.querySelectorAll("."+e);if(o.evaluate)for(r=".//*[contains(concat(' ', @class, ' '), ' "+e+" ')]",i=o.evaluate(r,o,null,0,null);n=i.iterateNext();)a.push(n);else for(i=o.getElementsByTagName("*"),r=new RegExp("(^|\\s)"+e+"(\\s|$)"),n=0;n<i.length;n++)r.test(i[n].className)&&a.push(i[n]);return a}),console=self.console||{log:function(){},error:function(){}},self.__cgct_controller=!0;var i={HAND_SHAKE_REQUEST:"HAND_SHAKE_REQUEST",HAND_SHAKE_RESPONSE:"HAND_SHAKE_RESPONSE",HAND_SHAKE_FAIL:"HAND_SHAKE_FAIL",FALLBACK_COLLAPSE:"FALLBACK_COLLAPSE",FALLBACK_RELOAD:"FALLBACK_RELOAD",FALLBACK_DEFAULT:"FALLBACK_DEFAULT",RESIZE:"RESIZE",VIEWABILITY_REQUEST:"VIEWABILITY_REQUEST",VIEWABILITY_RESPONSE:"VIEWABILITY_RESPONSE",VIEWABILITY_PAUSE:"VIEWABILITY_PAUSE"},r="CTCG#",n=function(e,t,i){t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent?t.attachEvent("on"+e,i):t[e]=i},o=function(e,t){n("message",e,function(e){var i=(e=e||window.event)[e.message?"message":"data"];"string"==typeof i&&-1!==i.indexOf(r)&&((i=JSON.parse(i.replace(r,""))).sourceFrame=e.source,i.origin=e.origin,t(i))})},a=[],l=[],s=!(t.addEventListener&&~t.addEventListener.toString().indexOf("[native code]")),d=function(e){if(e===self)return!0;try{if(e.frameElement&&e.parent===self&&~e.frameElement.id.indexOf("ctcg_frame"))return!0}catch(e){}return!1},c=function(t,r){o(e.top,function(e){if(t===e.eventName){var n=t===i.HAND_SHAKE_REQUEST,o=-1!==a.indexOf(e.sourceFrame);(n&&(!o||d(e.sourceFrame))||!n&&(o||d(e.sourceFrame)))&&r(e)}})},u=function(e,t){t.postMessage(r+JSON.stringify(e),"*")},f=function(e){for(var i=t.getElementsByTagName("iframe"),r=0;r<i.length;r++){var n=i[r];if(n.contentWindow===e)return n;for(var o=0;o<n.contentWindow.frames.length;o++){var a=n.contentWindow.frames[o];if(a===e)return n;for(var l=0;l<a.frames.length;l++)if(a.frames[l]===e)return n}}},g=function(e){if(!d(e.sourceFrame))return l[a.indexOf(e.sourceFrame)];for(var t=e.payload,i=0;i<l.length;i++)if(l[i].isDirect&&l[i].id===t.id&&l[i].idx===t.idx)return l[i]},h=function(e){return t.getElementById("ctcg_frame_"+e.id+"_"+e.idx)||t.getElementsByClassName("ctcg_"+e.id+"_"+e.idx)[0]},m=function(i,r,n,o){return n="string"==typeof n?n:"","function"==typeof e.getComputedStyle&&i!==t?!!getComputedStyle(i)[r]&&getComputedStyle(i)[r].replace(n,""):void 0!==i.currentStyle&&i.currentStyle[r]?!!i.currentStyle[r]&&i.currentStyle[r].replace(n,""):o&&void 0===i.currentStyle[r]?o:void 0},E=function(e,t,i,r){if(!e)return!1;var n={width:parseInt(m(e,"width","px")),height:parseInt(m(e,"height","px"))},o=5;return(n.height+o>=i&&n.width+o>=t||r)&&n.height-o<=i&&n.width-o<=t},p=function(e){var i=parseInt(m(e,"height","px")),r=t.createElement("div");r.style.height="10px",r.style.width="10px",r.style.display="block",r.style.padding="0px",r.style.margin="0px",e.appendChild(r);var n=parseInt(m(e,"height","px"));return e.removeChild(r),n>i},v=function(i,r,n){if(!i||t.visibilityState&&"hidden"===t.visibilityState||void 0!==t.hidden&&t.hidden)return 0;var o=i;do{if(!s&&"1"!==m(o,"opacity")||"none"===m(o,"display")||"hidden"===m(o,"visibility"))return 0}while((o=o.parentNode||o.parentElement)!==t);var a=i.getBoundingClientRect(),l=function(){var i,r;return void 0!==e.innerWidth?(i=e.innerWidth,r=e.innerHeight):void 0!==t.documentElement&&void 0!==t.documentElement.clientWidth&&0!==t.documentElement.clientWidth?(i=t.documentElement.clientWidth,r=t.documentElement.clientHeight):(i=t.getElementsByTagName("body")[0].clientWidth,r=t.getElementsByTagName("body")[0].clientHeight),{width:i,height:r}}(),d=n,c=r,u=d*c;if(a.bottom<=0)return 0;if(a.top>=l.height)return 0;if(a.left>=l.width)return 0;if(a.right<=0)return 0;var f={top:!0,bottom:!0,left:!0,right:!0};a.top<0&&a.bottom>0&&(d+=a.top,f.top=!1),a.bottom>l.height&&a.top<l.height&&(d+=l.height-a.bottom,f.bottom=!1),a.right>l.width&&a.left<l.width&&(c+=l.width-a.right,f.right=!1),a.left>-r&&a.right<r&&(c+=a.left,f.left=!1);var g=5,h=d*c,E=h/u;if(E>.5){for(var p=3,v=(a.right-g-a.left+g)/p,y=(a.bottom-g-a.top+g)/p,A=function(e,t,i){for(var r=[],n=0;n<e+1;n++){r[n]||(r[n]=[]);for(var o=0;o<e+1;o++)r[n][o]||(r[n][o]={visibility:!0}),r[n][o].y=0===n?a.top+g:n===e?a.bottom-g:r[n-1][o].y+i,r[n][o].x=0===o?a.left+g:o===e?a.right-g:r[n][o-1].x+t}return r}(p,v,y),S=!1,L=0;L<p+1;L++)for(var _=0;_<p+1;_++){var N=A[L][_].x,I=A[L][_].y,x=t.elementFromPoint(N,I);(s?s&&(!x.id||!x.id!==i.id):null!==x&&x!==i)&&(A[_][L].visibility=!1,S=!0,A[_][L-1]&&!A[_][L-1].visibility&&A[_-1]&&A[_-1][L]&&!A[_-1][L].visibility&&A[_-1][L-1]&&!A[_-1][L-1].visibility&&(h-=v*y))}E=h/u,S&&1===E&&(E=.94)}return parseFloat(E.toFixed(2))},y=function(e,t,r){if(t.isRequestingViewability){var n=v(e,t.width,t.height);u({eventName:i.VIEWABILITY_RESPONSE,payload:{targetPlacement:{id:t.id,idx:t.idx},viewability:{viewPercentage:n}}},r)}},A=function(e){if(e)for(var t=0;t<googletag.pubads().getSlots().length;t++)if(googletag.pubads().getSlots()[t].getSlotElementId()===e)return googletag.pubads().getSlots()[t]};c(i.HAND_SHAKE_REQUEST,function(t){var r=t.payload;r.isDirect=d(t.sourceFrame);var n=!1;try{if(!r.isDirect&&void 0!==self.googletag){for(var o=f(t.sourceFrame),s=o.parentNode||o.parentElement;!A(s.id)&&"html"!==s.tagName.toLowerCase();)s=s.parentNode||s.parentElement;var c=A(s.id);if(c){for(var g=0;g<l.length;g++)if(l[g].slot===c)return console.error("slot has already reloaded..."),u({eventName:i.HAND_SHAKE_FAIL,payload:{targetPlacement:{id:t.payload.id,idx:t.payload.idx}}},t.sourceFrame);r.slot=c,n=!0===r.slot.getOutOfPage()}}}catch(e){console.error("gpt error ",e.message)}l.push(r),a.push(t.sourceFrame);var h={eventName:i.HAND_SHAKE_RESPONSE,payload:{keywords:k(),href:e.top.location.href,isOutOfPage:n,targetPlacement:{id:t.payload.id,idx:t.payload.idx}}};u(h,t.sourceFrame)}),c(i.FALLBACK_COLLAPSE,function(e){var t=function(e){e&&(e.style.display="none",e.style.visibility="hidden",e.style.width="0px",e.style.height="0px")},i=g(e),r=function(e){e&&E(e,i.width,i.height,!0)&&(t(e),r(e.parentNode||e.parentElement))},n=i.isDirect?h(i):f(e.sourceFrame);r(n),i.width=0,i.height=0}),c(i.FALLBACK_RELOAD,function(e){var t=g(e);return t.isDirect||void 0===self.googletag?console.error("no gpt integration, reload is not possible"):t.slot&&t.slot.setTargeting?void googletag.pubads().refresh([t.slot.setTargeting("cg","invalid")]):console.error("no slot, reload is not possible")}),c(i.RESIZE,function(e){var t=function(e,t){e&&t&&(e.style.height=t+"px")},i=e.payload,r=g(e),n=function(e){if(e&&E(e,r.width,r.height)){t(e,i.resizeToHeight);for(var o=e.parentNode||e.parentElement,a=5,l=0;p(o)&&"html"!==o.tagName.toLowerCase()&&a>=l++;)o=o.parentNode||o.parentElement;n(o)}},o=r.isDirect?h(r):f(e.sourceFrame);n(o),r.height=i.resizeToHeight,y(o,r,e.sourceFrame)}),c(i.VIEWABILITY_REQUEST,function(i){var r=function(){return{x:e.pageXOffset||t.documentElement.scrollLeft||t.body.scrollLeft,y:e.pageYOffset||t.documentElement.scrollTop||t.body.scrollTop}},o=g(i);o.isRequestingViewability=!0;var a=o.isDirect?h(o):f(i.sourceFrame);y(a,o,i.sourceFrame),setInterval(function(){y(a,o,i.sourceFrame)},250);var l=r();n("scroll",e,function(){var e=r();(Math.abs(l.y-e.y)>10||Math.abs(l.x-e.x)>10)&&(l.x=e.x,l.y=e.y,y(a,o,i.sourceFrame))}),n("resize",e,function(){y(a,o,i.sourceFrame)})}),c(i.VIEWABILITY_PAUSE,function(e){g(e).isRequestingViewability=!1})}();