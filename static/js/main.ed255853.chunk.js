(this.webpackJsonp111=this.webpackJsonp111||[]).push([[0],{29:function(e,t,n){e.exports=n(55)},34:function(e,t,n){},35:function(e,t,n){},41:function(e,t){},43:function(e,t){},55:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(24),i=n.n(a),l=(n(34),n(25)),s=n(27),u=n(26),c=n(28),f=n(15),d=(n(35),n(36),function e(t){var n=this;Object(f.a)(this,e),this.xmlToJSON=function(){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n={toObj:function(e){var t={};if(1==e.nodeType){if(e.attributes.length)for(var r=0;r<e.attributes.length;r++)t["@"+e.attributes[r].nodeName]=(e.attributes[r].nodeValue||"").toString();if(e.firstChild){for(var o=0,a=0,i=!1,l=e.firstChild;l;l=l.nextSibling)1==l.nodeType?i=!0:3==l.nodeType&&l.nodeValue.match(/[^ \f\n\r\t\v]/)?o++:4==l.nodeType&&a++;if(i)if(o<2&&a<2){n.removeWhite(e);for(l=e.firstChild;l;l=l.nextSibling)3==l.nodeType?t["#text"]=n.escape(l.nodeValue):4==l.nodeType?t["#cdata"]=n.escape(l.nodeValue):t[l.nodeName]?t[l.nodeName]instanceof Array?t[l.nodeName][t[l.nodeName].length]=n.toObj(l):t[l.nodeName]=[t[l.nodeName],n.toObj(l)]:t[l.nodeName]=n.toObj(l)}else e.attributes.length?t["#text"]=n.escape(n.innerXml(e)):t=n.escape(n.innerXml(e));else if(o)e.attributes.length?t["#text"]=n.escape(n.innerXml(e)):t=n.escape(n.innerXml(e));else if(a)if(a>1)t=n.escape(n.innerXml(e));else for(l=e.firstChild;l;l=l.nextSibling)t["#cdata"]=n.escape(l.nodeValue)}e.attributes.length||e.firstChild||(t=null)}else 9==e.nodeType?t=n.toObj(e.documentElement):alert("unhandled node type: "+e.nodeType);return t},toJson:function(e,t,r){var o=t?'"'+t+'"':"";if(e instanceof Array){for(var a=0,i=e.length;a<i;a++)e[a]=n.toJson(e[a],"",r+"\t");o+=(t?":[":"[")+(e.length>1?"\n"+r+"\t"+e.join(",\n"+r+"\t")+"\n"+r:e.join(""))+"]"}else if(null==e)o+=(t&&":")+"null";else if("object"==typeof e){var l=[];for(var s in e)l[l.length]=n.toJson(e[s],s,r+"\t");o+=(t?":{":"{")+(l.length>1?"\n"+r+"\t"+l.join(",\n"+r+"\t")+"\n"+r:l.join(""))+"}"}else o+="string"==typeof e?(t&&":")+'"'+e.toString()+'"':(t&&":")+e.toString();return o},innerXml:function(e){var t="";if("innerHTML"in e)t=e.innerHTML;else for(var n=function e(t){var n="";if(1==t.nodeType){n+="<"+t.nodeName;for(var r=0;r<t.attributes.length;r++)n+=" "+t.attributes[r].nodeName+'="'+(t.attributes[r].nodeValue||"").toString()+'"';if(t.firstChild){n+=">";for(var o=t.firstChild;o;o=o.nextSibling)n+=e(o);n+="</"+t.nodeName+">"}else n+="/>"}else 3==t.nodeType?n+=t.nodeValue:4==t.nodeType&&(n+="<![CDATA["+t.nodeValue+"]]>");return n},r=e.firstChild;r;r=r.nextSibling)t+=n(r);return t},escape:function(e){return e.replace(/[\\]/g,"\\\\").replace(/[\"]/g,'\\"').replace(/[\n]/g,"\\n").replace(/[\r]/g,"\\r")},removeWhite:function(e){e.normalize();for(var t=e.firstChild;t;)if(3==t.nodeType)if(t.nodeValue.match(/[^ \f\n\r\t\v]/))t=t.nextSibling;else{var r=t.nextSibling;e.removeChild(t),t=r}else 1==t.nodeType?(n.removeWhite(t),t=t.nextSibling):t=t.nextSibling;return e}};9==e.nodeType&&(e=e.documentElement);var r=n.toJson(n.toObj(n.removeWhite(e)),e.nodeName,"\t");return"{\n"+t+(t?r.replace(/\t/g,t):r.replace(/\t|\n/g,""))+"\n}"}(function(e){var t=null;if(window.DOMParser)try{t=(new DOMParser).parseFromString(e,"text/xml")}catch(n){t=null}else alert("cannot parse xml string!");return t}(n.info))},this.jsonToXML=function(){var e=JSON.parse(n.info),t=function e(t,n,r){var o="";if(t instanceof Array)for(var a=0,i=t.length;a<i;a++)o+=r+e(t[a],n,r+"\t")+"\n";else if("object"==typeof t){var l=!1;for(var s in o+=r+"<"+n,t)"@"==s.charAt(0)?o+=" "+s.substr(1)+'="'+t[s].toString()+'"':l=!0;if(o+=l?">":"/>",l){for(var s in t)"#text"==s?o+=t[s]:"#cdata"==s?o+="<![CDATA["+t[s]+"]]>":"@"!=s.charAt(0)&&(o+=e(t[s],s,r+"\t"));o+=("\n"==o.charAt(o.length-1)?r:"")+"</"+n+">"}}else o+=r+"<"+n+">"+t.toString()+"</"+n+">";return o},r="";for(var o in e)r+=t(e[o],o,"");return r.replace(/\t|\n/g,"")},this.info=t}),m=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).xmlToJSON=function(e){var t=e.currentTarget.form[0].value,r=new d(t);return n.setState({result:r.xmlToJSON(t)})},n.jsonToXML=function(e){var t=e.currentTarget.form[0].value,r=new d(t);return n.setState({result:r.jsonToXML(t)})},n.state={result:""},n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h3",null,"xml to json and reverse"),o.a.createElement("form",null,o.a.createElement("textarea",null),o.a.createElement("br",null),o.a.createElement("button",{type:"button",onClick:this.xmlToJSON},"xml to json"),o.a.createElement("br",null),o.a.createElement("button",{type:"button",onClick:this.jsonToXML},"json to xml")),o.a.createElement("div",null,this.state.result))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.ed255853.chunk.js.map