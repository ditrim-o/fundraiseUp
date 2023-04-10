(()=>{"use strict";var t={853:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(933),o=r.n(n),a=r(476),s=r.n(a)()(o());s.push([t.id,".letters__item {\n    border: none;\n    background-color: #007BF6;\n    color: white;\n    font-weight: 500;\n    font-size: 20px;\n    height: 50px;\n    width: 50px;\n    border-radius: 5px;\n    cursor: pointer;\n    border: 4px solid transparent;\n    box-sizing: border-box;\n    transition: .4s;\n    outline: none;\n}\n\n.letters__item:focus,\n.letters__item:active {\n    border: 4px solid transparent;\n    outline: none;\n}\n\n.letters__item:hover {\n    background-color: #0363c2;\n}\n\n.letters__item.error {\n    background-color: #dc3545;\n    border-color: #e9717c;\n}\n\n.letters__item.success {\n    background-color: #28a745;\n}\n\n.answer {\n    height: 60px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    column-gap: 5px;\n    padding: 5px;\n}\n\n.letters {\n    display: flex;\n    justify-content: center;\n    column-gap: 5px;\n}\n\n.modal {\n    right: 9999px;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: 400px;\n    left: auto;\n}\n\n.modal.show {\n    right: auto;\n    left: 50%;\n}\n\n.modal .red {\n    color: #dc3545;\n}",""]);const i=s},476:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(n)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);n&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},933:t=>{t.exports=function(t){return t[1]}},892:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var a={},s=[],i=0;i<t.length;i++){var c=t[i],u=n.base?c[0]+n.base:c[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var f=r(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(m);else{var p=o(m,n);n.byIndex=i,e.splice(i,0,{identifier:d,updater:p,references:1})}s.push(d)}return s}function o(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var a=n(t=t||[],o=o||{});return function(t){t=t||[];for(var s=0;s<a.length;s++){var i=r(a[s]);e[i].references--}for(var c=n(t,o),u=0;u<a.length;u++){var l=r(a[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},311:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},60:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},192:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},760:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},865:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={id:n,exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.nc=void 0,(()=>{var t=r(892),e=r.n(t),n=r(760),o=r.n(n),a=r(311),s=r.n(a),i=r(192),c=r.n(i),u=r(60),l=r.n(u),d=r(865),f=r.n(d),m=r(853),p={};p.styleTagTransform=f(),p.setAttributes=c(),p.insert=s().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=l(),e()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals;var v=["apple","function","timeout","task","application","data","tragedy","sun","symbol","button","software"],h=function(t){for(var e=t.length-1;e>0;e--){var r=Math.floor(Math.random()*(e+1)),n=[t[r],t[e]];t[e]=n[0],t[r]=n[1]}return t},b=document.querySelector("#letters"),y=document.querySelector("#answer"),g=document.querySelector("#current_question"),I=document.querySelector("#total_questions"),w=function(){y.style.width="".concat(55*j.stateItems[j.currentItemNumber].word.length+10,"px")},S=function(){b.innerHTML="",y.innerHTML="";var t=j.stateItems[j.currentItemNumber],e=t.shuffledWord,r=t.slovedPart,n=t.isSloved,o=j.currentItemNumber+1,a=j.stateItems.length;e.forEach((function(t,e){b.innerHTML+='<button class="letters__item" data-letter="'.concat(t,'" data-id="').concat(e,'">').concat(t,"</button>")})),r.forEach((function(t,e){y.innerHTML+='<button class="letters__item '.concat(n||void 0===n?"success":"error",'" data-letter="').concat(t,'" data-id="').concat(e,'">').concat(t,"</button>")})),g.innerHTML=String(o),I.innerHTML=String(a)},x=document.querySelector("#continue-modal"),E=x.querySelector("#continue-btn"),N=x.querySelector("#retry-btn"),L=document.querySelector("#statistics-modal"),T=L.querySelector("#retry-button"),C=function(){document.addEventListener("keydown",M),null==b||b.addEventListener("click",_)},M=function(t){var e;"ArrowLeft"===(e=t.code)||"ArrowRight"===e?F(t.code):function(t){return 4===t.length&&t.includes("Key")}(t.code)&&void 0===j.stateItems[j.currentItemNumber].isSloved?P(t.code[3].toLowerCase()):"Enter"===t.code&&t.preventDefault()},_=function(t){var e=t.target;"BUTTON"===e.tagName&&P(e.dataset.letter,Number(e.dataset.id))},q=function(t){localStorage.removeItem("state"),t.classList.remove("show"),H()};function A(t){return function(t){if(Array.isArray(t))return O(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return O(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var k={currentItemNumber:0,iterator:0,stateItems:[]},j=new Proxy({currentItemNumber:0,iterator:0,stateItems:[]},{set:function(t,e,r){return t[e]=r,0===t.stateItems.length||("iterator"===e?S():setTimeout((function(){w(),S()}),500)),!0}}),H=function(){localStorage.getItem("state")?x.classList.add("show"):(Object.assign(j,k),j.stateItems=[],A(h(v)).forEach((function(t){j.stateItems.push({word:t.split(""),shuffledWord:h(t.split("")),slovedPart:[],isSloved:void 0,errorsCount:0,letterNubmer:0})})),S(),w(),C()),N.addEventListener("click",(function(t){q(x)})),E.addEventListener("click",(function(t){x.classList.remove("show"),W()})),T.addEventListener("click",(function(t){q(L)})),document.querySelectorAll(".btn-no-enter").forEach((function(t){t.addEventListener}))},W=function(){var t=JSON.parse(localStorage.getItem("state")||"");Object.assign(j,t),S(),w(),C()},P=function(t,e){var r,n,o,a,s=function(t,e){var r=t.stateItems[t.currentItemNumber],n=r.word,o=r.letterNubmer,a=r.errorsCount,s=n[o]===e,i=!s&&2===a,c=!s&&a<2,u=s&&o+1===n.length,l=(u||i)&&t.currentItemNumber+1===t.stateItems.length;return{isLetterCorrect:s,isThirdError:i,isNotThirdError:c,isWordFinishCorrect:u,isTrainingFinish:l,isNextWord:!l&&(u||i)}}(j,t),i=s.isLetterCorrect,c=s.isThirdError,u=s.isNotThirdError,l=s.isWordFinishCorrect,d=s.isTrainingFinish,f=s.isNextWord,m=j.stateItems[j.currentItemNumber],p=m.word,v=m.shuffledWord,h=m.slovedPart,y=m.letterNubmer,g=m.isSloved,I=m.errorsCount,w=null!=e?e:v.indexOf(t),S=!1;c&&(h=A(p),v=[],g=!1,y=p.length-1,I++),u&&(I++,S=!0,function(t){if(!(t<0)){var e=b.querySelector('button[data-id="'.concat(t,'"]'));null==e||e.classList.add("error")}}(w)),l?(h=A(p),v=[],g=!0,y=p.length-1):i&&(v.splice(w,1),h.push(t),y++),j.stateItems[j.currentItemNumber]={word:p,shuffledWord:v,slovedPart:h,isSloved:g,errorsCount:I,letterNubmer:y},S||j.iterator++,f&&j.currentItemNumber++,function(t){localStorage.setItem("state",JSON.stringify(t))}(j),d&&(r=function(t){var e={withoutErrors:0,wordsWithMostErrors:[],countOfErrors:0},r=0;return t.stateItems.forEach((function(t){0===t.errorsCount?e.withoutErrors++:e.countOfErrors+=t.errorsCount,t.errorsCount>r&&(r=t.errorsCount)})),t.stateItems.forEach((function(t){r>0&&t.errorsCount===r&&e.wordsWithMostErrors.push(t.word.join(""))})),e}(j),n=L.querySelector("#without-errors"),o=L.querySelector("#count-of-errors"),a=L.querySelector("#most-errors-word"),L.classList.add("show"),n.innerHTML=String(r.withoutErrors),o.innerHTML=String(r.countOfErrors),a.innerHTML=String(r.wordsWithMostErrors.map((function(t){return" "+t}))),localStorage.removeItem("state"),document.removeEventListener("keydown",M),null==b||b.removeEventListener("click",_))},F=function(t){var e=j.currentItemNumber+1<j.stateItems.length&&void 0!==j.stateItems[j.currentItemNumber].isSloved,r=j.currentItemNumber>0;"ArrowRight"===t&&e?j.currentItemNumber++:"ArrowLeft"===t&&r&&j.currentItemNumber--};document.addEventListener("DOMContentLoaded",(function(){H()}))})()})();