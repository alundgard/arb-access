/*! updated; 07-19-2016 12:49 PM */

Modulr.define("FOX_PLUGINS:URLInfo",[],function(){function buildUrl(info){var url=info.path,query=joinPair(info.query),hash=joinPair(info.hash),ret=url+(query?"?"+query:"")+(hash?"#"+hash:"");return ret}function joinPair(pair){var arr=[];for(var i in pair){var val=pair[i];val?arr.push([i,encodeURIComponent(val)].join("=")):arr.push(i)}return arr?arr.join("&"):""}function getInfo(url){var sp=url.split("?"),path=sp[0],query=sp[1]||"",hash="";if(query.length>0){var hs=query.split("#");hash=trim(hs[1]||""),hash.length>0&&(query=hs[0])}else{var ps=path.split("#");hash=trim(ps[1]||""),hash.length>0&&(path=ps[0])}var ret={path:path,query:itemize(query),hash:itemize(hash)};return ret}function itemize(info){for(var si=info.split("&"),obj={},i=0;i<si.length;i++){var item=si[i];if(item.length>0){var s=si[i].split("=");obj[s[0]]=s[1]||""}}return obj}function trim(str){return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}var App=function(URL){var Proto=this,INFO=getInfo(URL);Proto.addQuery=function(pair,returnUrl){for(var i in pair)INFO.query[i]=pair[i];var ret=INFO;return returnUrl&&(ret=buildUrl(INFO)),ret},Proto.addHash=function(pair,returnUrl){for(var i in pair)INFO.hash[i]=pair[i];var ret=INFO;return returnUrl&&(ret=buildUrl(INFO)),ret},Proto.getUrl=function(){return buildUrl(INFO)},Proto.getInfo=function(){return INFO}};return App});