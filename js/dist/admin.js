module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=8)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e,r){"use strict";function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}r.d(e,"a",(function(){return n}))},,,,function(t,e){t.exports=flarum.core.compat["components/SettingsModal"]},,,function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(1),i=r(5),u=function(t){function e(){return t.apply(this,arguments)||this}Object(a.a)(e,t);var r=e.prototype;return r.className=function(){return"Modal--small"},r.title=function(){return app.translator.trans("therealsujitk.admin.gifs.title")},r.form=function(){return[m("div[class = Form-group]",[m("label",app.translator.trans("therealsujitk.admin.gifs.giphyAPIkey")),m("input",{class:"FormControl",bidi:this.setting("therealsujitk-gifs.giphy_api_key")}),m("hr"),m("div",[m("p[style = display: inline;]",app.translator.trans("therealsujitk.admin.about.stringA")),m("a",{href:"https://therealsuji.tk/github",target:"_blank"},"@therealsujitk"),m("br"),m("p[style = display: inline;]",app.translator.trans("therealsujitk.admin.about.stringB")),m("a",{href:"https://therealsuji.tk/donate",target:"_blank"},"PayPal")])])]},e}(r.n(i).a);o.a.initializers.add("therealsujitk/flarum-ext-gifs",(function(){o.a.extensionSettings["therealsujitk-gifs"]=function(){return o.a.modal.show(new u)}}))}]);
//# sourceMappingURL=admin.js.map