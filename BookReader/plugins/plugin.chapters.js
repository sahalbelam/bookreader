/*! For license information please see plugin.chapters.js.LICENSE.txt */
"use strict";(self.webpackChunk_internetarchive_bookreader=self.webpackChunk_internetarchive_bookreader||[]).push([[529],{235:function(e,t,r){r(9749),r(6544),r(4254),r(752),r(1694),r(6265),r(8373),r(6793),r(7629),r(7509),r(8052),r(4284),r(9730),r(1830),r(7049),r(2826),r(4043),r(2349),r(1919),r(9373),r(9903),r(9288),r(2506),r(5728),r(50),r(886),r(429),r(228),r(7522),r(6203),r(8077),r(2320),r(4338),r(3374),r(9772),r(3964);var n=r(8318),o=r(9089),i=r(9407),a=r(1312),c=n.dy`
<svg
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="tocTitleID tocDescID"
>
  <title id="tocTitleID">Table of contents icon</title>
  <desc id="tocDescID">An illustration of three text list items</desc>
  <g class="fill-color" fill-rule="evenodd"><rect height="3" rx="1.5" width="18" x="6"/><rect height="3" rx="1.5" width="18" x="6" y="21"/><rect height="3" rx="1.5" width="18" x="6" y="14"/><rect height="3" rx="1.5" width="18" x="6" y="7"/><rect height="3" rx="1.5" width="4"/><rect height="3" rx="1.5" width="4" y="21"/><rect height="3" rx="1.5" width="4" y="14"/><rect height="3" rx="1.5" width="4" y="7"/></g>
</svg>
`;class s extends n.oi{static get styles(){return n.iv`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return c}}customElements.define("ia-icon-toc",s);var l,u,f,p,h,d,y,v=r(5311),m=r(5311);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(){k=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var o=t.placement;if(t.kind===n&&("static"===o||"prototype"===o)){var i="static"===o?e:r;this.defineClassElement(i,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!P(e))return r.push(e);var t=this.decorateElement(e,o);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var i=this.decorateConstructor(r,t);return n.push.apply(n,i.finishers),i.finishers=n,i},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],o=e.decorators,i=o.length-1;i>=0;i--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var c=this.fromElementDescriptor(e),s=this.toElementFinisherExtras((0,o[i])(c)||c);e=s.element,this.addElementPlacement(e,t),s.finisher&&n.push(s.finisher);var l=s.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);r.push.apply(r,l)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var o=this.fromClassDescriptor(e),i=this.toClassDescriptor((0,t[n])(o)||o);if(void 0!==i.finisher&&r.push(i.finisher),void 0!==i.elements){e=i.elements;for(var a=0;a<e.length-1;a++)for(var c=a+1;c<e.length;c++)if(e[a].key===e[c].key&&e[a].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||I(t)||R(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=O(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var i={kind:t,key:r,placement:n,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),i.initializer=e.initializer),i},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:_(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=_(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function x(e){var t,r=O(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function E(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function P(e){return e.decorators&&e.decorators.length}function C(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function _(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function O(e){var t=function(e,t){if("object"!==g(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===g(t)?t:String(t)}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},j.apply(this,arguments)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}function R(e,t){if(e){if("string"==typeof e)return L(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?L(e,t):void 0}}function I(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function S(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function D(){D=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),c=new I(n||[]);return o(a,"_invoke",{value:O(e,r,c)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var p="suspendedStart",h="suspendedYield",d="executing",y="completed",v={};function m(){}function b(){}function w(){}var k={};l(k,a,(function(){return this}));var x=Object.getPrototypeOf,E=x&&x(x(L([])));E&&E!==r&&n.call(E,a)&&(k=E);var P=w.prototype=m.prototype=Object.create(k);function C(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function r(o,i,a,c){var s=f(e[o],e,i);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==g(u)&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(u).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function O(t,r,n){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=j(c,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var l=f(t,r,n);if("normal"===l.type){if(o=n.done?y:h,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=y,n.method="throw",n.arg=l.arg)}}}function j(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function R(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function L(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(g(t)+" is not iterable")}return b.prototype=w,o(P,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:b,configurable:!0}),b.displayName=l(w,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,l(e,s,"GeneratorFunction")),e.prototype=Object.create(P),e},t.awrap=function(e){return{__await:e}},C(_.prototype),l(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},C(P),l(P,s,"Generator"),l(P,a,(function(){return this})),l(P,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=L,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(R),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),R(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;R(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:L(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}function B(e,t,r,n,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}function A(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){B(i,n,o,a,c,"next",e)}function c(e){B(i,n,o,a,c,"throw",e)}a(void 0)}))}}v.extend(BookReader.defaultOptions,{olHost:"https://openlibrary.org",enableChaptersPlugin:!0,bookId:""}),BookReader.prototype.init=(y=BookReader.prototype.init,function(){y.call(this),this.options.enableChaptersPlugin&&"embed"!==this.ui&&this._chapterInit()}),BookReader.prototype._chapterInit=A(D().mark((function e(){var t,r,n,o,i=this;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=null,null===(t=this.options.table_of_contents)||void 0===t||!t.length){e.next=5;break}r=this.options.table_of_contents,e.next=9;break;case 5:return e.next=7,this.getOpenLibraryRecord(this.options.olHost,this.options.bookId);case 7:null!=(o=e.sent)&&null!==(n=o.table_of_contents)&&void 0!==n&&n.length&&(r=o.table_of_contents);case 9:r&&(this._tocEntries=r.map((function(e){return Object.assign({},e,{pageIndex:"number"==typeof e.leaf?i.book.leafNumToIndex(e.leaf):e.pagenum?i.book.getPageIndex(e.pagenum):void 0})})),this._chaptersRender(this._tocEntries),this.bind(BookReader.eventNames.pageChanged,(function(){return i._chaptersUpdateCurrent()})));case 10:case"end":return e.stop()}}),e,this)}))),BookReader.prototype._chaptersRender=function(){var e=this,t=this.shell;t.menuProviders.chapters={id:"chapters",icon:(0,n.dy)(l||(l=S(['<ia-icon-toc style="width: var(--iconWidth); height: var(--iconHeight);"></ia-icon-toc>']))),label:"Table of Contents",component:(0,n.dy)(u||(u=S(['<br-chapters-panel\n      .contents="','"\n      .jumpToPage="','"\n      @connected="','"\n    />'])),this._tocEntries,(function(t){e._chaptersUpdateCurrent(t),e.jumpToIndex(t)}),(function(t){e._chaptersPanel=t.target,e._chaptersUpdateCurrent()}))},t.updateMenuContents(),this._tocEntries.forEach((function(t,r){return e._chaptersRenderMarker(t,r)}))},BookReader.prototype._chaptersRenderMarker=function(e,t){var r=this;if(null!=e.pageIndex){var n=[e.label,e.title].filter((function(e){return e})).join(" ")||"Chapter ".concat(t+1),o=BookReader.util.cssPercentage(e.pageIndex,this.book.getNumLeafs()-1);m("<div></div>").append(m("<div />").text(n).append(m('<div class="BRchapterPage" />').text(this.book.getPageName(e.pageIndex)))).addClass("BRchapter").css({left:o}).appendTo(this.$(".BRnavline")).on("mouseenter",(function(e){var t=e.currentTarget,n=t.querySelector("div"),o=n.getBoundingClientRect(),i=t.getBoundingClientRect(),a=2*parseInt(getComputedStyle(n).paddingLeft);o.x-a<0&&n.style.setProperty("transform","translateX(-".concat(i.left-a,"px)")),r.$(".BRsearch,.BRchapter").removeClass("front"),m(e.target).addClass("front")})).on("mouseleave",(function(e){return m(e.target).removeClass("front")})).on("click",(function(){r._chaptersUpdateCurrent(e.pageIndex),r.jumpToIndex(e.pageIndex)})),this.$(".BRchapter, .BRsearch").each((function(e,t){var r=m(t);r.on("mouseenter",(function(){return r.addClass("front")})).on("mouseleave",(function(){return r.removeClass("front")}))}))}},BookReader.prototype.getOpenLibraryRecord=function(){var e=A(D().mark((function e(t,r){var n,o,i,a;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="".concat(t,"/query.json?type=/type/edition&*="),i="".concat(o,"&ocaid=").concat(r),e.next=4,m.ajax({url:i,dataType:"jsonp"});case 4:if((a=e.sent)&&a.length){e.next=9;break}return e.next=8,m.ajax({url:"".concat(o,"&source_records=ia:").concat(r),dataType:"jsonp"});case 8:a=e.sent;case 9:return e.abrupt("return",null===(n=a)||void 0===n?void 0:n[0]);case 10:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),BookReader.prototype._chaptersUpdateCurrent=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2==this.mode?Math.max.apply(Math,function(e){if(Array.isArray(e))return L(e)}(e=this.displayedIndices)||I(e)||R(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()):this.firstIndex,r=this._tocEntries.filter((function(e){return null!=e.pageIndex})).reverse(),n=r[r.findIndex((function(e){return e.pageIndex<=t}))];this._chaptersPanel&&(this._chaptersPanel.currentChapter=n)},function(e,t,r,n){var o=k(),i=t((function(e){o.initializeInstanceElements(e,a.elements)}),r),a=o.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===i.key&&e.placement===i.placement},n=0;n<e.length;n++){var o,i=e[n];if("method"===i.kind&&(o=t.find(r)))if(C(i.descriptor)||C(o.descriptor)){if(P(i)||P(o))throw new ReferenceError("Duplicated methods ("+i.key+") can't be decorated.");o.descriptor=i.descriptor}else{if(P(i)){if(P(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+i.key+").");o.decorators=i.decorators}E(i,o)}else t.push(i)}return t}(i.d.map(x)),e);o.initializeClassElements(i.F,a.elements),o.runClassFinishers(i.F,a.finishers)}([(0,o.Mo)("br-chapters-panel")],(function(e,t){var r=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(a,t);var r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(n);if(o){var r=T(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}(this,e)});function a(t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),r=i.call(this),e(w(r)),r.contents=t,r}return r=a,Object.defineProperty(r,"prototype",{writable:!1}),r}(t);return{F:r,d:[{kind:"field",decorators:[(0,o.Cb)({type:Array})],key:"contents",value:function(){return[]}},{kind:"field",decorators:[(0,o.Cb)({type:Object})],key:"currentChapter",value:function(){return{}}},{kind:"field",key:"jumpToPage",value:function(){return function(){}}},{kind:"method",key:"render",value:function(){var e=this;return(0,n.dy)(f||(f=S(["\n    <ol>\n      ","\n    </ol>\n    "])),this.contents.map((function(t){return e.renderTOCEntry(t)})))}},{kind:"method",key:"renderTOCEntry",value:function(e){var t=this,r=[e.label,e.title].filter((function(e){return e})).join(" "),o=null!=e.pageIndex;return(0,n.dy)(p||(p=S(['\n    <li\n      class="\n        BRtable-contents-el\n        ',"\n        ",'\n      "\n      style="','"\n      data-event-click-tracking="','"\n      @click="','"\n    >\n      ',"\n      ","\n    </li>"])),o?"clickable":"",e==this.currentChapter?"current":"",(0,a.V)({marginLeft:10*(e.level-1)+"px"}),(0,i.o)(o?"BRTOCPanel|GoToChapter":void 0),(function(){return t.jumpToPage(e.pageIndex)}),r,e.pagenum?(0,n.dy)(h||(h=S(['\n        <br />\n        <span class="BRTOCElementPage">Page ',"</span>\n      "])),e.pagenum):n.Ld)}},{kind:"method",key:"connectedCallback",value:function(){j(T(r.prototype),"connectedCallback",this).call(this),this.dispatchEvent(new CustomEvent("connected"))}},{kind:"method",key:"updated",value:function(e){var t;e.has("currentChapter")&&(null===(t=this.shadowRoot.querySelector("li.current"))||void 0===t||t.scrollIntoView({block:"nearest",behavior:"smooth"}))}},{kind:"get",static:!0,key:"styles",value:function(){return(0,n.iv)(d||(d=S(["\n      ol {\n        padding: 0;\n        margin: 0;\n        margin-right: 5px;\n      }\n      li {\n        padding: 10px;\n        overflow: hidden;\n        border-radius: 4px;\n      }\n      li.clickable {\n        font-weight: normal;\n        cursor: pointer;\n        transition: background-color 0.2s;\n      }\n\n      li.clickable:not(.current):hover {\n        background-color: rgba(255,255,255, 0.05);\n      }\n\n      li.current {\n        background-color: rgba(255,255,255,0.9);\n        color: #333;\n      }\n\n      .BRTOCElementPage {\n        font-size: 0.85em;\n        opacity: .8;\n      }"])))}}]}}),n.oi)},9407:function(e,t,r){r.d(t,{o:function(){return o}});var n=r(4817),o=function(e){return null!=e?e:n.Ld}}},function(e){e(e.s=235)}]);
//# sourceMappingURL=plugin.chapters.js.map