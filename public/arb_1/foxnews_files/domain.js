/*! updated; 02-19-2018 09:01 AM */

window.FOX_ENV_STATIC_DOMAIN=window.FOX_ENV_STATIC_DOMAIN||function(){function idx(e,v){return e.indexOf(v)>-1?1:0}for(var type="prod",found=!1,scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var src=scripts[i].getAttribute("src")||"";if(src&&(idx(src,"fncstatic.com/static/")||idx(src,"foxnews.com/static/")||idx(src,"foxbusiness.com/static/")||idx(src,"/static/v"))){found=src;break}}found&&(idx(found,"qa.global.")||idx(found,"-qa.")?type="qa":idx(found,"staging.")?type="staging":idx(found,"global.fncstatic")||(type="relative")),window.FOX_ENV_STATIC=window.FOX_ENV_STATIC||"relative"===type?"prod":type;var domain="global.fncstatic.com";switch(type){case"qa":domain="qa."+domain;break;case"staging":domain="v8-staging.foxnews.com";break;case"relative":domain=window.location.host}return"//"+domain}();