/*! updated; 07-19-2016 12:49 PM */

Modulr.define("FOX_TEMPLATES:controls/frame",["require","jquery","lodash","config","FOX_PLUGINS:EventMessageHandler"],function(require,$,_,CONFIG){function loadTemplate(data,callback){$.ajax({url:data.template,dataType:"text"}).done(function(str){callback(str)})}var Events=new(require("FOX_PLUGINS:EventMessageHandler"));Events.addHandler(CONFIG.handlerEvent,function(data){data.template&&data.uid&&loadTemplate(data,function(str){Events.sendMessage("parent",CONFIG.handlerEvent,{uid:data.uid,str:str})})}),Events.sendMessage("parent",CONFIG.readyEvent,!0)});