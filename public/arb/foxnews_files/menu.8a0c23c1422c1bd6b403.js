atwpjp([0],{15:function(e,t,n){function o(e){return/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(e)}function r(e){var t=new Array;e:for(var n=0;n<e.length;n++){for(var a=0;a<t.length;a++)if(t[a]==e[n])continue e;t[t.length]=e[n]}return t}function s(e){var t,n=window,a=document,o=n.onkeydown||function(){},i=function(t){e(t),o(t)};V.msi?(t=a.onkeydown,a.onkeydown=function(){i(),null!=t&&t()}):(t=n.onkeydown,n.onkeydown=function(e){i(e),null!=t&&t()})}function c(){return V.ie6?' style="cursor:hand;"':""}function l(e){if(A(e)){var t=M(!0),n=B();v(e),y(e,t[0]-n),E(e,t[1]-n)}}function u(e,t){e&&e.value&&e.value.length>t&&(e.value=e.value.substring(0,t))}function d(e,t,n){return e.length>t&&(e=e.slice(0,t-1),n&&e[e.length-1]!=n&&e.push(n)),e}function p(e){if(e._e)return!0;for(var t in e)if("_e"!=t&&e.hasOwnProperty(t))return delete e._e,!1;return e._e=1,!0}function A(e){return"string"==typeof e&&(e=document.getElementById(e)),e}function h(e){return'<a name="'+e+'"></a>'}function f(e,t,n,a){return"<div "+(1===n?"class":"id")+'="'+e+'"'+(0===t?' style="display:none"':"")+(a?a:"")+">"}function g(e,t,n){e=A(e),e&&e.style&&(e.style[t]=n)}function m(e,t,n){n||g(e,"display","none"),t&&g(e,"visibility","hidden")}function v(e,t,n){n||g(e,"display","block"),t&&g(e,"visibility","visible")}function w(e,t){e=A(e),e&&(e.className?-1==e.className.indexOf(t)&&(e.className+=" "+t):e.className=t)}function b(e,t){if(e=A(e)){if(!e.className)return;-1!=e.className.indexOf(t)&&(e.className=e.className.split(t).join(" "))}}function x(e,t){return e=A(e),e?e.className?-1!=e.className.indexOf(t):!1:void 0}function C(e,t){return e=A(e),e&&e.parentNode&&(e.parentNode.className||"").indexOf(t)>-1}function y(e,t){g(e,"width",t+"px")}function E(e,t){g(e,"height",t+"px")}function k(e){return e=A(e),e?"block"==e.style.display:!1}function M(e){var t=ee.documentElement,n=ee.body,a=0,o=0,i=0,r=0;return e&&(F.innerHeight&&F.scrollMaxY?(a=n.scrollWidth,o=F.innerHeight+F.scrollMaxY):n.scrollHeight>n.offsetHeight?(a=n.scrollWidth,o=n.scrollHeight):(a=n.offsetWidth,o=n.offsetHeight)),F.self&&F.self.innerHeight?(i=F.self.innerWidth,r=F.self.innerHeight):t&&t.clientHeight?(i=t.clientWidth,r=t.clientHeight):n&&(n.clientWidth||n.clientHeight)?(i=n.clientWidth,r=n.clientHeight):n&&(i=n.clientWidth,r=n.clientHeight),[e!==!0||i>a?i:a,e!==!0||r>o?r:o]}function R(){var e=ee.documentElement,t=ee.body;return"number"==typeof F.pageYOffset?[F.pageXOffset,F.pageYOffset]:t&&(t.scrollLeft||t.scrollTop)?[t.scrollLeft,t.scrollTop]:e&&(e.scrollLeft||e.scrollTop)?[e.scrollLeft,e.scrollTop]:[0,0]}function z(e){var t=document.documentElement,n=0,a=0,o=0,i=0;do o=/fixed/.test(e.style.position),i|=o,n+=e.offsetTop||0,a+=e.offsetLeft||0,o&&e&&(n+=e.scrollTop,a+=e.scrollLeft),e=e.offsetParent;while(e);return!V.ie6&&t.scrollTop&&i&&(n+=t.scrollTop,a+=t.scrollLeft),[a,n]}function B(){if($)return $;try{var e=document,t=e.ce("div"),n=e.ce("div"),a=e.getElementsByTagName("body")[0],o=t.style;o.width="50px",o.height="50px",o.overflow="hidden",o.position="absolute",o.top="-200px",o.left="-200px",n.style.height="100px",a.appendChild(t),t.appendChild(n);var i=n.innerWidth;t.style.overflow="scroll";var r=n.innerWidth;t.removeChild(n),a.removeChild(t),$=i&&r?i-r:20}catch(s){$=20}return $}function S(e){e&&(e.cancelBubble=!0,e.preventDefault&&e.preventDefault())}var D,U,I=n(44),O=n(21),N=n(2),_=n(13),Q=n(686),T=n(14),V=n(1),j=n(9),H=n(59),G=n(887),L=n(94),F=window,P=O(),Y=n(62),J=n(164),K=n(620),Z=function(e){e||(e=window.event||event),e.keyCode?_ate.maf.key=e.keyCode:e.which&&(_ate.maf.key=e.which)},W=function(e){e||(e=window.event||event),e.keyCode?_ate.maf.key=e.keyCode:e.which&&(_ate.maf.key=e.which)},q=function(){9===_ate.maf.key?_ate.maf.key=null:(_ate.maf.key=null,addthis_close())},X=function(e,t){return t||(t=window.event||event||{}),Q(t),addthis_sendto(e)};_ate.maf=_ate.maf||{};var $=V.msi?20:void 0;if(!window._atw){var ee=(L.getPopServices(),document);!function(){var e,t=document.compatMode,n=1,a=window;t&&("BackCompat"===t?n=2:"CSS1Compat"===t&&(n=0),V.mode=n,V.msi&&(V.mod=n,2!=n&&!V.ie6||window.addthis_do_ab||(e=a.onscroll?a.onscroll:function(){},window.onscroll=function(){_atw&&_atw.fpf(),e()})))}(),window._atw={ver:300,show:1,uus:function(){_atw.uusf||(_ate.track.cev("uus",1),_atw.uusf=1)},ujq:function(){return!V.ie6&&!V.ie7&&!V.ie8&&"function"==typeof window.jQuery},css:{},conf:{},data:{auth:{},contacts:{all:{},origin:{}}},fe:null,plo:[],pla:function(){for(;_atw.plo.length>0;){var e=_atw.plo.pop();addthis_open(e[1],e[2],e[3],e[4],e[5],e[6])}},gps:function(e){_atw.evar();var t=window.addthis_options;e(t?t.replace(",more","").split(","):[])},ibt:function(){if(_atw.bti)return _atw.bti;var e=(window.addthis_product||"men").substr(0,3),t="bkm"==e||"bmt"==e||"fct"==e||"fxe"==e;return t&&(_atw.bti=t),t},lfy:0,fpf:function(){if(V.ie6||V.msi&&2==V.mod){var e=document,t=e.documentElement,n=e.body,a=_atw,o=A(a.did),i=A("at16p"),r=t&&"undefined"!=typeof t.scrollTop,s=n&&"undefined"!=typeof n.scrollTop,c=!1,l=A("atie6ifh"),u=r&&s?Math.max(t.scrollTop,n.scrollTop):r?t.scrollTop:n.scrollTop;if(u+=10,u!=a.lfy){if(a.lfy=u,i&&(i.style.top=u+"px"),o&&o.className&&o.className.indexOf("mmborder")>-1){var d=0,p=M();d=i&&""!=i.style.marginTop?i.style.marginTop.split("px").shift():Math.max(0,p[1]/2-222.5),o.style.top=u-10+d+"px",c=!0}l&&V.ie6&&(l.style.top=(c?0:290)+u+"px")}}},rev:"$Rev$",lang:function(e,t){var n=V.msi?navigator.userLanguage:navigator.language,a=e||n,o=_atw,i=o.conf.ui_localize||window.addthis_localize,r=window.addthis_translations||[];if(i)switch(t){case 1:i=i.share_caption;break;case 2:i=i.more;break;case 3:i=i.email_caption;break;case 4:i=i.email;break;case 5:i=i.favorites;break;case 6:i=i.email_instructions;break;case 7:i=i.email_to;break;case 8:i=i.email_from;break;case 9:i=i.email_message;break;case 10:i=i.email_privacy;break;case 11:i=i.email_send;break;case 12:i=i.email_valid;break;case 13:i=i.email_sent;break;case 14:i=i.rss_caption;break;case 15:i=i.rss_instructions;break;case 16:i=i.rss_remember;break;case 17:i=i.done;break;case 18:i=i.get_your_own;break;case 19:i=i.email_address;break;case 20:i=i.optional;break;case 21:i=i.max_characters;break;case 22:i=i.print;break;case 23:i=i.whats_this;break;case 24:i=i.privacy;break;case 25:i=i.use_address_book;break;case 26:i=i.cancel;break;case 27:i=i.sign_in_contacts;break;case 28:i=i.username;break;case 29:i=i.password;break;case 30:i=i.remember_me;break;case 31:i=i.sign_in;break;case 32:i=i.select_address_book;break;case 33:i=i.error_auth;break;case 34:i=i.email_recipients;break;case 35:i=i.find_a_service;break;case 36:i=i.no_services;break;case 37:i=i.share_again;break;case 38:i=i.sign_out;break;case 39:i=i.getting_contacts;break;case 40:i=i.suggest_a_service;break;case 41:i=i.share_successful;break;case 42:i=i.toolbar_promo;break;case 43:i=i.download;break;case 44:i=i.dont_show_these;break;case 45:i=i.sending;break;case 46:i=i.captcha;break;case 47:i=i.settings;break;case 48:i=i.email_error;break;case 49:i=i.captcha_header;break;case 50:i=i.captcha_instr;break;case 51:i=i.captcha_missing;break;case 52:i=i.captcha_error;break;case 53:i=i.signin_customize}if(i)return i;for(var s in r)if(r.hasOwnProperty(s))for(var c in r[s][0])if(r[s][0].hasOwnProperty(c)&&r[s][0][c]===a&&r[s].length>t&&r[s][t])return r[s][t];return["Bookmark &amp; Share","More...","Email a Friend","Email","Favorites","Multiple emails? Use commas.","To","From","Note","Privacy Policy: We never share your personal information.","Send","Please enter a valid email address.","Message sent!","Subscribe to Feed","Select from these web-based feed readers:","Please don't ask me again; send me directly to my favorite feed reader.","Done","Get your own button!","email address","optional","255 character limit","Print","What's this?","Privacy","Use Address Book","Cancel","Sign in to use your contacts","Username","Password","Remember me","Sign In","Select address book","Error signing in.","Please limit to 5 recipients.","Find a service","No matching services.","Share again.","Sign out","Getting contacts","Suggest a service","Share successful!","Make sharing easier with AddThis for Firefox.","Download","Don't show these","Sending message...",'We hate spam too! Please <a id="at16ecmc" href="#" onclick="_atw.rse();_atw.cef();return true" target="_blank">click here</a> to confirm you are a real-live person.',"Settings","Sorry, we couldn't send this message. Please try again in a few minutes.","Please help us prevent spam.","Type the two words:","Please enter a valid response.","Sorry, your response was incorrect.","Sign in to customize"][t-1]},rss:{aol:"AOL",bloglines:"Bloglines",google:"Google Reader",mymsn:"My MSN",netvibes:"Netvibes",newsisfree:"Newsisfree",pageflakes:"Pageflakes",yahoo:"Yahoo"},emb:{dashboard:"Dashboard",windows:"Windows"},list:T(Y.list),ibm:function(){var e=_atw,t=(e.conf||{}).product||window.addthis_product||"";return x(e.did,"mmborder")||t.indexOf("bkm")>-1},ics:function(e,t){var n,a,o,i,r=_atw;if(r.custom_list)return r.custom_list[e];if(t.services_custom){r.custom_list={},n=t.services_custom;for(o in n)a=n[o],r.custom_list[a.code]=a,e===a.code&&(i=a);return i}return!1},sag:function(){_ate.as(_atw.ibm()?"bkmore":"more")},hkd:function(e){"undefined"==typeof e&&(e=window.event);var t=_atw;e&&27==e.keyCode&&(t.clb(),S(e))},filt:function(e,t,n,a,o,i){var r,s,c=0,l=(_atw,a||"ati_"),u=o||"at16nms",d=i||"div",p=""!=e?e.replace(/\W+/g,"").replace(/ /g,"").toLowerCase():"";m(u),n&&v(n);for(r in t)if("string"==typeof t[r]){var h=A(l+r.replace("@","_")),f=r.toLowerCase(),g=t[r].toLowerCase(),w=0;(f.indexOf(e)>-1||f.indexOf(p)>-1||g.indexOf(p)>-1||g.indexOf(e)>-1)&&(w=1,c++),!s&&h&&(s=h.parentNode),w?v(h):m(h)}if(c&&s){c=0;var b=s.getElementsByTagName(d);for(r in b)b[r].style&&"block"==b[r].style.display&&c++}0===c&&(v(u),n&&m(n)),""==e.replace(/ /g,"")&&n&&m(n)},div:null,xwa:function(){null!==_atw.cwa&&clearTimeout(_atw.cwa)},cwa:null,xhwa:function(){null!==_atw.hwa&&clearTimeout(_atw.hwa)},hwa:null,ost:!1,get:function(e){return"string"==typeof e&&(e=document.getElementById(e)),e},did:"at15s",rhv:function(e){e&&e.className&&(e.className=e.className.replace("athov",""))},shv:function(e){e&&-1==e.className.indexOf("athov")&&(e.className+=" athov")},addImg:function(e){if(e=e.getElementsByTagName("div")[0],e&&!(e.getElementsByTagName("img").length>0)){a=_ate;var t=document.createElement("img");t.align="left",t.src="//s7.addthis.com/images/60x60_at_"+(a.bro.ffx?"firefox_toolbar.jpg":a.bro.msi?"ie_toolbar.gif":a.bro.chr?"ch_extension.gif":"sf_extension.gif"),e.insertBefore(t,e.firstChild)}},eok:function(e){var t=_atw,n=_atw.ver>=200,a=A("at_"+(n?"success":"send")),o=n?A("at_promo"):a;if(m("at_sending"),n)e?(t.err(t.lang(t.conf.ui_language,48),null,"at_error"),v("at_email",1)):addthis_do_ab?(t.ppr=!0,t.cle(),o&&!_ate.dbm&&(_atw.addImg(o),v(o)),v(a),m("at_email")):(o&&!_ate.dbm&&(_atw.addImg(o),v(o)),v(a),m("at_captcha"),m("at_email"),t.cle());else{var i=t.lang(P,13);-1==i.indexOf("&")&&(a.value=i)}t.cwa=setTimeout(_atw.clo,1200),_ate.gat&&_ate.gat("email",null,t.conf,t.share)},roe:function(e){var t=_atw;m("at_sending"),t.cle(),_atw.ver>=200&&t.err(t.lang(t.conf.ui_language,46).replace('href="#"','href="'+e+'"'),null,"at_error")},ert:function(e,t,n){n||(n="at_error");var a=_atw,o=A(n);o.innerHTML=e||a.lang(a.conf.ui_language,33),v(o),t&&(t.style.borderColor="#dd0000")},err:function(e,t,n){var a=_atw,o=_atw.ver>=200;null===a.fe&&t&&(a.fe=t,t.focus(),o?(t.style.outlineStyle="none",t.style.outlineWidth="0px"):alert(e)),o&&setTimeout(function(){a.ert(e,t,n)},50)},mck:0,cef:function(){var e=_atw,t=_ate,n=e.mck<2||e.ibm();return addthis_do_ab?n?t.com("cef"):t.com("cle"):n?e.clb():t.as("more"),!1},cle:function(){var e=_atw,t=_atw.ver>=200?"":"15",n=A("at_msg"+t),a=A("at_to"+t);n&&(n.value=addthis_email_note||e.conf.ui_email_note||""),a&&(a.value=e.conf.ui_email_to||""),m("at16pit")},rse:function(e){var t=_atw,n=_atw.ver,a="at_from"+(200>n?"15":""),o="at_to"+(200>n?"15":""),i=A(o),r="at_"+(200>n?"send":"success"),s=t.lang(t.conf.ui_language,11),c=function(e){e=A(e),e&&(e.style.borderColor=e.style.outlineWidth=e.style.outlineStyle="")};200>n&&-1==s.indexOf("&")&&(A(r).value=s),i&&", "==i.value.substr(i.value.length-2)&&(i.value=i.value.substr(0,i.value.length-2)),c("at_ab_user"),c("at_ab_pass"),m("at_ab_error"),m("at_error"),m("at16eatdr"),m("at_captcha"),e||(c(a),c(o),m(r),m("at_promo"),v("at_email",1))},lml:u,clo:function(){var e=_atw,t=A(e.did),n=_atw.ver,a=document.gn("embed");if(t&&(200>n&&m("at_email15"),m(t),V.ie6&&m("atie6cmifh"),m("at_pspromo",1)),a&&e.conf&&e.conf.ui_hide_embed)for(i=0;i<a.length;i++)a[i].addthis_hidden&&(a[i].style.visibility="visible");return e.sta&&"compact"==e.sta&&(_ate.ed.fire("addthis.menu.close",window.addthis||{},{pane:e.sta}),e.sta=null),!1},hash:window.location.hash,psp:function(){if((V.msi||V.ffx||V.chr||V.saf||_atc.sjp)&&!V.ipa){var e=(window,window._atab,_atw);if(!e.addthis_popup_mode){if(e.mck<1){var t=(A("at15ptc"),A(e.did));A("at15s_brand");if(m("at_hover"),!(_ate.sau||{}).gat){var n=(document.getElementById("at_testpromo_bg")||{}).style;n&&(n.background="url(//s7.addthis.com/images/btn_"+(V.saf?"saf_dl120.gif":V.chr?"ch_dl120.gif":V.msi?"ie_dl129x51.jpg":"ff_dl120.jpg")+")",V.saf?(n.width="120px",n.height="47px"):V.msi&&(n.marginBottom="-12px"))}v("at_pspromo",1),v(t),l("at16lb")}else e.clb();V.msi&&"BackCompat"==document.compatMode?m("atic_auth",!0,!0):m("atic_auth"),b("at15s","at-menu-auth")}}},clb:function(){var e=window,t=(window._atab,_atw);return t.mck=0,t.addthis_popup_mode?e.close():e.addthis_do_ab?_ate.com("clb"):(m("at_complete"),m("at16lb"),m("at_email"),m("at_promo"),m("at_pspromo",1),m("at16p"),m("at15s"),b("at15s_head","at15s_head_success"),m("atie6ifh"),m("atie6cmifh"),m("at15s"),(_ate.maf||{}).pre&&_ate.maf.pre.focus()),t.sta&&"compact"!==t.sta&&(_ate.ed.fire("addthis.menu.close",window.addthis||{},{pane:t.sta}),t.sta=null),!1},sho:function(e,t){var n=(_ate,_atw),a=_atw.ver,o=(n.conf.ui_language.split("-").shift(),a>=200||"bkemail"==e||n.ibm()),i="at16lb",r="at_hover",s="at_feed",c="at_share",u="at16psf",d="at_email"+(o?"":15),p=A("at16pit"),h=A(_atw.did),f=A("atie6ifh"),g=A("at16p"),x=A("at_to"),C=A("at"+(o?16:15)+"ptc"),k=!1,R=!1;if(m(c),m(s),m(u,1),m(d,1),m("at_copylink",1),m("at16abifc"),m("at_error"),m(r),o&&(m(h),m(p,1),m("at_promo"),m("at_success"),m("at_pspromo",1),b("at15s_head","at15s_head_success")),"feed"==e)m(c),w(s,"atused"),v(s),C.innerHTML=addthis_caption_feed,k=!0;else if("share"==e||""===e||"bkmore"==e)"bkmore"==e?(k=R=!0,w(n.did,"mmborder")):(e="share",h.style.display="",b(n.did,"mmborder")),m(g),n.conf.ui_use_vertical_menu&&m("at15s_head"),v(r),V.ipa&&l("at16lb"),C&&(C.innerHTML=addthis_caption_share);else{if(_atw.mck++,"link"==e){C&&(C.innerHTML="Permalink");var z=document.createElement("iframe");z.src=t,z.frameBorder="0",z.height="353px",z.width="295px",A("at_copylink").innerHTML="",A("at_copylink").appendChild(z),v("at_copylink",1)}else if("more"!==e){if("bkemail"==e||n.ibm()?(w(n.did,"mmborder"),m("at_use_addr"),m(p,1),R=!0):o&&v("at_use_addr"),-1==e.indexOf("email")&&(e="email"),n.rse(),a>=200&&(v("at16abifc"),window._atab&&(_atab.plda(),n.ppr&&(n.ppr=!1,n.conf.ui_use_addressbook&&(_atab.opp(),_atab.opp())))),v(d,1),a>=200&&(m(c),R||v(p,1),window._atab)){var S=_atab.ipo();p&&(p.innerHTML="&"+(S?"l":"r")+"aquo;")}C.innerHTML=addthis_caption_email,"emailab"==e&&_atab.opp()}else m("at_captcha"),v(c),v(u,1),C&&(C.innerHTML=addthis_caption_share);k=!0}if(k&&a>=200||R){var D="bkmore"==e||"link"==e;if(v(i),addthis_do_ab)g.style.marginTop=0,g.style.marginLeft=0,g.style.top=0,g.style.left=0;else{var U=M(!0),I=M(),O=B();y(i,U[0]-O),E(i,U[1]-O),!D||o?g.style.marginTop=Math.max(0,I[1]/2-222.5)+"px":h.style.display=""}if(!D&&(V.ie6&&v(f),v(g),window.addthis_do_ab||n.fpf(),"more"==e)){y(g,300),y("at16abifc",300);var N=A("at16filt");N&&"none"!=N.style.display&&N.focus()}"email"==e&&x&&x.focus()}if(n.show-->0&&!_atc.abf){var _=n.conf.services_compact_org||"",Q=_.split(",").length,T=0,j=0,H=window.addthis_ssh;H&&n.csl&&(H=H.split(n.csl).shift().replace(/,$/,"")),H||n.crs||!_||_===addthis_options_default?H&&H!==n.crs&&(T=window.addthis_ssh):j=Q,_ate.ed.fire("addthis-internal.compact",window.addthis||{},{svc:e,cmo:j,cso:T,crs:n.crs,pco:n.conf.product||addthis_product})}},dut:function(e,t){var n=document,a=(e||"").toLowerCase(),o=(t||"").toLowerCase();return addthis_url=e,addthis_title=t,(""===a||"[url]"===a||"<data:post.url/>"===a)&&(addthis_url=location.href),(""===o||"[title]"===o||"<data:post.title/>"===o)&&(addthis_title=n.title),[addthis_url,addthis_title]},menu:function(e,t,a,o){var i=_ate,l=_atw,u=document,p=(a||l.share.url||"").toLowerCase(),v=((o||l.share.title||"").toLowerCase(),j(),n(163));if("feed"==t&&p.length&&(l.share.url="feed://"+(a||l.share.url)),l.ost){var y=A("at15s_brand"),E=A("at16_brand"),k=l.conf.ui_cobrand,B=A("at15ptc"),S=l.conf.ui_header_color,I=l.conf.ui_header_background;y&&(y.innerHTML=k),E&&(E.innerHTML=k),B&&(B.innerHTML=window.addthis_caption_share),g("at15s_head","backgroundColor",I),g("at16pt","backgroundColor",I),g("at16ptx","color",S),g("at16pt","color",S),g("at16ptc","color",S),g("at15s_brand","color",S),g("at16ptc","color",S),l.conf.ui_use_close_control?(w("at15s_brand","at15s_brandx"),b("at15sptx","at15dn")):(b("at15s_brand","at15s_brandx"),w("at15sptx","at15dn"))}else{var O=window;if(s(_atw.hkd),!_atc.ostm){if(!O.addthis_product||0!==O.addthis_product.indexOf("f"))for(he in O.addthis_conf)_atc[he]=O.addthis_conf[he];for(he in O.addthis_config)"product"!=he&&"services_compact"!=he&&(l.conf[he]=O.addthis_config[he]);_atc.ostm=1}l.ti=1;var N,Q,T,H,G="</span>",L="</div>",F="</a>",P='<div style="clear:both;">'+L,Y=l.conf.ui_language||"en",$=function(e,t,n,a){return'<input id="'+e+'" '+(addthis_do_ab?'class="abif" ':V.ffx&&2==V.mode?'class="atfxmode2"':"")+'name="'+e+'" type="text" tabindex="'+_atw.ti++ +'" '+(n?'value="'+n+'" ':"")+'size="'+(a?a:30)+'"'+t+"/>"},ee=window.addthis_feed||(l.share.url?l.share.url.indexOf("feed://")>-1:!1)||l.hf,te=l.conf.ui_header_background,ne=""!=te?' style="background-color:'+te+'"':"",ae=l.conf.ui_header_color,oe=(window.addthis_ssh?addthis_ssh.split(","):[],""!=ae?' style="color:'+ae+'"':""),ie=window.addthis_caption_share,re=(l.conf.services_exclude||"").replace(/\s/g,"").replace(/\*/,""),se=l.conf.product||window.addthis_product,ce=_ate.cookie.rck("_atfrom"),le={},ue='<div id="at16lb"'+(V.msi?' style="filter:alpha(opacity=0.01);"':"")+' onclick="return _atw.clb()">'+L;if(re)for(var de=re.split(","),pe=0;pe<de.length;pe++)le[de[pe]]=1;_atw.excluded=le;var Ae=(l.conf.services_compact||addthis_options_default).replace(/\s/g,"").replace(/\*/,"");""===j()&&-1==se.indexOf("ffext")&&-1==se.indexOf("fxe")&&(Ae=Ae.replace(/^email(?:,)|,email/g,"")),Ae=Ae.split(",");for(var he=0;he<Ae.length;he++)if(he<Ae.length-1&&"more"==Ae[he]){var v=Ae.splice(he,1);Ae.push(v[0]);break}Ae=r(Ae),ue+=[V.ie6?'<iframe id="atie6ifh" src="javascript:false" style="display:none;filter:alpha(opacity=0)"></iframe><iframe id="atie6cmifh" src="javascript:false" style="display:none;filter:alpha(opacity=0)"></iframe>':"",f("at16pcc"),f("at16p",!ee&&_atw.ver>=200?1:0),h("atpro"),h("atclb"),h("atopp"),h("atcle"),h("atcef"),f("at16pib"),f("at16pi")].join(""),ue+=!addthis_do_ab&&l.conf.ui_use_addressbook?'<a id="at16pit" href="#" onclick="if (window._atab) return _atab.opp()" style="display:none">&raquo;'+F:"",ue+=f("at16pp",0)+L,ue+=f("at16pm",1,0,2==V.mod?'style="width:299px"':0==V.mod?'style="width:300px"':""),ue+=f("at16pt",1,0,ne),ie==l.lang(Y,1)&&"feed"==t&&(ie=l.lang(Y,14)),ue+='<h4><span id="at16ptc"'+oe+">"+ie+G+'</h4><span id="at16_brand"'+oe+">"+l.conf.ui_cobrand+G,ue+='<a id="at16ptx" href="#" tabindex="9000" onclick="return _atw.clb()"'+oe+'>X<span class="at_a11y">Close AddThis Expanded Menu</span></a>',ue+=L,ue+=f("at16pc",1,"at_default");var fe=l.rss;ue+=f("at_feed",0),ue+='<span style="display:block">'+l.lang(Y,15)+G+"<br/>";var he=1;for(var N in fe)le[N]||"string"==typeof fe[N]&&(ue+="<div"+c()+(he%2===0?' class="at_litem"':"")+(" onclick=\"return addthis_sendto('"+N+"');\">")+'<a class="fbtn at_baa '+N+'">'+fe[N]+"</a>"+L,he++);ue+=L,ue+=f("at_share"),ue+=f("at16psf"),ue+='<label for="at16filt" class="at_a11y">Sharing Service Filter</label>',ue+=$("at16filt","maxlength=\"50\" onkeyup=\"_atw.filt(this.value,_atw.list,false,'ati_','at16nms','a');_atw.uus()\""+(V.msi?"":' style="padding:2px 0 0"'),""),ue+=L,ue+=f("at16ps",1,0,'class="addthis_32x32_style" '+(2==V.mod?'style="height:292px"':"")),ue+=f("at16nms",0)+(l.lang(Y,36)||"")+L,fe=l.list;var ge=l.conf.services_expanded||[],me=0;if(l.conf.services_expanded)ge=ge.replace(/ /g,"").split(",");else for(var N in fe)"string"!=typeof N||le[N]||ge.push(N);for(ge.sort(function(e,t){if("string"==typeof fe[e]&&"string"==typeof fe[t]){var n=(fe[e]||"").toLowerCase(),a=(fe[t]||"").toLowerCase();return(n>a?1:n==a?0:-1)||0}return 0}),he=0;he<ge.length;he++)N=ge[he],H=l.css[N],T=fe[N],"string"!=typeof T||le[N]||me++;ue+=L,ue+=P+L,ue+=f("at_complete",0),ue+='<button onclick="_atw.clb()">'+l.lang(Y,17)+"</button>",ue+=L,ue+=f("at_success",0)+l.lang(Y,13)+' <a href="#" onclick="'+(addthis_do_ab?"_ate.com('cle');_atw.rse()":"_atw.get('at16filt').value='';_atw.filt('',_atw.list);_atw.sag()")+';return false">'+_atw.lang(Y,37)+"</a>"+L,ue+=f("at_sending",0)+'<div class="at16c"><div class="at_redloading"></div><br/>'+l.lang(Y,45)+L+L,ue+=f("at_error",0,null,'class="at_error"')+L,ue+=f("at_copylink",0),ue+=L,ue+=f("at_captcha",0)+L,ue+=L;var ve=!V.ipa&&l.conf.ui_use_vertical_menu;ue+=(addthis_do_ab?"":D)+L+L+L+L+L,ve&&(U=U.replace('id="','class="atm-f'+(V.msi&&V.mod?" atm-f-iemode2":"")+'" id="'));var we=f("at15s_head",1,0,ne)+'<span id="at15ptc"'+oe+">"+addthis_caption_share+"</span><span "+(l.conf.ui_use_close_control?'class="at15s_brandx" ':"")+'id="at15s_brand"'+oe+">"+l.conf.ui_cobrand+'</span><a id="at15sptx" '+(l.conf.ui_use_close_control?"":'class="at15dn" ')+'href="#" onclick="return _atw.clb()"'+oe+' onkeydown="if(!e){var e = window.event||event;}if(e.keyCode){_ate.maf.key=e.keyCode;}else{if(e.which){_ate.maf.key=e.which;}}if(_ate.maf.key==9){ addthis_close(); _ate.maf.sib.tabIndex=9001;_ate.maf.sib.focus();}else{/*alert(_ate.maf.key)*/} _ate.maf.key=null" tabindex="9000" >X</a>'+L,be=i.bro.msi,xe=i.bro.chr,Ce=i.bro.saf,ye=be?"Internet&nbsp;Explorer":xe?"Chrome":Ce?"Safari":"Firefox",Ee=function(e){return"http://"+_atd+(Ce?"tools/safari?":be?"tools/internet-explorer?":"landing?"+(xe?"to=chrome&amp;":"to=ffext&amp;"))+"utm_source=ps&amp;utm_medium="+(e?e:"link")+"&amp;utm_content=AT"+(be?"IE":xe?"CH":Ce?"SF":"FF")+"&amp;utm_campaign=ATSP"+(be?"I":xe?"C":Ce?"S":"F")+"4_DL"},ke=f("at_pspromo",0);if((i.sau||{}).gat){var Me="?utm_source=Promo&utm_medium=link&utm_campaign=at_ra&utm_content=ATPS"+(i.bro.ffx?"FF":i.bro.msi?"IE":i.bro.chr?"CR":"SF")+"_DL";ke+='<div style="float:left; text-align:center; margin:20px 0 0 -1px; width:150px"><span style="font-size:12px; color:#4c4c4c; font-weight:normal; line-heig">Know what your users are<br>sharing, in real time.</span>',ke+='<a href="http://www.addthis.com/analytics'+Me+'" target="_blank"><img src="//s7.addthis.com/static/t00/ata_60.png" style="border:none; display:block;margin:15px 0 0 0" /></a>',ke+=L}else ke+='<div style="position:absolute;display:block;border:0">    <div id="at_testpromo" style="display:block"><div class="at-promo-single" align="center">    <h4>'+l.lang(Y,42).replace("Firefox",ye)+'</h4>    <div align="center"><a target="_blank" href="'+Ee("img")+'">      <div id="at_testpromo_bg" class="at-promo-single-dl-'+(Ce?"sa":xe?"ch":be?"ie":"ff")+'" border="0" alt="'+_atw.lang(Y,43)+'"></div></a>'+(i.bro.ie6||i.bro.ie7||i.bro.ff2?"":(_atw.ver<300?"<br>":"")+'<a target="_blank" href="http://'+_atd+'pages/toolbar-preferences" style="'+(be&&2==i.bro.mod&&ve?"position:absolute;left:35px;top:125px":"padding-top:10px")+';font-size:10px">'+_atw.lang(Y,44)+"</a>")+"</div></div>    </div></div>";ke+=L;for(var Re,ze,Be="ja,fr,he,it,af,ga,el,tl,ro,ru,ms,mk,az,zh,sq,te,be,ta,uk,ml,eu,se,su,aze,gre,tra,fre,gdh,jpn,mac,mak,msa,may,ron,rum,rus,tam,tgl,ukr,zho",Se=(window.addthis_ssh||"").split(","),De={},Ue=[],he=0;he<Se.length;he++)De[Se[he]]=1;Ae=V.ipa?d(Ae,7,"more"):ve?d(Ae,8,"more"):d(Ae,12,"more");for(var he=0;he<Ae.length;he++){N=Ae[he],H=l.css[N];var fe=l.list,Ie=Y.split("-").shift(),Oe=N.split("_").shift(),Ne=De[Oe]||De[N];if(N in fe){if(T=fe[N],le[N]||"string"!=typeof T)continue;if(Q=H?K(N,H):J({code:N,alt:T,title:T}),!Q)continue;if("email"!==N||""!==j()||se.indexOf("ffext")>-1||se.indexOf("fxe")>-1){if(ve)Re=v.a(Q,v.span(fe[N]+("more"===N&&-1===Be.indexOf(Ie)?" ("+me+")":"")).css("at-label",Ne?" at_bold":"","at-size-16")).id("atic_"+N).href("#"),ze=Re.element,ze.addEventListener?(ze.addEventListener("keypress",Z,!1),ze.addEventListener("keydown",W,!1),ze.addEventListener("blur",q,!1),ze.addEventListener("click",_(X,null,N),!1)):ze.attachEvent&&(ze.attachEvent("onkeypress",Z),ze.attachEvent("onkeydown",W),ze.attachEvent("onblur",q),ze.attachEvent("onclick",_(X,null,N)));else{if("link"===N&&V.ie9)continue;Re=v.a(Q,v.span(fe[N]+("more"===N&&-1===Be.indexOf(Ie)?" ("+me+")":"")).css("at-label")).id("atic_"+N).href("#").css("at_item "+(V.ipa?"addthis_16x16_style ":"")+(Ne?" at_bold":"")+" at_col"+he%2).attr("onclick","return addthis_sendto('"+N+"');").attr("onmouseover",i.bro.ffx&&2!=i.bro.mode||i.bro.ipa?"":"_atw.shv(this)").attr("onmouseout",i.bro.ffx&&2!=i.bro.mode||i.bro.ipa?"":"_atw.rhv(this)").attr("tabindex",he+2)}Ue.push(Re),0===he&&(_ate.maf.firstCompact="atic_"+N)}}}Ue.push(v.div().style("clear:both;"));var _e=U.replace("mm","hm"),Qe=v.div().id("at20mc").style("z-index:1000000;position:static").css(V.ipa?"ipad":"").html(ue).element,Te=v.div(Ue).id("at_hover").css(ve?"atm-s":"").style("display:none;"),Ve=v.div(v.div().html(we).element.firstChild,v.div().html(ke).element.firstChild,Te,v.div().html(_e).element.firstChild);ve?Ve.css("atm-i"):Ve.id(l.did+"_inner");var je=v.div(Ve).id(l.did).css((V.ie6?l.did+(ve?"atm":"")+"ie6":V.msi&&V.mod&&!ve?"atiemode2":"")+(ve?" atm":"")).attr("onmouseover","_atw.xwa()").attr("onmouseout","if (this.className.indexOf('border')==-1) addthis_close()").style("z-index:1000000;position:absolute;display:none;visibility:hidden;top:0px;left:0px;").element;Qe.appendChild(je),u.body.appendChild(Qe);var he=A("at_from");he&&(he.value=addthis_do_ab?addthis_efrom||ce||"":ce||l.conf.ui_email_from||"")}l.xwa(),l.dut(a,o);var He,Ge,Le,Fe=16;e.getElementsByTagName&&(He=e.getElementsByTagName("img"),Ge=e.getElementsByTagName("span")),Le=C(e,"addthis_counter")&&Ge&&Ge[0],He&&He[0]?(e=He[0],Fe=0):Le||x(e,"addthis_button")&&Ge&&Ge[0]?(e=Ge[0],Fe=0):(i.bro.saf||i.bro.chr)&&e.childNodes&&1==e.childNodes.length&&3==e.childNodes[0].nodeType&&(Fe=0);var Pe=offLeft=void 0;if(Pe="undefined"!=typeof(window.addthis_config||{}).ui_offset_top?(window.addthis_config||{}).ui_offset_top||0:l.conf.ui_offset_top||0,"undefined"!=typeof(window.addthis_config||{}).ui_offset_left?offLeft=(window.addthis_config||{}).ui_offset_left||0:offLeft=l.conf.ui_offset_left||0,l.sho(t,a),"email"!=t&&"feed"!=t&&"more"!=t&&"bkemail"!=t&&("email"!=t||!x(l.did,"mmborder"))){var Ye=(z(e),void 0!=offLeft?offLeft:l.conf.ui_offset_left),Je=void 0!=Pe?Pe:l.conf.ui_offset_top,Ke=0,Ze=0,We=M(),qe=R(),Xe=A(l.did)||{style:0},$e=Xe.style,et=V.ie6?A("atie6cmifh").style:null,tt=l.conf.ui_hover_direction||0,nt=l.conf.ui_compact_direction||-1,at="bkmore"==t||x(l.did,"mmborder"),ot=-1!=nt&&1&nt,it=-1!=nt&&2&nt,rt=-1!=nt&&4&nt,st=-1!=nt&&8&nt;if(0===$e)return l.ost=!0,!1;$e.display="";var ct=Xe.clientWidth,lt=Xe.clientHeight;if(at){var ut=A("at16p");Ke=We[0]/2-ct/2,Ze=ut&&""!=ut.style.marginTop?ut.style.marginTop:Math.max(0,We[1]/2-222.5)+"px",Ze=Ze.split("px").shift()-8}else{var dt=e.getBoundingClientRect(),pt=window.scrollY||document.documentElement.scrollTop,At=window.scrollX||document.documentElement.scrollLeft,ht=window.innerHeight||document.documentElement.clientHeight;(0===dt.height||0===dt.width)&&(dt=e.parentElement.getBoundingClientRect());var ft=dt.top>.66*ht,gt=-1!==tt&&!st,mt=ft&&gt;if(rt||1===tt||mt){var vt=Xe.getBoundingClientRect(),wt=vt.bottom-vt.top;Ke=At+dt.left,Ze=pt+dt.top-wt}else Ke=At+dt.left,Ze=pt+dt.bottom;var bt=Ke-qe[0]+ct+20>We[0];(ot||!it&&bt)&&(Ke=Ke-ct+(e.clientWidth||50))}if((Le&&((e.parentNode.parentNode.parentNode.parentNode||{}).className||"").indexOf("bar_vertical")>-1||!Le&&((e.parentNode.parentNode.parentNode||{}).className||"").indexOf("bar_vertical")>-1)&&(Ze+=qe[1]+(Le?16:0)),l.conf.ui_hide_embed){var xt=Ke+ct,Ct=Ze+lt,yt=u.gn("embed"),Et=0,kt=0,Mt=0;for(he=0;he<yt.length;he++)Et=z(yt[he]),kt=Et[0],Mt=Et[1],Ke<kt+yt[he].clientWidth&&Ze<Mt+yt[he].clientHeight&&xt>kt&&Ct>Mt&&"hidden"!=yt[he].style.visibility&&(yt[he].addthis_hidden=!0,yt[he].style.visibility="hidden")}b("at15s_head","at15s_head_success"),m("at_pspromo",1);var Rt=_ate.util.parent(e,".addthis_bar"),zt=_ate.util.parent(e,".addthis_toolbox"),Bt=function(e){return window.getComputedStyle&&null!=e&&e!=document?"fixed"===window.getComputedStyle(e).position:!1};Ke+=parseInt(Ye,10),Ze+=parseInt(Je,10),$e.left=Ke+"px",Bt(zt)||Bt(Rt)?$e.top=Ze+qe[1]+"px":$e.top=Ze+"px",$e.visibility="visible",et&&(et.left=$e.left,et.top=$e.top),at&&l.fpf()}_ate.maf.key="9",_ate.maf&&_ate.maf.sib&&(_ate.maf.sib.tabIndex="1000");try{A("at_hover").getElementsByTagName("a")[0].focus()}catch(yt){}l.ost=!0},nuc:function(e,t,n){m("at_error"),_atw.hsr(n,"nucaptcha")},hsr:function(e,t){var n,a="",o=_atw.share&&_atw.share.email_vars?_atw.share.email_vars:addthis_share&&addthis_share.email_vars?addthis_share.email_vars:{};if(_atw.ver<200||!window.postMessage)return void _atw.roe(e);if(m("at_sending"),m("at_email"),(n=A("at16recapframe"))||(A("at_captcha").innerHTML="",n=document.createElement("iframe"),n.id="at16recapframe",n.scrolling="no",n.width="298px",n.height="315px",n.frameBorder="0",A("at_captcha").appendChild(n)),o&&"object"==typeof o)for(var i in o)"string"==typeof o[i]&&(a+=(""===a?"":"&")+_euc(i)+"="+_euc(o[i]));!addthis_share.email_template&&_atw.share.email_template&&(addthis_share.email_template=_atw.share.email_template);var r=_euc(_ate.share.geneurl(addthis_share,{from:A("at_from").value,to:A("at_to").value,vars:a,note:A("at_msg").value},this.mck>1?{product:"max-"+_atw.ver}:null));V.msi&&(t="recaptcha"),n.src=_atr+("nucaptcha"==t?"nucaptcha.html":"recaptcha.html")+"#lng="+_euc(O())+"&tellfriend="+_euc(r),v("at_captcha"),window._atab&&(_atab.ipo()&&_atab.opp(!0),m("at16pit",1),window.addthis_do_ab&&_ate.com("hip"))},cpmh:function(e){if(e&&e.origin&&".addthis.com"==e.origin.substr(e.origin.length-12)){var t=A("at16recapframe");switch(e.data){case"reclb":t&&t.parentNode.removeChild(t),_atw.clb();break;case"rerse":m("at_error");break;case"ncr":_atw.err(_atw.lang(_atw.conf.ui_language,51),A("at16recapframe")),_atw.cle();break;case"cpe":_atw.err(_atw.lang(_atw.conf.ui_language,52),A("at16recapframe")),_atw.cle();break;case"eok":t&&t.parentNode.removeChild(t),_atw.eok()}}},evar:function(){try{var e,t,n=_atw,a=function(e,t,n){return n||(n=window),(void 0===n[e]||""===n[e])&&(n[e]=t),n[e]},i="addthis_",r=_ate,s="services_",c=i+"logo",l=i+"header",u=i+"caption_",d=r.gvl((_atw.conf||{}).ui_language||r.lng()),A=j(),h=n.conf&&!p(n.conf)?n.conf:window.addthis_config||{},f=n.share||window.addthis_share||{},g=h.services_custom,m=_atw.ibt();if((r.bro.xp||r.bro.mob)&&delete n.list.mailto,window[i+"language"]=d,a("ui_use_vertical_menu",!0,h),vertical=!V.ipa&&h.ui_use_vertical_menu,a(i+"localize",0),a(i+"feed",""),a(i+"wpl"),n.hf=addthis_feed.length>0,a(u+"email",n.lang(d,3)),a(i+"caption",n.lang(d,1)),a(i+"use_addressbook",!1),a(i+"do_ab",!1),a(i+"product","men-"+_atw.ver),_atw.ver>=300&&(n.list.settings=n.lang(d,47)+"..."),n.list.more=n.lang(d,2),n.list.email=n.lang(d,4),n.list.favorites=n.lang(d,5),
n.list.print=n.lang(d,22),a(i+"popup",!1),a(i+"popup_mode",!1),a(i+"url",""),a(i+"append_data",!A||"addthis"==A.toLowerCase()),a(i+"brand",""),a(i+"title",""),a(i+"content",""),a(i+"email_note",_atc.enote?_atc.enote:""),a(i+"email_from",""),a(i+"email_to",""),a(i+"use_personalization",!0),a(i+"options_default",L.getPopServices().split(",").slice(0,11).join(",")+",more"),a(i+"options_rank",L.getPopServices()),a(i+"options",addthis_options_default),a(i+"exclude",""),a(i+"ssh",""),a(c,""),a(c+"_background",""),a(c+"_color",""),a(l+"_background",""),a(l+"_color",""),a(u+"share",addthis_caption),a(u+"feed",n.lang(d,14)),a(i+"hide_embed",!1),a(i+"share",{}),V.ipa&&(addthis_exclude&&-1==addthis_exclude.indexOf("print")&&(addthis_exclude+=","),addthis_exclude+="print"),a("type","link",f),a("url",addthis_url,f),a("title",addthis_title,f),a("description","",f),a("swfurl","",f),a("modules",{},f),a("feed",addthis_feed,f),a("screenshot","",f),a("author","",f),a("email_template",window.addthis_email_template||"",f),a("email_vars",window.addthis_email_vars?"string"==typeof addthis_email_vars?_ate.util.fromKV(addthis_email_vars):addthis_email_vars:{},f),a("ui_cobrand",addthis_brand,h),a("ui_disable",!1,h),a("ui_508_compliant",!1,h),a("ui_window_panes",!1,h),a("ui_close_control",!h.ui_cobrand&&(h.ui_click||_atw.ver>=200),h),a("ui_click",h.ui_window_panes,h),a("ui_email_note",addthis_email_note,h),a("ui_email_from",_ate.cookie.rck("_atfrom")||addthis_email_from||"",h),a("ui_email_to",addthis_email_to,h),a("ui_hover_direction",0,h),a("ui_compact_direction",-1,h),a("ui_delay",window.addthis_hover_delay,h),a("ui_language",addthis_language,h),a("ui_hide_embed",addthis_hide_embed,h),a("ui_localize",addthis_localize,h),a("ui_header_color",addthis_header_color,h),a("ui_header_background",addthis_header_background,h),a("ui_icons",!0,h),a("ui_use_embeddable_services_beta",!1,h),a("ui_use_embeddable_services",h.ui_use_embeddable_services_beta,h),a("ui_use_mailto",!1,h),a("ui_use_addressbook",addthis_use_addressbook||m,h),a("ui_use_close_control",h.ui_close_control,h),a("ui_open_windows",!1,h),a("ui_show_promo",!0,h),a("data_ga_tracker",null,h),a("data_ga_property",null,h),a("data_omniture_collector","",h),a("pubid",window.addthis_pub,h),a("username",h.pubid,h),a("product",addthis_product,h),a("data_track_clickback",addthis_append_data||h.data_track_linkback||_ate.track.ctp(h.product,h),h),a(s+"custom",[],h),a(s+"localize",d,h),a(s+"expanded","",h),a(s+"compact_org",h.services_compact,h),a(s+"exclude",addthis_exclude,h),h.services_exclude=h.services_exclude.replace(/\s/g,""),a(s+"exclude_natural",h.services_exclude,h),n.conf.parentServices&&N(n.conf.parentServices,function(e){h.services_exclude+=(h.services_exclude.length>1?",":"")+e}),0==h.ui_show_promo&&(_ate.dbm=1),h.ui_use_embeddable_services||f.swfurl||f.swfurl_secure||f.iframeurl||(!f.url||f.url==window.location.href)&&(_ate.share.links.iframe_src||_ate.share.links.video_src))for(t in n.emb)n.list[t]=n.emb[t];else for(t in n.emb)f.modules[t]&&(n.list[t]=n.emb[t]);if(g)for(n.custom_list=n.custom_list||{},g instanceof Array||(g=[g]),e=0;e<g.length;e++){var v=g[e];v.name&&v.icon&&v.url&&o(v.url)&&(v.code=v.url=v.url.replace(/ /g,""),0===v.code.indexOf("http")&&(v.code=v.code.substr(0===v.code.indexOf("https")?8:7)),v.code=v.code.split("?").shift().split("/").shift().toLowerCase(),n.custom_list[v.code]=v,n.list[v.code]=v.name,n.css[v.code]={"background-image":"url("+v.icon+")","background-repeat":"no-repeat","background-position":"top left","background-color":"transparent !important","background-size":"16px"},g[e]=v)}else g=[];var w=_ate.share.services.init(h)||{};if(n.crs=w.crs,n.csl=w.csl,h.services_compact=(w.conf||{}).services_compact,a(s+"compact",addthis_options,h),n.conf=h,n.share=f,h.ui_use_addressbook&&_atc.abf)return!0}catch(r){window.console&&console.log("evar",r)}return!1}},function(){var e=n(165).getMixin({campaign:"AddThis compact menu"}),t=n(19).isBrandingReduced();U=f("at15pf")+e.generateBranding(t).element.innerHTML+"</div>",D=(f("at15pf")+'<a class="at-privacy-info" target="_blank" href="'+G+' ">'+H("Privacy",24)+"</a>"+e.generateBranding(t).element.innerHTML+"</div>").replace(/15/g,"16").replace(/compact/,"expanded")}(),_ate.menu=n(101)(D),addthis.menu=_ate.menu.open,addthis.menu.close=_ate.menu.close,_ate.ao=function(e,t,n,a,o,i){if(e===document.body)return _ate.menu.open(e,o,i);if(V.iph||V.dro||V.wph)return!0;var r=_atw;if(_atw.ver>=250&&(o&&!p(o)&&(r.conf=o),i&&!p(i)&&(r.share=i)),!r.evar()){n&&_ate.usu(n);var s=r.dut(n,a);r.share||(r.share={}),n&&(r.share.url=s[0]),a&&(r.share.title=s[1]);var c=(_ate,document,(n||r.share.url||"").toLowerCase(),(a||r.share.title||"").toLowerCase(),j(),r.conf.ui_delay);if(c&&""===t){if(c=Math.min(500,Math.max(50,c)),r.xhwa(),r.hwa=null,"hwe"!=e)return r.hwe=e,void(r.hwa=setTimeout(function(){_ate.ao("hwe",t,n||r.share.url,a||r.share.title||"")},c));e=r.hwe,r.hwe=null}return r.conf.ui_window_panes===!0?_ate.as("email"==t||"link"==t?t:"more",r.conf,r.share):"link"==t?r.menu(e,t,_atr+"static/link.html#inl=true&url="+_euc(n)+"&ats="+_euc(I(addthis_share))+"&atc="+_euc(I(addthis_config)),a):r.menu(e,t,n,a),(!r.sta||"expanded"==r.sta&&"email"==t)&&("more"==t&&(t="expanded"),t||(t="compact"),!r.sta||"email"!=t&&"link"!=t||_ate.ed.fire("addthis.menu.close",window.addthis||{},{pane:r.sta}),r.sta=t,_ate.ed.fire("addthis.menu.open",window.addthis||{},{element:e,pane:t,url:n,title:a,conf:o,share:i})),!1}},_ate.ac=function(){_atw.xhwa(),k("at_pspromo")||(clearTimeout(_atw.cwa),_atw.cwa=setTimeout(_atw.clo,_atc.cwait))},_ate.as=function(e,t,n){var a,o=T(n),i=T(t);return n=_ate.util.extend(o||{},_atw.share||{}),t=_ate.util.extend(i||{},_atw.conf||{}),a=_ate.util.extend(n,t),_ate.share.cleanly(e,a),!1};for(;_ate.plo&&_ate.plo.length>0;){var te=_ate.plo.pop(),ne=te[0];switch(ne){case"open":addthis_open(te[1],te[2],te[3],te[4],te[5],te[6]),_atw.plo.push(te);break;case"cout":break;case"send":var ae,oe;te.length>2&&(ae=te[2],oe=te[3]),addthis_sendto(te[1],ae,oe);break;case"span":var ie=A(te[1]);ie&&(_atw.evar(),ie.innerHTML='<a href="'+_ate.share.genurl("")+"\" onmouseover=\"return addthis_open(this, 'share', '"+te[2]+"', '"+(te[3]||"").replace(/'/g,"\\'")+'\')" onmouseout="addthis_close()" onclick="return addthis_to()" class="snap_noshots"><img src="'+_atr+'static/btn/v2/lg-bookmark-en.gif" width="125" height="16" style="border:none;padding:0px" alt="AddThis" /></a>');break;case"deco":_atw.evar(),te[1](te[2],te[3],te[4],te[5]);break;case"pref":_atw.gps(te[1])}}_ate.ed.fire("addthis.menu.ready",{atw:_atw}),window.postMessage&&(window.attachEvent?window.attachEvent("onmessage",_atw.cpmh):window.addEventListener("message",_atw.cpmh,!1))}},887:function(e,t,n){e.exports="//www.addthis.com/privacy"}});